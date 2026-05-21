
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NovaSolicitacao from './pages/NovaSolicitacao'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/nova-solicitacao"
          element={<NovaSolicitacao />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App
