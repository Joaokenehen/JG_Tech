import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Servicos from './screens/Servicos'
import Portifolio from './screens/Portifolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portifolio />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="*" element={<Navigate to="/servicos" replace />} />
      </Routes>
    </Router>
  );
}

export default App;