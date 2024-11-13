import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  // Verifica la bandera

  if (!isLoggedIn) {
    // Si el usuario no está autenticado, redirige al login
    return <Navigate to="/" />;
  }

  // Si el usuario está autenticado, renderiza el componente hijo
  return children;
}

export default ProtectedRoute;
