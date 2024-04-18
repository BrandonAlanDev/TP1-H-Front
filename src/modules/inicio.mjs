const inicio = () =>{
    let $inicio = document.createElement(`section`);
    $inicio.setAttribute('id','inicio');
    $inicio.classList.add('container','flex','flex-col','lg:flex-row','lg:justify-between','mt-7');
    
    let $articleText = document.createElement('article');
    $articleText.classList.add('lg:w-1/2','lg:mr-5vw','bg-amarillo','lg:mb-0','mb-4','p-4','ml-5','mr-5','text-center','rounded-2xl')
    
    let $h1 = document.createElement('H1');
    $h1.classList.add('text-negro','font-bold','text-3xl','mb-7');
    $h1.innerHTML="Honor of Kings";
    
    let $p = document.createElement('p');
    $p.classList.add('content','text-xl');
    $p.innerHTML="Honor of Kings, también traducido al mercado internacional como King of Glory y Strike of Kings, es un videojuego multijugador de arena de batalla en línea (MOBA) publicado por Tencent Games. En julio de 2017, se informó que el juego tenía más de 80 millones de jugadores activos diariamente y 200 millones de jugadores activos mensuales. Es el juego más rentable (con más recaudo) del mundo y la aplicación de descarga gratuita más popular del planeta.";
    
    $articleText.appendChild($h1);
    $articleText.appendChild($p);

    let $articleCarousel = document.createElement('article');
    $articleCarousel.classList.add('carousel','mx-auto','lg:w-1/2','lg:ml-5vw','bg-amarillo','flex','justify-between','rounded-2xl','overflow-hidden','relative');
    
    let $prevBtn = document.createElement('button');
    $prevBtn.classList.add('prev-btn');
    $prevBtn.innerHTML="&lt;";

    let $img = document.createElement('img');
    $img.classList.add('carousel-image');
    $img.setAttribute('src','/src/img/HonorOfKings1.webp');
    $img.setAttribute('alt','imagen ilustrativa del juego');

    let $nextBtn = document.createElement('button');
    $nextBtn.classList.add('next-btn');
    $nextBtn.innerHTML="&gt;";
    
    $articleCarousel.appendChild($prevBtn);
    $articleCarousel.appendChild($img);
    $articleCarousel.appendChild($nextBtn);
    
    $inicio.appendChild($articleText);
    $inicio.appendChild($articleCarousel);
    
    return $inicio;
}
export default inicio;