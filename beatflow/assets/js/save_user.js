//***************************** Guarda usuarios registrados *****************************
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form_register');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar recargar la página

        const nameR = document.getElementById('nameR').value;
        const emailR = document.getElementById("emailR").value;
        const user = document.getElementById("user").value;
        const passwordR = document.getElementById("passwordR").value;
        
        if (nameR && emailR && user && passwordR) { // Verificar que el campo no esté vacío
            save_user(nameR, emailR, user, passwordR);
            formulario.reset(); // Limpiar el campo de entrada después de guardar
            actualizarListaUsers(); // Actualizar la lista de usuarios
        }
    });

    actualizarListaUsers(); // Actualizar la lista al cargar la página
});

function save_user(nameR, emailR, user, passwordR) {
    // Obtener la lista actual de usuarios del localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Añadir el nuevo usuario a la lista
    users.push({ name: nameR, email: emailR, user: user, password: passwordR });
    
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('users', JSON.stringify(users));
}

function actualizarListaUsers() {
    const lista = document.getElementById('listUsers');
    lista.innerHTML = ''; // Limpiar la lista actual

    // Obtener la lista de usuarios de localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Crear un elemento <li> para cada usuario y añadirlo a la lista
    users.forEach(function(user) {
        const li = document.createElement('li');
        li.textContent = user.name;
        lista.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form_register');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar recargar la página

        const nameR = document.getElementById('nameR').value;
        const emailR = document.getElementById("emailR").value;
        const user = document.getElementById("user").value;
        const passwordR = document.getElementById("passwordR").value;
        
        if (nameR && emailR && user && passwordR) { // Verificar que el campo no esté vacío
            save_user(nameR, emailR, user, passwordR);
            formulario.reset(); // Limpiar el campo de entrada después de guardar
            actualizarListaUsers(); // Actualizar la lista de usuarios
        }
    });

    actualizarListaUsers(); // Actualizar la lista al cargar la página
});

function save_user(nameR, emailR, user, passwordR) {
    // Obtener la lista actual de usuarios del localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Añadir el nuevo usuario a la lista
    users.push({ name: nameR, email: emailR, user: user, password: passwordR });
    
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('users', JSON.stringify(users));
}

function actualizarListaUsers() {
    const lista = document.getElementById('listUsers');
    lista.innerHTML = ''; // Limpiar la lista actual

    // Obtener la lista de usuarios de localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Crear un elemento <li> para cada usuario y añadirlo a la lista
    users.forEach(function(user) {
        const li = document.createElement('li');
        li.textContent = user.email;
        lista.appendChild(li);
    });
}

 //****************** Inicio de Sesión ****************************
// Crear un usuario predeterminado administrador
const admin = { email: 'admin@admin.com', password: 'Admin123' };

// Guardar el usuario administrador en el localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];
users.push(admin);
localStorage.setItem('users', JSON.stringify(users));
let isAdminLoggedIn = false;


document.getElementById('form_login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let emailUsuarioEncontrado = false;
    let contraseniaCorrecta = false;

    users.forEach(function(usuario) {
        if (usuario.email === email) {
            emailUsuarioEncontrado = true;
            if (usuario.password === password) {
                contraseniaCorrecta = true;
                if (usuario.email === admin.email && usuario.password === admin.password) {
                    isAdminLoggedIn = true; // Establecer la variable isAdminLoggedIn en true si el usuario es administrador
                }
            }
        }
    });

    if (emailUsuarioEncontrado && contraseniaCorrecta) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'main.html'; // Redirect to main.html
        if (isAdminLoggedIn) {
            alert('¡Bienvenido, administrador!');
            window.location.href = 'welcome.html';
        }
    } else {
        alert('Usuario no registrado o Datos Incorrectos');
    }
}); 