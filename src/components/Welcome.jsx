import Quiz from '../img/quiz.svg'
import '../style/Welcome.css'

const Welcome = () => {
  return (
    <div className="welcome"> {/* A classe 'welcome' foi adicionada aqui */}
        <h2>Seja Bem Vindo</h2>
        <p>Clique no botão abaixo para iniciar</p>

        <button>Começar</button>
        <img src={Quiz} alt="início do quiz"/>
    </div>
  )
}

export default Welcome