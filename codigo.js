document.addEventListener("DOMContentLoaded", function (e) {
    
    var hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        var navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    }

    // Resaltar la opción activa en el menú
    var currentPath = window.location.pathname.split('/').pop();
    var menuLinks = document.querySelectorAll('nav.nav-bar ul li a');
    
    menuLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            var nombre = document.getElementById('nombre').value;
            var apellido = document.getElementById('apellido').value;
            var email = document.getElementById('email').value;
            var telefono = document.getElementById('telefono').value;
            var warnings = document.getElementById('warnings');
            warnings.innerHTML = '';

            if (nombre === '' || apellido === '' || email === '' || telefono === '') {
                warnings.innerHTML += '<p>Todos los campos son obligatorios.</p>';
                return;
            }

            if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre) || !/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(apellido)) {
                warnings.innerHTML += '<p>El nombre y el apellido solo pueden contener letras y espacios.</p>';
                return;
            }

            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/.test(email)) {
                warnings.innerHTML += '<p>El correo electrónico no tiene un formato válido.</p>';
                return;
            }

            if (!/^\d{8}$/.test(telefono)) {
                warnings.innerHTML += '<p>El número de teléfono debe tener 8 dígitos.</p>';
                return;
            }

            console.log('Formulario enviado correctamente');
        });
    }
});
