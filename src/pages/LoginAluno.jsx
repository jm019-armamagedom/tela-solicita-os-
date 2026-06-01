import { useNavigate } from 'react-router-dom'
import cameraImg from './vs.jpg'
import '../styles/loginAluno.css'

function LoginAluno() {

  const navigate = useNavigate()

  return (

    <div className="loginContainer">

<div className="logo">
        <img src={cameraImg} alt="" />
      </div>
      
      <div className="loginCard">

        <h1>Login Aluno</h1>

        <input
          type="text"
          placeholder="RM"
        />

        <input
          type="password"
          placeholder="Senha"
        />

        <button
          onClick={() => navigate('/home')}
        >
          Entrar
        </button>

      </div>

    </div>
  )
}

export default LoginAluno