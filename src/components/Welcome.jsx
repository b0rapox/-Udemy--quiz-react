import Quiz from '../img/quiz.svg'
import '../style/Welcome.css'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz.jsx'

const Welcome = () => {

const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="welcome"> {/* A classe 'welcome' foi adicionada aqui */}
        <h2>Seja Bem Vindo</h2>
        <p>Clique no botão abaixo para iniciar</p>

        <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
          Começar
        </button>
        <img src={Quiz} alt="início do quiz"/>
    </div>
  )
}

export default Welcome