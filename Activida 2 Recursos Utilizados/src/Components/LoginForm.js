import React, { useEffect } from 'react';

const LoginForm = () => {
  useEffect(() => {
    // Función para activar la validación de Bootstrap
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();

    // Manejo de inicio de sesión
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      if (this.checkValidity() === false) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
      }
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;

      const storedPassword = localStorage.getItem(username);

      if (storedPassword === password) {
        alert('Inicio de sesión exitoso');
      } else {
        alert('Usuario o contraseña incorrectos');
      }

      this.reset();
      this.classList.remove('was-validated');
    });
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-center mb-0">Inicio de Sesión</h2>
      </div>
      <div className="card-body">
        <form id="loginForm" className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="loginUsername" className="form-label">Username</label>
            <input type="text" className="form-control" id="loginUsername" required />
            <div className="invalid-feedback">Please provide a username.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="loginPassword" required />
            <div className="invalid-feedback">Please provide a password.</div>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
