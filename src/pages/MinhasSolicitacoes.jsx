
import '../styles/minhasSolicitacoes.css'

function MinhasSolicitacoes() {

  return (

    <div className="container">

      <h1>Minhas Solicitações</h1>

      <div className="listaSolicitacoes">

        <div className="card">

          <h2>Perdi minha bola</h2>

          <p>
            Solicitei análise das câmeras da quadra
            no intervalo da tarde.
          </p>

          <span className="analise">
            Em análise
          </span>

        </div>

        <div className="card">

          <h2>Material perdido</h2>

          <p>
            Estojo desapareceu próximo ao laboratório.
          </p>

          <span className="aprovado">
            Aprovada
          </span>

        </div>

        <div className="card">

          <h2>Discussão no corredor</h2>

          <p>
            Solicitação para verificar ocorrido
            no corredor do bloco B.
          </p>

          <span className="negado">
            Negada
          </span>

        </div>

      </div>

    </div>

  )
}

export default MinhasSolicitacoes
