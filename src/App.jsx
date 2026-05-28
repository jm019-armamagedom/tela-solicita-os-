
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NovaSolicitacao from './pages/NovaSolicitacao'
import MinhasSolicitacoes from './pages/MinhasSolicitacoes'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/nova-solicitacao"
          element={<NovaSolicitacao />}
        />

        <Route
          path="/minhas-solicitacoes"
          element={<MinhasSolicitacoes />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App
