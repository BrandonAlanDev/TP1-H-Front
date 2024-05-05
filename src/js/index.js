import navbar from "/src/modules/navbar.mjs";
import inicio from "/src/modules/inicio.mjs";
import personajes from "/src/modules/personajes.mjs";
import opinar from "../modules/opinion.mjs";
import opiniones from "../modules/opiniones.mjs";

const $root = document.getElementById("root");
const $navbar = navbar();
const $inicio = inicio();
const $personajes=personajes();
const $opinar=opinar();
const $opiniones=opiniones();

$root.appendChild($navbar);
$root.appendChild($inicio);
$root.appendChild($personajes);
$root.appendChild($opinar);
$root.appendChild($opiniones);


document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const image = document.querySelector(".carousel-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;
    const images = [
        "/src/img/HonorOfKings1.webp",
        "/src/img/HonorOfKings2.webp",
        "/src/img/HonorOfKings3.webp"
    ];
    let intervalId;

    function showImage(index) {
        image.src = images[index];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function resetIntervalId() {
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, 3000);
    }

    image.addEventListener("click", resetIntervalId);
    prevBtn.addEventListener("click", function() {
        prevImage();
        resetIntervalId();
    });
    nextBtn.addEventListener("click", function() {
        nextImage();
        resetIntervalId();
    });

    intervalId = setInterval(nextImage, 3000);

    const characters = [
        "personaje1",
        "personaje2",
        "personaje3",
        "personaje4",
        "personaje5"
    ];
    const nombres = [
        "Dolia",
        "Biron",
        "Lam",
        "Milady",
        "Alessio"
    ];
    const descripcion = [
        "Dolia es un poderoso soporte en Honor of Kings, utiliza sus habilidades para mantener a tus enemigos alejados de tus aliados, recorre el mapa a traves del rio donde tendras una gran ventaja al mejorar tus habilidades y aumentar tu velocidad de movimiento.",
        "Biron es un raudo combatiente que disputara la linea de choque con todas sus fuerzas, domina al oponente con poderosas habilidades ofensivas y utiliza el teletransporte de tu linea para rotar y participar junto a tu equipo en importantes objetivos.",
        "Lam es un veloz jungla asesino con daño explosivo que se encargara de enboscar a los enemigos para lograr el control de los objetivos mas importantes en la partida, consigue oro asesinando los monstruos neutrales de la jungla esperando la oportunidad perfecta para actuar",
        "Milady es una maga con un gran control de su linea de medio, desgasta a tus enemigos a distancia con tus poderosas habilidades en area y tus invocaciones, rota a los carriles laterales para ayudar a tus compañeros y controla las peleas en equipo con un gran daño explosivo",
        "Alessio es un gran tirador un gran potencial de daño, consigue oro ejecutando minions en la linea de tirador para conseguir poderos objetos que haran de ti el factor de victoria en las peleas en equipo, ten cuidado de las emboscadas y manten las distancias de los asesinos enemigos"
    ];
    let intervalCharacter;

    const $character=document.getElementById('personajes');
    const $nombreChar=document.getElementById('nombrePersonaje');
    const $descripcion=document.getElementById('descripcion');
    let showedCharacter;
    const actualCharacter = () => {
        if($character.classList.contains('personaje1')){
            showedCharacter = [0,1];
        }
        if($character.classList.contains('personaje2')){
            showedCharacter = [1,2];
        }
        if($character.classList.contains('personaje3')){
            showedCharacter = [2,3];
        }
        if($character.classList.contains('personaje4')){
            showedCharacter = [3,4];
        }
        if($character.classList.contains('personaje5')){
            showedCharacter = [4,0];
        }
    }

    function nextCharacter() {
        actualCharacter();
        $character.classList.remove(characters[showedCharacter[0]]);
        $character.classList.add(characters[showedCharacter[1]]);
        $nombreChar.innerHTML=nombres[showedCharacter[1]];
        $descripcion.innerText=descripcion[showedCharacter[1]];
    }

    function selectedCharacter(index) {
        let $showedCharacter = actualCharacter();
        $character.classList.remove(showedCharacter[0]);
        $character.classList.add(characters[index]);
    }

    function resetInterval() {
        clearInterval(intervalCharacter);
        intervalCharacter = setInterval(nextCharacter, 10000);
    }
    intervalCharacter = setInterval(nextCharacter, 10000);

    let $sections = document.querySelectorAll(`section`);
    let $linksNav = document.querySelectorAll(`div a`);

    window.onscroll = () => {
        $sections.forEach (sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop-150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top>= offset && top < offset + height){
                $linksNav.forEach(links=>{
                    links.classList.remove('active');
                    if(id!=null){
                        let $btns = document.getElementsByClassName('btn'+id);
                        if($btns.length>0){
                            let btnsArray = Array.from($btns);
                            btnsArray.forEach(btn => {
                            btn.classList.add('active');
                        });
                        };
                    };
                });
            };
        });
    };
});
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

