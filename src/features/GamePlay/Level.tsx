import React, { useState } from "react";
import { isEmpty } from "lodash";
import GamePlayState from "./models";
import EGCard from "../../components/Card/Card";
import EGSelectableButton from "../../components/SelectableButton/SelectableButton";
import EGButton from "../../components/Button/Button";
import clsx from "clsx";

import './Level.scss';

interface LevelProps {
    level: number;
    question: string;
    questionsCount: number;
    correctAnswerCount: number;
    options: GamePlayState.Option[];
    onComplete: Function;
}

const Level: React.FC<LevelProps> = ({
    level,
    question,
    questionsCount,
    correctAnswerCount,
    options,
    onComplete,
}) => {

    const [selectedOptions, setSelectedOptions] = useState<number[]>([])

    const handleOptionClick = (selectedOptionId: number) => {
        const index = selectedOptions.indexOf(selectedOptionId);
        if (index >= 0) {
            setSelectedOptions((currentState) => currentState.filter((optionId) => optionId !== selectedOptionId))
        } else {
            if (selectedOptions.length === correctAnswerCount) return
            setSelectedOptions((currentState) => [...currentState, selectedOptionId])
        }
    }

    const handleNextQuestion = () => {
        if (isEmpty(selectedOptions)) return
        setSelectedOptions([])
        onComplete(selectedOptions)
    }

    return (
        <div className="level">
            <EGCard>
                {question}
            </EGCard>
            <div
                className="options-container"
                style={{ marginTop: 24 }}
            >
                {options.map((option) => {
                    return (
                        <EGSelectableButton
                            key={option.id}
                            className='option'
                            variant={option.btnVariant ?? 'blue'}
                            selected={selectedOptions.includes(option.id)}
                            onClick={() => handleOptionClick(option.id)}
                        >
                            <span>{option.label}</span>
                        </EGSelectableButton>
                    )
                })}
            </div>
            <div className="action-btn-container">
                <div className={clsx("attempt-progress", {
                    'completed': selectedOptions.length === correctAnswerCount
                })} >
                    <strong>{selectedOptions.length}</strong>
                    <span>/</span>
                    {correctAnswerCount}
                </div>
                <EGButton
                    disabled={isEmpty(selectedOptions) || (selectedOptions.length !== correctAnswerCount)}
                    onClick={handleNextQuestion}
                >
                    Submit
                </EGButton>
            </div>
        </div>
    )
}

export default Level;