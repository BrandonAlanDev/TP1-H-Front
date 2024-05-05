const opiniones=()=>{
    let $opiniones = document.createElement('section');
    $opiniones.setAttribute('id','opiniones');
    $opiniones.classList.add('rounded-3xl', 'p-4', 'mt-2', 'justify-center', 'align-middle','bg-blanco');
    let $recargar = document.createElement('button');
    $recargar.innerText="Recargar";
    $recargar.setAttribute('id','recargar');
    $recargar.classList.add('ml-5', 'rounded-3xl', 'recargar');
    $opiniones.appendChild($recargar);
    return $opiniones;
};
export default opiniones;