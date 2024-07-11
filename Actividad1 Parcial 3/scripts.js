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
