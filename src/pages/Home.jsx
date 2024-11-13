import { useNavigate } from 'react-router-dom';
import "./styles.css";

function Home() {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem('loggedInUser');

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');  // Eliminar solo el usuario logueado
    localStorage.setItem('isLoggedIn', 'false');  // Cambiar el estado de sesión
    navigate('/');  // Redirigir al Login
  };

  return (
    <div>
      <h1>Bienvenido, {loggedInUser}</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Home;
