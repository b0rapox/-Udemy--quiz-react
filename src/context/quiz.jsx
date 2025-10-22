import { createContext, useReducer } from "react";
import question from "../data/questions.js";

const Stages = ["Start", "Playing", "End" ];

const initialState = {
    gameStage: Stages[0],
    questions: question,
    currentQuestion: 0,
};

const quizReducer = (state, action) => {
    console.log(state, action);
    switch(action.type) {
        case "CHANGE_STAGE":
            return {
                ...state,
                gameStage: Stages[1],
                questions: state.questions,
            };

        case "REORDER_QUESTIONS":
            const reorderedQuestions = question.sort(() => Math.random() - 0.5);
            return {
                ...state,
                questions: reorderedQuestions,
            };
        }}

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => { 
    const value = useReducer(quizReducer, initialState);
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};