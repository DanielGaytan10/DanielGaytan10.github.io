import React, { useEffect } from 'react';

const RegisterForm = () => {
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

    // Manejo de registro
    document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault();
      if (this.checkValidity() === false) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
      }
      const username = document.getElementById('regUsername').value;
      const password = document.getElementById('regPassword').value;

      if (localStorage.getItem(username)) {
        alert('El usuario ya existe');
      } else {
        localStorage.setItem(username, password);
        alert('Registro exitoso');
        this.reset();
        this.classList.remove('was-validated');
      }
    });
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-center mb-0">Registro</h2>
      </div>
      <div className="card-body">
        <form id="registerForm" className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="regUsername" className="form-label">Username</label>
            <input type="text" className="form-control" id="regUsername" required />
            <div className="invalid-feedback">Please provide a username.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="regPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="regPassword" required />
            <div className="invalid-feedback">Please provide a password.</div>
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
