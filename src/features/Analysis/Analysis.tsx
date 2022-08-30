import React, { useEffect, useState } from "react";
import clsx from "clsx";
import GamePlayState from "../GamePlay/models";
import { format } from "date-fns";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel } from 'swiper';
import EGCard from "../../components/Card/Card";

import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Analysis.scss';

const Analysis = () => {
    const today = format(new Date(), 'dd/MM/yyyy')
    const [userAttemptData, setUserAttemptData] = useState<GamePlayState.AttemptData[]>([])

    useEffect(() => {
        const gameStateString = window.localStorage.getItem('game_state')
        if (gameStateString) {
            const { gameStatus, userAttemptData, date } = JSON.parse(gameStateString) as GamePlayState.Root
            if (gameStatus === 'PLAYING') {
                goToHomescreen()
            }
            if (date === today) {
                setUserAttemptData(userAttemptData)
            }
        } else {
            goToHomescreen()
        }
    }, [])

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
        <Swiper
            style={{ maxWidth: 312 }}
            spaceBetween={50}
            slidesPerView={1}
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
                    >
                        {getQuestionItem(userAttemptLevel)}
                    </SwiperSlide>
                )
            })}
            <div className="swiper-pagination"></div>
        </Swiper>
    );

}

export default Analysis;