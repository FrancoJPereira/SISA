import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    usuario: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.');
      return;
    }

    console.log('Datos enviados:', formData);
    // Add your logic for handling successful registration here (e.g., sending data to server)
  };

  return (
    <div className="register-container"  style={{ width: 'auto', height: 'auto'}}>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="register-card">
        <img src="/image/logo.svg" alt="Logo" className="logo" />
        <h2 className="register-title">Registrarse</h2>
        <form className="register-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ width: '100%'}}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ width: '100%'}}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="usuario">Usuario:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              className="form-input"
              value={formData.usuario}
              onChange={handleChange}
              required
              style={{ width: '100%'}}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Crea una contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ width: '100%'}}
            />
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="confirmPassword">Repite la contraseña creada:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{ width: '100%'}}
            />
          </div>
          <button className="button-register" type="submit" style={{ width: '100%' }}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
