import { useNavigate } from 'react-router-dom'
import cameraImg from './vs.jpg'
import '../styles/telaInicial.css'

function TelaInicial() {

  const navigate = useNavigate()

  return (

    <div className="telaInicial">

        <div className="logo">
          <img src={cameraImg} alt="Logo" />
        </div>

      <div className="botoesInicial">

        <button
          onClick={() => navigate('/login')}
        >
          Sou Aluno
        </button>

        <button>
          Sou Coordenador
        </button>

      </div>

    </div>
  )
}

export default TelaInicial