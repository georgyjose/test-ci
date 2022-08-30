import React from 'react';
import GamePlayState from '../GamePlay/models';
import { shareAttemptData, } from '../../app/utils';
import EGSelectableButton from '../../components/SelectableButton/SelectableButton';
import { ReactComponent as ArrowRight } from '../../assets/images/right_arrow.svg';
import EGButton from '../../components/Button/Button';

import './GameStats.scss';
import OptionIndicator from '../../components/OptionIndicator/OptionIndicator';
import { useNavigate } from 'react-router-dom';

interface GameStatsProps {
    quizId: number;
    gameStatus: GamePlayState.GameStatus;
    userAttemptData: GamePlayState.AttemptData[];
    timeTaken: number;
}

const GameStats: React.FC<GameStatsProps> = ({
    quizId,
    gameStatus,
    userAttemptData,
    timeTaken,
}) => {
    const navigate = useNavigate()

    const getQuestionAttemptIndicator = (selectedOptions: GamePlayState.Option[]) => {
        return (
            <div className='attempt-indicator-container'>
                {selectedOptions.map((option) => {
                    if (!option.isSelected) return
                    return <OptionIndicator key={option.id} isWrong={!option.isCorrect} />
                })}
            </div>
        )
    }

    const handleClickShare = () => {
        shareAttemptData(quizId, userAttemptData, timeTaken)
    }

    const handleViewAnswers = () => {
        navigate('/answers')
    }

    const handleDownloadEntri = () => {
        const win = window.open('https://play.google.com/store/apps/details?id=me.entri.entrime', '_blank');
        if (win != null) {
            win.focus();
        }
    }

    return (
        <>
            <p style={{ fontWeight: 500, fontFamily: 'Inter', textAlign: 'center', fontSize: '0.875rem' }}>{gameStatus === 'FAILED' ?
                'Uh-ohh you didn’t make it, keep up next time.' :
                'Congrats'}!</p>
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
            <EGSelectableButton
                variant='blue'
                style={{ marginTop: 22 }}
                onClick={handleDownloadEntri}
            >
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                    Download Entri app from Playstore for a better learning experience!
                    {/* <a href='https://play.google.com/store/apps/details?id=me.entri.entrime&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a> */}
                    <img style={{ margin: -6 }} width={120} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                </div>
            </EGSelectableButton>

            <div className='share-btn-container'>
                <EGButton onClick={handleClickShare}>
                    Share
                </EGButton>
            </div>
        </>
    )
}

export default GameStats;