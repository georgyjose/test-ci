import { ButtonVariant } from "../../components/SelectableButton/SelectableButton";

declare module Quiz {

    interface Question {
        id: number;
        question: string;
        correctAnswers: number[];
    }

    interface AnswerKey {
        id: number;
        label: string;
        btnVariant: ButtonVariant;
    }

    interface RootObject {
        id: number;
        date: string;
        questions: Question[];
        answerKeys: AnswerKey[];
        targetAnswerId: number;
    }
}

export default Quiz;