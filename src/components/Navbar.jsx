import { useNavigate } from 'react-router-dom'
import cameraImg1 from './cps.jpg'


import './Navbar.css'

function Navbar() {

  const navigate = useNavigate()

  return (

    <nav className="navbar">

      <div className="navbar-logo">
         Sistema de Solicitações
      </div>

      <div className="logo1">
              <img src={cameraImg1} alt="" />
            </div>

      <div className="navbar-links">

        <button onClick={() => navigate('/')}>
          Home
        </button>

        <button onClick={() => navigate('/nova-solicitacao')}>
          Nova Solicitação
        </button>

        <button onClick={() => navigate('/minhas-solicitacoes')}>
          Minhas Solicitações
        </button>

      </div>

    </nav>

  )
}

export default Navbar