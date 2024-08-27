import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener usuarios del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario ya existe
    const userExists = users.find(user => user.username === username);

    if (userExists) {
      setError('Username already exists');
      return;
    }

    // Agregar nuevo usuario
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirigir a login
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded">
            <h2 className="text-center mb-4">Registrarse</h2>
            {error && <p className="text-danger">{error}</p>}
            <div className="form-group">
              <label>usuario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
