const personajes = () =>{
    let $personajes = document.createElement('section');
    $personajes.setAttribute('id','personajes');
    $personajes.classList.add('container', 'personaje1', 'bg-blanco', 'flex', 'justify-end', 'rounded-xl', 'm-auto', 'mt-7', 'h-screen', 'escondido');
    
    let $titulo = document.createElement('H1');
    $titulo.classList.add('ml-5', 'text-center', 'text-azul', 'titulo-personajes','glow');
    $titulo.innerText = "Personajes";
    $personajes.appendChild($titulo);

    let $articulo = document.createElement('article');
    $articulo.classList.add('lg:w-1/3', 'bg-azul', 'text-amarillo', 'p-4', 'text-center', 'rounded-2xl', 'flex-col', 'justify-end', 'lg-ml-60vw', 'lg:mr-5', 'info-personaje');
    
    let $nombre = document.createElement('H1');
    $nombre.setAttribute('id','nombrePersonaje');
    $nombre.classList.add('mb-5');

    let $des=document.createElement('p');
    $des.setAttribute('id','descripcion');
    $des.classList.add('desc-personaje');
    $des.innerText="Dolia es un poderoso soporte en Honor of Kings, utiliza sus habilidades para mantener a tus enemigos alejados de tus aliados, recorre el mapa a traves del rio donde tendras una gran ventaja al mejorar tus habilidades y aumentar tu velocidad de movimiento.";

    $articulo.appendChild($nombre);
    $articulo.appendChild($des);
    $personajes.appendChild($articulo);
    return $personajes;
}
export default personajes;