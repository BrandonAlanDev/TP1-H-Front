import comentario from "../modules/comentario.mjs";

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');
    const $root = document.getElementById("root");
    const recargar=()=>{
        let $comentario4= comentario(99,'Luchito','Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ Luchito jugando  ♿ ♿ ','dolia');
        let $comentario1= comentario(98,'Brandon','Cuando sale para LATAM','lam');
        let $comentario2= comentario(97,'Alexis','Maso maso el juego','biron');
        let $comentario3= comentario(96,'Destructor425','Quien para rankeds ☝️🤓','milady');
        let comentarios = [$comentario1,$comentario2,$comentario3,$comentario4];
        // INGRESE AQUI  la toma de los elementos con el get agregandolos al arreglo con unshift
        let comentariosActuales = $root.querySelectorAll('.es-comentario');
        comentariosActuales.forEach(comentario => {
            $root.removeChild(comentario);
        });

        fetch('http://localhost:5288/api/Opinion',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al obtener los datos del servidor.');
            }
            return response.json();
        })
        .then(data => {
            // Obtener los comentarios del servidor y agregarlos al arreglo
            data.forEach(comentarioData => {
                // Crear un nuevo objeto comentario con los datos obtenidos
                let nuevoComentario = comentario(comentarioData.id, comentarioData.user, comentarioData.comment, comentarioData.imagen);
                
                // Agregar el nuevo comentario al principio del arreglo
                comentarios.unshift(nuevoComentario);
            });

            // Renderizar los comentarios en la página
            comentarios.forEach(coment => {
                $root.appendChild(coment);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log('comentarios recargados');
    }
    const buscarPorUser = ()=>{
        let $userSearch=document.getElementById('userSearch');
        let user = $userSearch.value;
        let comentarios = [];
        let patronNombre =/^[a-zA-ZñÑ\-_.,*\d$]+$/;

        // Verificar si el nombre coincide con el patrón
        let userLimpio = limpiarCadena(user);
        user=userLimpio;
        if (!patronNombre.test(user)) {
            alert('El nombre ingresado no es válido.');
            return;
        }

        if(user.length<=3){
            alert('El nombre debe de ser mayor a 3 Caracteres.');
            return;
        }
        let comentariosActuales = $root.querySelectorAll('.es-comentario');
        comentariosActuales.forEach(comentario => {
            $root.removeChild(comentario);
        });
        fetch('http://localhost:5288/api/Opinion/user/'+user,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al obtener los datos del servidor.');
            }
            return response.json();
        })
        .then(data => {
            // Obtener los comentarios del servidor y agregarlos al arreglo
            data.forEach(comentarioData => {
                // Crear un nuevo objeto comentario con los datos obtenidos
                let nuevoComentario = comentario(comentarioData.id, comentarioData.user, comentarioData.comment, comentarioData.imagen);
                
                // Agregar el nuevo comentario al principio del arreglo
                comentarios.unshift(nuevoComentario);
            });

            // Renderizar los comentarios en la página
            comentarios.forEach(coment => {
                $root.appendChild(coment);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log('comentarios recargados');
    }
    const $btnBuscarUser=document.getElementById('buscarUser');
    $btnBuscarUser.addEventListener('click',buscarPorUser)
    const $btnRecarga=document.getElementById('recargar');
    $btnRecarga.addEventListener('click',recargar);
    recargar();
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera convencional

        const formData = new FormData(form); // Captura los datos del formulario

        // - CONTROL - NOMBRE -

        const patronNombre =/^[a-zA-ZñÑ\-_.,*\d$]+$/;

        // Verificar si el nombre coincide con el patrón
        let userLimpio = limpiarCadena(formData.get('user'));
        formData.set('user',userLimpio);
        if (!patronNombre.test(formData.get('user'))) {
            alert('El nombre ingresado no es válido.');
            return;
        }

        if(formData.get('user').length<=3){
            alert('El nombre debe de ser mayor a 3 Caracteres.');
            return;
        }
        if(formData.get('user').length>=20){
            alert('El nombre tiene un maximo de 20 Caracteres.');
            return;
        }

        // - CONTROL - COMENTARIO -

        let commentLimpio = limpiarCadena(formData.get('comment'));
        formData.set('comment',commentLimpio);

        if(formData.get('comment').length<1){
            alert('Debes de ingresar un comentario.');
            return;
        }
        if(formData.get('comment').length>=500){
            alert('El comentario no puede exceder los 500 caracteres.');
            return;
        }

        // - CONTROL - IMAGEN -
        let imagen = formData.get('imagen');
        switch (imagen) {
            case '/src/img/dolia-perfil.webp':
                formData.set('imagen', 'dolia');
                break;
            case '/src/img/biron-perfil.webp':
                formData.set('imagen', 'biron');
                break;
            case '/src/img/lam-perfil.webp':
                formData.set('imagen', 'lam');
                break;
            case '/src/img/milady-perfil.webp':
                formData.set('imagen', 'milady');
                break;
            default:
                formData.set('imagen', 'dolia');
                break;
        }
        const url = 'http://localhost:5288/api/Opinion';
        const jsonData = {
            user: formData.get('user'),
            comment: formData.get('comment'),
            imagen: formData.get('imagen')
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al enviar el formulario.');
            }
            let $nombre = document.getElementById('user');
            let $comentario = document.getElementById('comentario');
            $nombre.value="";
            $comentario.value="";
            recargar();
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
function limpiarCadena(cadena) {
    cadena = cadena.trim(); // Eliminar espacios en blanco al inicio y al final
    cadena = cadena.replace(/<script>/gi, ""); // Eliminar etiquetas <script> y variantes
    cadena = cadena.replace(/<\/script>/gi, "");
    cadena = cadena.replace(/<script\s+src/gi, "");
    cadena = cadena.replace(/<script\s+type=/gi, "");
    cadena = cadena.replace(/SELECT\s+\*\s+FROM/gi, ""); // Eliminar consultas SQL comunes
    cadena = cadena.replace(/DELETE\s+FROM/gi, "");
    cadena = cadena.replace(/INSERT\s+INTO/gi, "");
    cadena = cadena.replace(/DROP\s+TABLE/gi, "");
    cadena = cadena.replace(/DROP\s+DATABASE/gi, "");
    cadena = cadena.replace(/TRUNCATE\s+TABLE/gi, "");
    cadena = cadena.replace(/SHOW\s+TABLES;/gi, "");
    cadena = cadena.replace(/SHOW\s+DATABASES;/gi, "");
    cadena = cadena.replace(/<\?php/gi, ""); // Eliminar tags PHP
    cadena = cadena.replace(/\?>/gi, "");
    cadena = cadena.replace(/--/gi, ""); // Eliminar comentarios SQL
    cadena = cadena.replace(/\^/gi, ""); // Eliminar otros caracteres comunes
    cadena = cadena.replace(/</gi, "");
    cadena = cadena.replace(/\[/gi, "");
    cadena = cadena.replace(/]/gi, "");
    cadena = cadena.replace(/==/gi, "");
    cadena = cadena.replace(/;/gi, "");
    cadena = cadena.replace(/::/gi, "");
    cadena = cadena.trim(); // Eliminar espacios en blanco nuevamente al final
    return cadena;
}