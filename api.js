document.getElementById('guardar-datos').addEventListener('click', function () {
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const ubicacion = document.getElementById('ubicacion').value;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || email.trim() === '' || ubicacion.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Mostrar los datos ingresados en un mensaje de alerta
    const mensaje = `Nombre: ${nombre}\nEmail: ${email}\nUbicación: ${ubicacion}`;
    alert('Datos ingresados:\n\n' + mensaje);

    // También puedes realizar otras acciones aquí, como enviar los datos a un servidor.
});
