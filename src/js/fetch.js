import comentario from "../modules/comentario.mjs";

document.addEventListener('DOMContentLoaded', function () {
    let currentPage=1;
    const pageSize=10;
    let lastPage=1;
    const form = document.getElementById('formulario');
    const $root = document.getElementById("root");
    const $pageOp = document.getElementById('pageOpiniones');
    let commentSize=0;
    const recargar=()=>{
        let comentarios=[];
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
                if(comentarioData.visible==true){
                    // Crear un nuevo objeto comentario con los datos obtenidos
                    let nuevoComentario = comentario(comentarioData.id_comentario, comentarioData.nombre_usuario, comentarioData.comentario, comentarioData.imagen);
                    
                    // Agregar el nuevo comentario al principio del arreglo
                    comentarios.unshift(nuevoComentario);
                }
            });
            commentSize=comentarios.length;
            lastPage=Math.ceil(commentSize/pageSize);
            $pageOp.innerText="Pagina "+currentPage+" de "+lastPage;
            // Renderizar los comentarios en la página
            for(let i=(0+((currentPage-1)*pageSize));(i<(10+((currentPage-1)*pageSize)) && i<comentarios.length);i++){
                $root.appendChild(comentarios[i]);
            }
        })
        .catch(error => {
            console.error(error);
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
                let nuevoComentario = comentario(comentarioData.id_comentario, comentarioData.nombre_usuario, comentarioData.comentario, comentarioData.imagen);
                
                // Agregar el nuevo comentario al principio del arreglo
                if(comentarioData.visible){
                    comentarios.unshift(nuevoComentario);
                }
            });

            // Renderizar los comentarios en la página
            $pageOp.innerText=""+$userSearch.value;
            comentarios.forEach(coment => {
                $root.appendChild(coment);
            });
            
        })
        .catch(error => {
            console.error(error);
        });
        console.log('comentarios recargados');
    }
    const $btnBuscarUser=document.getElementById('buscarUser');
    const $btnRecarga=document.getElementById('recargar');
    $btnBuscarUser.addEventListener('click',buscarPorUser)
    $btnRecarga.addEventListener('click',recargar);
    recargar();
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera convencional

        const formData = new FormData(form); // Captura los datos del formulario

        // - CONTROL - NOMBRE -

        const patronNombre =/^[a-zA-ZñÑ\-_.,*\d$]+$/;

        // Verificar si el nombre coincide con el patrón
        let userLimpio = limpiarCadena(formData.get('nombre_usuario'));
        formData.set('nombre_usuario',userLimpio);
        if (!patronNombre.test(formData.get('nombre_usuario'))) {
            alert('El nombre ingresado no es válido.');
            return;
        }

        if(formData.get('nombre_usuario').length<=3){
            alert('El nombre debe de ser mayor a 3 Caracteres.');
            return;
        }
        if(formData.get('nombre_usuario').length>=20){
            alert('El nombre tiene un maximo de 20 Caracteres.');
            return;
        }

        // - CONTROL - COMENTARIO -

        let commentLimpio = limpiarCadena(formData.get('comentario'));
        formData.set('comentario',commentLimpio);

        if(formData.get('comentario').length<1){
            alert('Debes de ingresar un comentario.');
            return;
        }
        if(formData.get('comentario').length>=500){
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
            id_comentario: 10,
            comentario: formData.get('comentario'),
            visible: true,
            nombre_usuario: formData.get('nombre_usuario'),
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
    const $prvBtn = document.getElementById('prevOpiniones');
    $prvBtn.disabled=true;
    const pbutton=()=>{
        if(currentPage!=1){
            currentPage--;
            $pageOp.innerText="Pagina "+currentPage+" de "+lastPage;
            recargar();
            if(currentPage==1){
                $prvBtn.disabled=true;
            }if(currentPage < Math.ceil(commentSize / pageSize)){
                $nxtBtn.disabled=false;
            }
        }
    }
    $prvBtn.addEventListener('click',pbutton);
    const $nxtBtn = document.getElementById('nextOpiniones');
    const nbutton=()=>{
        if(currentPage != Math.ceil(commentSize / pageSize)){
            currentPage++;
            $pageOp.innerText="Pagina "+currentPage+" de "+lastPage;
            recargar();
        }if(currentPage>1){
            $prvBtn.disabled=false;
        }if(currentPage == Math.ceil(commentSize / pageSize)){
            $nxtBtn.disabled=true;
        }
    }
    $nxtBtn.addEventListener('click',nbutton);
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