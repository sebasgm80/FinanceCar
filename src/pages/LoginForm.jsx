import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetMessages = useCallback(() => {
    setErrorMessage('');
    setSuccessMessage('');
  }, []);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        navigate('/home');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    resetMessages();
    setIsLoading(true);

    if (!username || !password) {
      setErrorMessage('Por favor, completa todos los campos');
      setIsLoading(false);
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username] === password) {
      setSuccessMessage(`¡Bienvenido, ${username}! Iniciando...`);
      localStorage.setItem('loggedInUser', username);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
      setIsLoading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    resetMessages();
    setIsLoading(true);

    if (!username || !password) {
      setErrorMessage('Por favor, completa todos los campos');
      setIsLoading(false);
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
      setErrorMessage('Este nombre de usuario ya está registrado');
      setIsLoading(false);
    } else {
      users[username] = password;
      localStorage.setItem('users', JSON.stringify(users));
      setSuccessMessage(`¡Bienvenido, ${username}! Registrando e iniciando...`);
      localStorage.setItem('loggedInUser', username);
      localStorage.setItem('isLoggedIn', 'true');
    }
  };

  return (
    <div className="login-form">
      <h2>{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {!successMessage && !isLoading && (
        <>
          <form onSubmit={isRegistering ? handleRegister : handleLogin}>
            <div>
              <label>Nombre de usuario:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</button>
          </form>
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? '¿Ya tienes una cuenta? Inicia Sesión' : '¿No tienes una cuenta? Regístrate'}
          </button>
        </>
      )}

      {(isLoading || successMessage) && (
        <div className="spinner">
          <div className="spinner-icon"></div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;