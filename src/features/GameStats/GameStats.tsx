import React, { useEffect, useMemo, useState } from 'react';
import GamePlayState from '../GamePlay/models';
import { shareAttemptData, } from '../../app/utils';
import EGSelectableButton from '../../components/SelectableButton/SelectableButton';
import { ReactComponent as ArrowRight } from '../../assets/images/right_arrow.svg';
import EGButton from '../../components/Button/Button';

import './GameStats.scss';
import OptionIndicator from '../../components/OptionIndicator/OptionIndicator';
import { useNavigate } from 'react-router-dom';
import { sendMoengageEvent } from '../../app/tracker/moengage';
import DownloadButton from '../../components/DownloadButton';
import { format, intervalToDuration, startOfDay } from 'date-fns';

interface GameStatsProps {
    quizId: number;
    gameStatus: GamePlayState.GameStatus;
    userAttemptData: GamePlayState.AttemptData[];
    timeTaken: number;
}

export const getQuestionAttemptIndicator = (selectedOptions: GamePlayState.Option[]) => {
    return (
        <div className='attempt-indicator-container'>
            {selectedOptions.map((option) => {
                if (!option.isSelected) return
                return <OptionIndicator key={option.id} isWrong={!option.isCorrect} />
            })}
        </div>
    )
}

const GameStats: React.FC<GameStatsProps> = ({
    quizId,
    gameStatus,
    userAttemptData,
    timeTaken,
}) => {
    const navigate = useNavigate()
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)

        return () => clearInterval(timer)
    }, [])

    const handleClickShare = () => {
        sendMoengageEvent('Entri Game Score Share')
        shareAttemptData(quizId, userAttemptData, timeTaken)
    }

    const handleViewAnswers = () => {
        sendMoengageEvent('Entri Game Answers View')
        navigate('/answers')
    }

    function timeDifference(date1: Date, date2: Date) {
        var difference = Math.trunc(date1.getTime() - date2.getTime() / 1000);
        const formattedTime = format(difference, 'hh:MM:ss')
        return formattedTime;
    }

    const getRemainingTime = useMemo(() => {
        const tomorrow = new Date()
        tomorrow.setDate(new Date().getDate() + 1)
        const startOfTomorrow = startOfDay(tomorrow)
        const difference = startOfTomorrow.getTime() - new Date().getTime();
        const formattedTime = new Date(difference).toISOString().substr(11, 8)
        return formattedTime
    }, [time])

    return (
        <>
            {/* <p style={{ fontWeight: 500, fontFamily: 'Inter', textAlign: 'center', fontSize: '0.875rem' }}>{gameStatus === 'FAILED' ?
                'Uh-ohh you didn’t make it, keep up next time.' :
                'Congrats'}!</p> */}
            <div style={{ margin: '0 auto' }}>
                {userAttemptData.map((userAttemptLevel, index) => {
                    return (
                        <div key={index} style={{ marginTop: 10 }}>
                            {getQuestionAttemptIndicator(userAttemptLevel.selectedOptions)}
                        </div>
                    )
                })}
            </div>

            <div className='share-btn-container'>
                <EGButton onClick={handleClickShare}>
                    Share
                </EGButton>
            </div>

            <EGSelectableButton
                variant='green'
                style={{ margin: '20px 0' }}
                onClick={handleViewAnswers}
            >
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>View Answers</span>
                    <ArrowRight height={20} />
                </div>
            </EGSelectableButton>

            {/* <div className='download-btn-container'>
                <DownloadButton />
            </div> */}

            <span className='next-quiz-time'>Next quiz in <strong>{getRemainingTime}</strong></span>
        </>
    )
}

export default GameStats;