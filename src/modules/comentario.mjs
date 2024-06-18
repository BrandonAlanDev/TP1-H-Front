const comentario = (id, nombre, comentario, imagen) => {
  let $comentario = document.createElement('section');
  $comentario.setAttribute('id', `${id}`);
  $comentario.classList.add('es-comentario', 'rounded-3xl', 'p-4', 'mt-2', 'justify-center', 'align-middle');
  
  let $article = document.createElement('article');
  $article.classList.add('comentar', 'gap-5', 'justify-center', 'align-middle', 'items-center');
  
  let $div1 = document.createElement('div');
  $div1.classList.add('labelComment', 'bg-blanco', 'p-2', 'flex', 'items-center', 'justify-between');
  
  let $div2 = document.createElement('div');
  $div2.classList.add('flex', 'flex-col', 'flex-wrap', 'gap-5');
  
  let $div3 = document.createElement('div');
  $div3.classList.add('flex', 'flex-row', 'flex-wrap', 'align-middle', 'items-center', 'gap-5', 'justify-between');
  
  let $div4 = document.createElement('div');
  $div4.classList.add('items-start', 'flex', 'flex-col', 'flex-wrap', 'gap-5');
  
  let imagenPerfil = "";
  if (imagen == "dolia") {
    imagenPerfil = "/src/img/dolia-perfil.webp";
  } else if (imagen == "biron") {
    imagenPerfil = "/src/img/biron-perfil.webp";
  } else if (imagen == "lam") {
    imagenPerfil = "/src/img/lam-perfil.webp";
  } else if (imagen == "milady") {
    imagenPerfil = "/src/img/milady-perfil.webp";
  } else {
    imagenPerfil = "/src/img/alessio-perfil.webp";
  }
  
  let $img = document.createElement('img');
  $img.classList.add('perfil-comentario', 'rounded-3xl');
  $img.setAttribute('src', imagenPerfil);
  $img.setAttribute('alt', 'Imagen de usuario');
  
  let $nombre = document.createElement('p');
  $nombre.classList.add('inputl');
  $nombre.innerText = nombre;
  
  let $comment = document.createElement('p');
  $comment.classList.add('comentario', 'fila');
  $comment.innerText = comentario;
  
  let $deleteButton = document.createElement('button');
  $deleteButton.classList.add('text-white', 'bg-red-500', 'hover:bg-red-700', 'focus:ring-4', 'focus:outline-none', 'focus:ring-red-300', 'font-medium', 'rounded-lg', 'text-sm', 'px-2', 'py-2', 'ml-2');
  $deleteButton.setAttribute('data-comment-id', id);
  $deleteButton.innerText = 'X';
  
  let $topRow = document.createElement('div');
  $topRow.classList.add('flex', 'flex-row', 'items-center', 'justify-between', 'fila');
  $topRow.appendChild($img);
  $topRow.appendChild($nombre);
  $topRow.appendChild($deleteButton);
  
  $div4.appendChild($topRow);
  $div4.appendChild($comment);
  
  $div3.appendChild($div4);
  $div2.appendChild($div3);
  $div1.appendChild($div2);
  $article.appendChild($div1);
  $comentario.appendChild($article);
  
  $deleteButton.addEventListener('click', function(event) {
      if (confirm("Estas seguro que deseas eliminar este comentario?")) {
          let commentId = event.target.dataset.commentId;
          fetch('http://localhost:5288/api/Opinion', {
              method: 'DELETE',
              body: JSON.stringify(commentId),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Hubo un problema en la respuesta del servidor.');
              }
              return response.text();
          })
          .then(data => {
              console.log('Respuesta del servidor:', data);
              // Agregar clases de animación para ocultar el comentario
              $comentario.classList.add('animate__animated', 'animate__fadeOut');
              // Esperar el fin de la animación antes de eliminar el comentario
              $comentario.addEventListener('animationend', () => {
                  $comentario.remove();
              });
          })
          .catch(error => {
              console.error('Error:', error);
          });
      }
  });
  
  return $comentario;
};

export default comentario;
