document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera convencional

        const formData = new FormData(form); // Captura los datos del formulario
        const url = 'tu_url_de_destino.php'; // Reemplaza 'tu_url_de_destino.php' con la URL a la que deseas enviar los datos

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al enviar el formulario.');
            }
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Aquí puedes manejar la respuesta del servidor si es necesario
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});