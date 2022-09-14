import Quiz from "../../app/model/Quiz";

declare module GamePlayState {

    export interface Option extends Quiz.AnswerKey {
        isSelected?: boolean;
    }

    export interface AttemptData {
        level: number;
        question: string;
        selectedOptions: Option[];
    }

    export type GameStatus = 'PLAYING' | 'COMPLETED';

    export interface Root {
        quizId: number,
        date: string;
        gameStatus: GameStatus;
        timeTaken: number;
        userAttemptData: AttemptData[],
        availableOptions: Option[],
    }
}

export default GamePlayState