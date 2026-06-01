

   import { useNavigate } from 'react-router-dom'
   import cameraImg from './vs.jpg'

import Navbar from '../components/Navbar'
import '../styles/home.css'

function Home() {

  const navigate = useNavigate()

  return (
    <>

      <Navbar />

      <div className="container">

        <div className="logo">
        <img src={cameraImg} alt="" />
      </div>

        <h1 className="titulo-home">
          Sistema de Solicitações
        </h1>

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

        <footer>

          <div className="redes">

            <a href="#">
              Instagram
            </a>

            <a href="#">
              GitHub
            </a>

            <a href="#">
              LinkedIn
            </a>

          </div>

          <p>
            © 2026 - Todos os direitos reservados
          </p>

        </footer>

      </div>

    </>
  )
}

export default Home