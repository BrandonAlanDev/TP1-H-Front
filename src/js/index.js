import navbar from "/src/modules/navbar.mjs";
import inicio from "/src/modules/inicio.mjs";
const $root = document.getElementById("root");
const $navbar = navbar();
const $inicio = inicio();
$root.appendChild($navbar);
$root.appendChild($inicio);
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

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, 3000);
    }

    image.addEventListener("click", resetInterval);
    prevBtn.addEventListener("click", function() {
        prevImage();
        resetInterval();
    });
    nextBtn.addEventListener("click", function() {
        nextImage();
        resetInterval();
    });

    intervalId = setInterval(nextImage, 3000);

    const characters = [
        "personaje1",
        "personaje2",
        "personaje3",
        "personaje4",
        "personaje5"
    ];
    let intervalCharacter;

    const $character=document.getElementById('personajes');

    const actualCharacter = () => {
        if($character.classList.contains('personaje1'))return['personaje1','personaje2'];
        if($character.classList.contains('personaje2'))return['personaje2','personaje3'];
        if($character.classList.contains('personaje3'))return['personaje3','personaje4'];
        if($character.classList.contains('personaje4'))return['personaje4','personaje5'];
        if($character.classList.contains('personaje5'))return['personaje5','personaje1'];
    }

    function nextCharacter() {
        let $showedCharacter = actualCharacter();
        $character.classList.remove($showedCharacter[0]);
        $character.classList.add($showedCharacter[1]);
    }

    function selectedCharacter(index) {
        let $showedCharacter = actualCharacter();
        $character.classList.remove($showedCharacter[0]);
        $character.classList.add(characters[index]);
    }

    function resetInterval() {
        clearInterval(intervalCharacter);
        intervalId = setInterval(nextCharacter, 10000);
    }
    intervalCharacter = setInterval(nextCharacter, 10000);
});
