import React from 'react';
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

    const handleClickShare = () => {
        sendMoengageEvent('Entri Game Score Share')
        shareAttemptData(quizId, userAttemptData, timeTaken)
    }

    const handleViewAnswers = () => {
        sendMoengageEvent('Entri Game Answers View')
        navigate('/answers')
    }


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
            <EGSelectableButton
                variant='green'
                style={{ marginTop: 30 }}
                onClick={handleViewAnswers}
            >
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>View Answers</span>
                    <ArrowRight height={20} />
                </div>
            </EGSelectableButton>

            <div className='download-btn-container'>
                <DownloadButton />
            </div>

            <div className='share-btn-container'>
                <EGButton onClick={handleClickShare}>
                    Share
                </EGButton>
            </div>
        </>
    )
}

export default GameStats;