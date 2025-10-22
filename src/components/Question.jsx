import { useContext } from 'react'
import { QuizContext } from '../context/quiz.jsx'

import '../styles/Question.css'

const Question = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];


  return (
    <div className="question-container"> {/* Container principal */}
        <p>
          Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
        </p>

        <h2>
          {currentQuestion.question}
        </h2>

        <div className="options-container"> {/* Container das opções */}
          
          <p>
            Opções
          </p>

        </div>
        <button className="btn-continue"> {/* Botão continuar */}
          Continuar
        </button>
    </div>
  )
}

export default Question