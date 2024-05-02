const comentario = (id,nombre,comentario,imagen)=>{
    let $comentario = document.createElement('section');
    $comentario.classList.add('rounded-3xl', 'p-4', 'mt-2', 'justify-center', 'align-middle');
    
    let $article = document.createElement('article');
    $article.classList.add('comentar', 'gap-5', 'justify-center', 'align-middle', 'items-center');

    let $div1 = document.createElement('div');
    $div1.classList.add('labelComment', 'bg-blanco', 'p-2');

    let $div2 = document.createElement('div');
    $div2.classList.add('flex', 'flex-col', 'flex-wrap', 'gap-5');

    let $div3 = document.createElement('div');
    $div3.classList.add('flex', 'flex-row', 'flex-wrap', 'align-middle', 'items-center', 'gap-5', 'justify-center');

    let $div4 = document.createElement('div');
    $div4.classList.add('items-start', 'flex', 'flex-col', 'flex-wrap', 'gap-5');

    let $div5 = document.createElement('div');
    $div5.classList.add('flex', 'flex-row', 'flex-wrap', 'align-middle', 'items-center', 'gap-5');

    let imagenPerfil="";
    if (imagen=="dolia"){imagenPerfil="/src/img/dolia-perfil.webp";}
    else if(imagen=="biron"){imagenPerfil="/src/img/biron-perfil.webp";}
    else if(imagen=="lam"){imagenPerfil="/src/img/lam-perfil.webp";}
    else if(imagen=="milady"){imagenPerfil="/src/img/milady-perfil.webp";}
    else{imagenPerfil="/src/img/alessio-perfil.webp";};

    let $img = document.createElement('img');
    $img.classList.add('perfil-comentario', 'rounded-3xl');
    $img.setAttribute('src',imagenPerfil);
    $img.setAttribute('alt','Imagen de usuario');

    let $nombre = document.createElement('p');
    $nombre.classList.add('inputl');
    $nombre.innerText=nombre;

    $div5.appendChild($img);
    $div5.appendChild($nombre);

    let $comment = document.createElement('p');
    $comment.classList.add('comentario');
    $comment.innerText=comentario;

    $div4.appendChild($div5);
    $div4.appendChild($comment);

    $div3.appendChild($div4);
    $div2.appendChild($div3);
    $div1.appendChild($div2);
    $article.appendChild($div1);
    $comentario.appendChild($article);

    return $comentario;
}
export default comentario;