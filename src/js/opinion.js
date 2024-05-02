document.addEventListener('DOMContentLoaded', function () {
    const imagenesPerfil = [
        '/src/img/dolia-perfil.webp',
        '/src/img/biron-perfil.webp',
        '/src/img/lam-perfil.webp',
        '/src/img/milady-perfil.webp',
        '/src/img/alessio-perfil.webp'
    ]
    const $buttonN  = document.getElementById('nextPerfil');
    const $buttonP  = document.getElementById('prevPerfil');
    const $srcImagenEnviar = document.getElementById('imagen_src');

    function nextPerfilImg() {
        const $imagen = document.getElementById('fotoperfil');
        const $buttonN = document.getElementById('nextPerfil');
        const $buttonP = document.getElementById('prevPerfil');
        let encontro = false;

        for (let i = 0; i < 4; i++) {
            if ($imagen.getAttribute('src') == imagenesPerfil[i]) {
                $imagen.classList.remove('imagen-transicion');
                $buttonN.setAttribute('disabled', true);
                $buttonP.setAttribute('disabled', true);
                setTimeout(() => {
                    $imagen.setAttribute('src', imagenesPerfil[i + 1]);
                    $srcImagenEnviar.setAttribute('value', imagenesPerfil[i + 1].toString());
                    $imagen.offsetWidth; // Reflow: esto fuerza al navegador a recalcular el diseño, lo que activa la transición
                    $imagen.classList.add('imagen-transicion');
                    $buttonP.disabled=false;
                    $buttonN.disabled=false;
                }, 300);
                encontro = true;
                break;
            }
        }

        if (!encontro) {
            $imagen.classList.remove('imagen-transicion');
            $buttonP.disabled=true;
            $buttonN.disabled=true;
            setTimeout(() => {
                $imagen.setAttribute('src', imagenesPerfil[0]);
                $srcImagenEnviar.setAttribute('value', imagenesPerfil[0].toString());
                    $imagen.classList.add('imagen-transicion');
                    $imagen.offsetWidth;
                    $buttonP.disabled=false;
                    $buttonN.disabled=false;
            }, 300);
        }
    }

    function prevPerfilImg() {
        const $imagen = document.getElementById('fotoperfil');
        const $buttonN = document.getElementById('nextPerfil');
        const $buttonP = document.getElementById('prevPerfil');
        let encontro = false;

        for (let i = 4; i > 0; i--) {
            if ($imagen.getAttribute('src') == imagenesPerfil[i]) {
                $imagen.classList.remove('imagen-transicion');
                $buttonP.disabled=true;
                $buttonN.disabled=true;
                setTimeout(() => {
                    $imagen.setAttribute('src', imagenesPerfil[i - 1]);
                    $srcImagenEnviar.setAttribute('value', imagenesPerfil[i - 1].toString());
                    $imagen.offsetWidth; // Reflow: esto fuerza al navegador a recalcular el diseño, lo que activa la transición
                    $imagen.classList.add('imagen-transicion');
                    $buttonP.disabled=false;
                    $buttonN.disabled=false;
                }, 300);
                encontro = true;
                break;
            }
        }

        if (!encontro) {
            $imagen.classList.remove('imagen-transicion');
            $buttonP.disabled=true;
            $buttonN.disabled=true;
            setTimeout(() => {
                $imagen.setAttribute('src', imagenesPerfil[4]);
                $srcImagenEnviar.setAttribute('value', imagenesPerfil[4].toString());
                    $imagen.classList.add('imagen-transicion');
                    $imagen.offsetWidth; // Reflow: esto fuerza al navegador a recalcular el diseño, lo que activa la transición
                    $buttonP.disabled=false;
                    $buttonN.disabled=false;
            }, 300);
        }
    }

    const btnNext = document.getElementById('nextPerfil');
    const btnPrev = document.getElementById('prevPerfil');

    btnNext.addEventListener('click', nextPerfilImg);
    btnPrev.addEventListener('click', prevPerfilImg);
});
