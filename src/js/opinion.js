const imagenesPerfil = [
    '/src/img/dolia-perfil.webp',
    '/src/img/biron-perfil.webp',
    '/src/img/lam-perfil.webp',
    '/src/img/milady-perfil.webp',
    '/src/img/alessio-perfil.webp'
]

function nextPerfilImg(){
    $imagen = document.getElementById('fotoperfil');
    let encontro=false;
    for(let i=0;i<4;i++){
        if($imagen.getAttribute('src')==imagenesPerfil[i]){
            $imagen.setAttribute('src',imagenesPerfil[i+1])
            encontro=true;
            break;
        }
    };
    if (!encontro) $imagen.setAttribute('src',imagenesPerfil[0]);
}

function prevPerfilImg(){
    $imagen = document.getElementById('fotoperfil');
    let encontro=false;
    for(let i=5;i>1;i--){
        if($imagen.getAttribute('src')==imagenesPerfil[i]){
            $imagen.setAttribute('src',imagenesPerfil[i-1])
            encontro=true;
            break;
        }
    };
    if (!encontro) $imagen.setAttribute('src',imagenesPerfil[4]);
}

document.addEventListener('DOMContentLoaded', function () {
    const btnNext = document.getElementById('nextPerfil');
    const btnPrev = document.getElementById('prevPerfil');

    btnNext.addEventListener('click', nextPerfilImg);
    btnPrev.addEventListener('click', prevPerfilImg);
});