import React, { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { shuffle } from "lodash";
import Quiz from "../../app/model/Quiz";
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
    const [gameStatus, setGameStatus] = useState<GamePlayState.GameStatus>('PLAYING')
    const [userAttemptData, setUserAttemptData] = useState<GamePlayState.AttemptData[]>([])
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [remainingOptions, setRemainingOptions] = useState(answerKeys.map(({ id }) => id))
    const [availableOptions, setAvailableOptions] = useState<GamePlayState.Option[]>(answerKeys)

    useEffect(() => {
        const gameStateString = window.localStorage.getItem('game_state')
        if (gameStateString) {
            const { gameStatus, userAttemptData, timeTaken, date, availableOptions } = JSON.parse(gameStateString) as GamePlayState.Root
            if (date === today) {
                setGameStatus(gameStatus)
                setUserAttemptData(userAttemptData)
                setTime(timeTaken)
                if (gameStatus === 'PLAYING') {
                    setActiveQuestionIndex(userAttemptData.length)
                    setAvailableOptions(availableOptions)
                    const remaining = availableOptions.map((option) => option.id)
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

        const gameStatusToStore: GamePlayState.Root = {
            quizId,
            gameStatus,
            userAttemptData: [
                ...userAttemptData,
                {
                    level: activeQuestionIndex,
                    question: questions[activeQuestionIndex].question,
                    selectedOptions: getAttemptDataWithCorrectAnswers(
                        selectedOptions,
                        availableOptions)
                }
            ],
            timeTaken: time,
            date,
            availableOptions: []
        }

        if (activeQuestionIndex !== questions.length - 1) {

            const optionsForNextQuestion = getOptionsForNextQuestion(
                activeQuestionIndex + 1,
                questions[activeQuestionIndex + 1].id,
                availableOptions
            )
            gameStatusToStore.availableOptions = optionsForNextQuestion
            setRemainingOptions(optionsForNextQuestion.map((option) => option.id))
            setAvailableOptions(optionsForNextQuestion)
            setActiveQuestionIndex((currentValue) => currentValue + 1)
        } else {
            setGameStatus('COMPLETED')
            gameStatusToStore.gameStatus = 'COMPLETED'
            sendMoengageEvent('Entri Game Finish', { question_number: activeQuestionIndex + 1 })
        }

        setUserAttemptData(gameStatusToStore.userAttemptData)
        window.localStorage.setItem('game_state', JSON.stringify(gameStatusToStore))

    }

    const getAttemptDataWithCorrectAnswers = (
        selectedOptions: number[],
        options: GamePlayState.Option[]
    ) => {
        return options.map((option) => {
            return {
                ...option,
                isSelected: selectedOptions.includes(option.id)
            }
        })
    }

    const getOptionsForNextQuestion = (
        questionIndex: number,
        questionId: number,
        availableOptions: GamePlayState.Option[]) => {
        const reduceCount = [0, 3, 2, 1, 1]
        const correctAnswers = questions.find((question) => question.id === questionId)!.correctAnswers
        const inCorrectAnswers = availableOptions.filter((option) => !correctAnswers.includes(option.id))
        const shuffledIncorrect = shuffle(inCorrectAnswers).slice(0, inCorrectAnswers.length - reduceCount[questionIndex])

        return [
            ...getOptions(correctAnswers).map((option) => {
                return {
                    ...option,
                    isCorrect: true,
                }
            }),
            ...shuffledIncorrect,
        ]
    }

    const getOptions = (selectedIds: number[]) => {
        return selectedIds.map((selectedId) => {
            return answerKeys.find((answerkey) => answerkey.id === selectedId)!
        })
    }

    const getCorrectAnswerCount = (questionIndex: number) => {
        return questions[questionIndex].correctAnswers.length
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
                    correctAnswerCount={getCorrectAnswerCount(activeQuestionIndex)}
                    options={optionsObject}
                    onComplete={handleNextQuestion}
                />

            case 'COMPLETED':
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