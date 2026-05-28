
import { useNavigate } from 'react-router-dom'
import cameraImg from './vs.jpg'
import '../styles/home.css'

function Home() {

  const navigate = useNavigate()

  return (

    
    <div className="container">
<nav> batata</nav>
        <div className="logo">
        <img src={cameraImg} alt="" />
      </div>

      <h1>Sistema de Solicitações</h1>

      <div className="buttons">

        <button
          onClick={() => navigate('/nova-solicitacao')}
        >
          Nova Solicitação
        </button>

        <button
          onClick={() => navigate('/minhas-solicitacoes')}
        >
          Minhas Solicitações
        </button>

      </div>

    </div>

  )
}

export default Home
