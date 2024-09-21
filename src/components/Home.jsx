import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook de navegación de React Router

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión.
    console.log('Iniciando sesión con:', { username, password });
  };

  const handleRegisterClick = () => {
    // Navegar a la ruta "/register" para mostrar el componente Register
    navigate('/register');
  };

  const handleForgotPasswordClick = () => {
    // Navegar a la ruta "/forgot-password" para mostrar el componente de cambio de contraseña
    navigate('/forgot-password');
  };

  return (
    <div className='form-container'>
      <img src="/image/logo.svg" alt="Logo" className="logo" style={{ width: '12rem', paddingLeft: '6rem' }} />
      <h2>Sistema Integrado de Salud Argentina</h2>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor='username'>Nombre de usuario</label>
        <input 
          type='text' 
          id='username' 
          name='username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <label htmlFor='password'>Contraseña</label>
        <input 
          type='password' 
          id='password' 
          name='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Iniciar sesión</button>
        <button type="button" onClick={handleRegisterClick}>Registrarse</button>
        <p 
          onClick={handleForgotPasswordClick} 
          style={{ 
            marginTop: '10px', 
            color: '#007bff', // Color más sutil, puedes cambiarlo si lo deseas
            cursor: 'pointer',
            fontSize: '0.9rem',
            textDecoration: 'underline',
            textAlign: 'center' // Centramos el texto
          }}
        >
          Olvidé mi contraseña
        </p>
      </form>
    </div>
  );
}

export default Home;
