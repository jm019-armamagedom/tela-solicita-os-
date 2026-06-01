import Navbar from '../components/Navbar'
import '../styles/minhasSolicitacoes.css'
import cameraImg from './vs.jpg'

function MinhasSolicitacoes() {

  return (
    <>

      <Navbar />

      <div className="container">

        <div className="logo">
          <img src={cameraImg} alt="Câmera" />
        </div>

        <h1 className="titulo-minhas">
          Minhas Solicitações
        </h1>

        <div className="listaSolicitacoes">

          <div className="card">

            <h2>Perdi minha bola        <br />aluno rm:20240317</h2>

            <p>
              Solicitei análise das câmeras da quadra
              durante o intervalo para localizar minha bola.
            </p>

            <span className="analise">
              Em análise
            </span>

          </div>

          <div className="card">

            <h2>Material escolar perdido <br />aluno:20240321</h2>

            <p>
              Estojo desapareceu próximo ao laboratório
              de informática após a última aula.
            </p>

            <span className="aprovado">
              Aprovada
            </span>

          </div>

          <div className="card">

            <h2>Ocorrência no corredor</h2>

            <p>
              Solicitei verificação de uma discussão
              ocorrida no corredor dos laboratórios.
            </p>

            <span className="negado">
              Negada
            </span>

            

          </div>

        </div>

      </div>

    </>
  )
}

export default MinhasSolicitacoes