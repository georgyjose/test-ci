import React, { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { random, shuffle } from "lodash";
import Quiz from "../../app/model/Quiz";
import { areEqual, intersection } from "../../app/utils";
import { buttonVariants } from "../../components/SelectableButton/SelectableButton";
import GameStats from "../GameStats/GameStats";
import Level from "./Level";
import GamePlayState from "./models";
import { sendMoengageEvent } from "../../app/tracker/moengage";

interface GamePlayProps {
    quiz: Quiz.RootObject
}

const GamePlay: React.FC<GamePlayProps> = ({ quiz }) => {
    const { id: quizId, questions, date, answerKeys } = quiz
    const today = format(new Date(), 'dd/MM/yyyy')

    const [time, setTime] = useState(0)
    const [gameStatus, setGameStatus] = useState('PLAYING')
    const [userAttemptData, setUserAttemptData] = useState<GamePlayState.AttemptData[]>([])
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [remainingOptions, setRemainingOptions] = useState(answerKeys.map(({ id }) => id))

    useEffect(() => {
        const gameStateString = window.localStorage.getItem('game_state')
        if (gameStateString) {
            const { gameStatus, userAttemptData, timeTaken, date } = JSON.parse(gameStateString) as GamePlayState.Root
            if (date === today) {
                setGameStatus(gameStatus)
                setUserAttemptData(userAttemptData)
                setTime(timeTaken)
                if (gameStatus === 'PLAYING') {
                    setActiveQuestionIndex(userAttemptData.length)
                    const remaining = userAttemptData[userAttemptData.length - 1].selectedOptions.filter((option) => option.isSelected).map((option) => option.id)
                    setRemainingOptions(remaining)
                }
            }
        }
    }, [])

    useEffect(() => {
        if (gameStatus !== 'PLAYING') return
        const timer = setInterval(() => {
            setTime((currentTime) => currentTime + 1)
        }, 1000);

        return () => clearInterval(timer)
    }, [time, gameStatus])

    const handleNextQuestion = (selectedOptions: number[]) => {
        const gameStatusToStore = {
            quizId,
            gameStatus,
            userAttemptData: [
                ...userAttemptData,
                {
                    level: activeQuestionIndex + 1,
                    question: questions[activeQuestionIndex].question,
                    selectedOptions: getAttemptDataWithCorrectAnswers(questions[activeQuestionIndex].id, selectedOptions),
                },
            ],
            timeTaken: time,
            date,
        }

        // Proceed only if all options are correct
        if (areEqual(selectedOptions, questions[activeQuestionIndex].correctAnswers)) {
            if (selectedOptions.length === 1) {
                sendMoengageEvent('Entri Game Finish', { question_number: activeQuestionIndex + 1 })
                setGameStatus('WON')
                gameStatusToStore.gameStatus = 'WON'
            }
            setActiveQuestionIndex((currentValue) => currentValue + 1)
        } else {
            sendMoengageEvent('Entri Game Finish', { question_number: activeQuestionIndex + 1 })
            setGameStatus('FAILED')
            gameStatusToStore.gameStatus = 'FAILED'
            gameStatusToStore.userAttemptData.push(...questionsNotAttempted(activeQuestionIndex + 1))
        }
        setRemainingOptions(selectedOptions)
        window.localStorage.setItem('game_state', JSON.stringify(gameStatusToStore))
        setUserAttemptData(gameStatusToStore.userAttemptData)
    }

    const questionsNotAttempted = (fromIndex: number) => {
        const questionsNotAttempted = []
        for (let i = fromIndex; i < questions.length; i++) {
            questionsNotAttempted.push({
                level: i + 1,
                question: questions[i].question,
                selectedOptions: getAttemptDataWithCorrectAnswers(questions[i].id, []),
            })
        }
        return questionsNotAttempted
    }

    const getAttemptDataWithCorrectAnswers = (questionId: number, selectedOptions: number[]) => {
        const correctAnswers = questions.find((question) => question.id === questionId)!.correctAnswers
        const allSelectedAndCorrectOptions = Array.from(new Set([...selectedOptions, ...correctAnswers]))
        return getOptions(allSelectedAndCorrectOptions).map((option) => {
            return {
                id: option.id,
                label: option.label,
                isCorrect: correctAnswers.includes(option.id),
                isSelected: selectedOptions.includes(option.id),
                btnVariant: buttonVariants[random(0, 4)],
            }
        })
    }

    const getOptions = (selectedIds: number[]) => {
        return selectedIds.map((selectedId) => {
            return answerKeys.find((answerkey) => answerkey.id === selectedId)!
        })
    }

    function getCorrectAnswerCount(questionIndex: number, correctAnswers: number[]): number {
        if (questionIndex === 0) {
            return correctAnswers.length
        }
        const arrayIntersection = intersection(correctAnswers, questions[questionIndex - 1].correctAnswers)
        return getCorrectAnswerCount(questionIndex - 1, arrayIntersection)
    }

    const optionsObject = useMemo(() => getOptions(shuffle(remainingOptions)), [remainingOptions])

    const getScreenContent = () => {
        switch (gameStatus) {
            case 'PLAYING':
            default:
                return <Level
                    level={activeQuestionIndex + 1}
                    question={questions[activeQuestionIndex].question}
                    questionsCount={questions.length}
                    correctAnswerCount={getCorrectAnswerCount(activeQuestionIndex, questions[activeQuestionIndex].correctAnswers)}
                    options={optionsObject}
                    onComplete={handleNextQuestion}
                />

            case 'FAILED':
                return <GameStats
                    quizId={quizId}
                    gameStatus={gameStatus}
                    userAttemptData={userAttemptData}
                    timeTaken={time}
                />

            case 'WON':
                return <GameStats
                    quizId={quizId}
                    gameStatus={gameStatus}
                    userAttemptData={userAttemptData}
                    timeTaken={time}
                />
        }
    }

    return (
        <>
            {getScreenContent()}
        </>
    )
}

export default GamePlay;