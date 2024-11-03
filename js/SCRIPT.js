function imprimirDatos(event) {
        event.preventDefault(); // Evita que el formulario se envíe y se recargue la página

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('name').value;
        const apellido = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('message').value;

        // Crear un mensaje para mostrar los datos
        const resultado = `
            <h4>Datos ingresados:</h4>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
        `;

        // Mostrar los datos en el div de resultado
        document.getElementById('resultado').innerHTML = resultado;

        // Limpiar el formulario (opcional)
        document.getElementById('contactForm').reset();
    }
