import "./styles.css";
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Calculadora de Financiación de Coches</h1>
        <nav>
        <button onClick={() => navigate('/login')} className="register-button">Iniciar Sesión y Registrarse</button>
        </nav>
      </header>

      <main className="main-content">
        <section className="intro">
          <h2>¡Calcula tu Financiación Fácilmente!</h2>
          <p>Bienvenido a la calculadora de financiación de coches. Con nuestra herramienta, puedes calcular rápidamente las cuotas mensuales de tu préstamo para tu coche ideal. Simplemente introduce el precio del coche, el pago inicial, el plazo y la tasa de interés para conocer el resultado en segundos.</p>
        </section>

        <section className="how-it-works">
          <h3>¿Cómo Funciona?</h3>
          <ol>
            <li>Introduce el <strong>precio del coche</strong> que deseas financiar.</li>
            <li>Especifica el <strong>pago inicial</strong> que planeas realizar.</li>
            <li>Selecciona el <strong>plazo del préstamo</strong> (en meses).</li>
            <li>Indica la <strong>tasa de interés</strong> aplicable.</li>
            <li>Haz clic en calcular y obtén las <strong>cuotas mensuales</strong> y el monto total a pagar.</li>
          </ol>
        </section>

        <section className="benefits">
          <h3>¿Por Qué Registrarse?</h3>
          <p>Al registrarte, podrás:</p>
          <ul>
            <li>Guardar tus cálculos y consultarlos en cualquier momento.</li>
            <li>Recibir asesoramiento personalizado basado en tu perfil.</li>
            <li>Acceder a ofertas exclusivas de financiación.</li>
          </ul>
          <p>¡No pierdas la oportunidad de facilitar el proceso de financiación de tu coche!</p>
          <button onClick={() => navigate('/login')} className="register-button">Iniciar Sesión y Registrarse</button>
          </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Calculadora de Financiación de Coches. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Landing;