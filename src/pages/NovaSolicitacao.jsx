import Navbar from '../components/Navbar'
import '../styles/novaSolicitacao.css'
import cameraImg from './vs.jpg'

function NovaSolicitacao() {

  return (
    <>

      <Navbar />

      <div className="container">

        <div className="logo">
        <img src={cameraImg} alt="" />
      </div>

        <h1 className="titulo-nova">
          Nova Solicitação
        </h1>

        <form className="formulario">

          <label>
            Motivo da Solicitação
          </label>

          <textarea
            placeholder="Descreva detalhadamente o motivo da solicitação..."
          ></textarea>

          <label>
            Data do ocorrido
          </label>

          <input type="date" />

          <label>
            Horário aproximado
          </label>

          <input type="time" />

          <button type="submit">
            Enviar Solicitação
          </button>

        </form>

      </div>

    </>
  )
}

export default NovaSolicitacao