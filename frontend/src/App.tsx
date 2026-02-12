import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Servicos from './screens/Servicos'

function App() {
  return (
    <Router>
      <Routes>
        {/* Futura página de Portfólio (Home) */}
        <Route path="/portifolio" element={<div>Sua futura Home/Portfólio aqui</div>} />

        {/* Sua página atual de serviços da JGTech */}
        <Route path="/servicos" element={<Servicos />} />

        {/* REDIRECIONAMENTO: Qualquer rota não encontrada ou ao entrar no site,
            ele manda direto para /servicos por enquanto */}
        <Route path="*" element={<Navigate to="/servicos" replace />} />
      </Routes>
    </Router>
  );
}

export default App;