import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import './pages/styles.css';


function App() {
  return (
    <Router>
      <Routes>
        {/* Página de aterrizaje para los usuarios no registrados */}
        <Route path="/" element={<Landing />} />

        {/* Ruta para el login */}
        <Route path="/login" element={<LoginForm />} />
        
        {/* Ruta protegida para Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;