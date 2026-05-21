
import '../styles/novaSolicitacao.css'

function NovaSolicitacao() {

  return (

    <div className="container">

      <h1>Nova Solicitação</h1>

      <form className="formulario">

        <label>
          Motivo da Solicitação
        </label>

        <textarea
          placeholder="Descreva o motivo..."
        ></textarea>

        <label>
          Data
        </label>

        <input type="date" />

        <label>
          Horário
        </label>

        <input type="time" />

        <button type="submit">
          Enviar Solicitação
        </button>

      </form>

    </div>

  )
}

export default NovaSolicitacao