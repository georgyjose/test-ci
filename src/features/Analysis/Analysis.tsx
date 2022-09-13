import React, { useEffect, useState } from "react";
import clsx from "clsx";
import GamePlayState from "../GamePlay/models";
import { format } from "date-fns";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel } from 'swiper';
import EGCard from "../../components/Card/Card";
import { getQuestionAttemptIndicator } from "../GameStats/GameStats";
import { isEmpty } from "lodash";
import EGButton from "../../components/Button/Button";
import { sendMoengageEvent } from "../../app/tracker/moengage";
import { shareAttemptData } from "../../app/utils";
import DownloadButton from "../../components/DownloadButton";

import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Analysis.scss';

const Analysis = () => {
    const today = format(new Date(), 'dd/MM/yyyy')
    const [userAttemptData, setUserAttemptData] = useState<GamePlayState.AttemptData[]>([])
    const [quizId, setQuizId] = useState<number>(0)
    const [timeTaken, setTimeTaken] = useState<number>(0)

    useEffect(() => {
        const gameStateString = window.localStorage.getItem('game_state')
        if (gameStateString) {
            const {
                quizId,
                gameStatus,
                userAttemptData,
                date,
                timeTaken,
            } = JSON.parse(gameStateString) as GamePlayState.Root
            if (gameStatus === 'PLAYING' || date !== today) goToHomescreen()
            setQuizId(quizId)
            setTimeTaken(timeTaken)
            setUserAttemptData(userAttemptData)
        } else {
            goToHomescreen()
        }
    }, [])

    const handleClickShare = () => {
        sendMoengageEvent('Entri Game Score Share')
        shareAttemptData(quizId, userAttemptData, timeTaken)
    }

    const goToHomescreen = () => {
        const origin = window.location.origin
        window.location.replace(origin)
    }

    const getQuestionItem = (
        userAttemptLevel: GamePlayState.AttemptData,
    ) => {
        const { selectedOptions, question } = userAttemptLevel;
        return (
            <>
                {!isEmpty(selectedOptions) &&
                    <div style={{ paddingTop: 4, paddingBottom: 20 }}>
                        {getQuestionAttemptIndicator(selectedOptions)}
                    </div>}
                <EGCard>
                    {question}
                </EGCard>
                <div className='answers-container' style={{ marginTop: 14 }}>
                    {selectedOptions.map((option) => {
                        return (
                            <div
                                key={option.id}
                                className={clsx(
                                    'option',
                                    {
                                        'selected': option.isSelected,
                                        'correct': option.isCorrect,
                                        'wrong': !option.isCorrect,
                                    })}
                            >
                                {option.label}
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <div style={{ height: '100%' }}>
            <Swiper
                style={{ maxWidth: '100%' }}
                spaceBetween={50}
                slidesPerView={1}
                autoHeight
                modules={[
                    Pagination,
                    Keyboard,
                    Mousewheel,
                ]}
                pagination={{
                    el: '.swiper-pagination',
                    type: 'bullets',
                }}
                mousewheel={{
                    invert: false,
                }}
                keyboard={{
                    enabled: true,
                }}
            >
                {userAttemptData.map((userAttemptLevel, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            style={{ paddingBottom: 30 }}
                        >
                            {getQuestionItem(userAttemptLevel)}
                        </SwiperSlide>
                    )
                })}
                <div className="swiper-pagination"></div>
            </Swiper>

            <div className='download-btn-container'>
                <DownloadButton />
            </div>

            <div className='share-btn-container'>
                <EGButton
                    onClick={handleClickShare}
                    style={{ marginTop: 22 }}
                >
                    Share
                </EGButton>
            </div>
        </div>
    );

}

export default Analysis;