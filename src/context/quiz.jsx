import { createContext, useReducer } from "react";
import question from "../data/questions.js";

const Stages = ["Start", "Playing", "End" ];

const initialState = {
    gameStage: Stages[0],
    questions: question,
};

const quizReducer = (state, action) => {
    console.log(state, action);
    switch(action.type) {
        case "CHANGE_STAGE":
            return {
                ...state,
                gameStage: action.payload,
            };
        default:
            return state;
    }
}

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => { 
    const value = useReducer(quizReducer, initialState);
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};