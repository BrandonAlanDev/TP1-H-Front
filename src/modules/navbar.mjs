const navbar = () => {
    // Crear el elemento nav y añadir la clase bg-amarillo
    let $nav = document.createElement(`nav`);
    $nav.classList.add('bg-amarillo','navegacion');

    // Crear el contenedor principal
    let $container = document.createElement('div');
    $container.classList.add('mx-auto', 'max-w-7xl', 'px-2', 'sm:px-6', 'lg:px-8');

    // Crear el contenedor del header
    let $headerContainer = document.createElement('div');
    $headerContainer.classList.add('relative', 'flex', 'h-16', 'items-center', 'justify-between');

    // Crear el botón de menú móvil
    let $mobileMenuButtonContainer = document.createElement('div');
    $mobileMenuButtonContainer.classList.add('absolute', 'inset-y-0', 'left-0', 'flex', 'items-center', 'sm:hidden');

    let $mobileMenuButton = document.createElement('button');
    $mobileMenuButton.setAttribute('type', 'button');
    $mobileMenuButton.classList.add('relative', 'inline-flex', 'items-center', 'justify-center', 'rounded-md', 'p-2', 'text-negro', 'hover-bg-azul', 'hover-text-blanco', 'focus:outline-none', 'focus:ring-2', 'focus:ring-inset', 'focus:ring-white');
    $mobileMenuButton.setAttribute('aria-controls', 'mobile-menu');
    $mobileMenuButton.setAttribute('aria-expanded', 'false');

    // Icono del botón de menú móvil
    let $menuClosedIcon = document.createElement('span');
    $menuClosedIcon.classList.add('absolute', '-inset-0.5');

    let $srOnlyText = document.createElement('span');
    $srOnlyText.classList.add('sr-only');
    $srOnlyText.textContent = 'Abrir menu principal';

    let $menuClosedSvg = document.createElement('svg');
    $menuClosedSvg.classList.add('block', 'h-6', 'w-6');
    $menuClosedSvg.setAttribute('fill', 'none');
    $menuClosedSvg.setAttribute('viewBox', '0 0 24 24');
    $menuClosedSvg.setAttribute('stroke-width', '1.5');
    $menuClosedSvg.setAttribute('stroke', 'currentColor');
    $menuClosedSvg.setAttribute('aria-hidden', 'true');
    $menuClosedSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';

    // Icono cuando el menú está abierto
    let $menuOpenSvg = document.createElement('svg');
    $menuOpenSvg.classList.add('hidden', 'h-6', 'w-6');
    $menuOpenSvg.setAttribute('fill', 'none');
    $menuOpenSvg.setAttribute('viewBox', '0 0 24 24');
    $menuOpenSvg.setAttribute('stroke-width', '1.5');
    $menuOpenSvg.setAttribute('stroke', 'currentColor');
    $menuOpenSvg.setAttribute('aria-hidden', 'true');
    $menuOpenSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';

    // Adjuntar los elementos del botón de menú móvil
    $mobileMenuButton.appendChild($menuClosedIcon);
    $mobileMenuButton.appendChild($srOnlyText);
    $mobileMenuButton.appendChild($menuClosedSvg);
    $mobileMenuButton.appendChild($menuOpenSvg);

    $mobileMenuButtonContainer.appendChild($mobileMenuButton);

    // Crear el contenedor del logo y el título
    let $logoContainer = document.createElement('div');
    $logoContainer.classList.add('flex', 'flex-shrink-0', 'items-center');

    let $logoImg = document.createElement('img');
    $logoImg.classList.add('noselect','h-8', 'w-auto');
    $logoImg.setAttribute('src', '/src/img/HonorOfKingsLogo2.webp');
    $logoImg.setAttribute('alt', 'Your Company');

    let $title = document.createElement('h1');
    $title.classList.add('noselect','text-negro', 'font-bold');
    $title.textContent = 'Honor of Kings';

    // Adjuntar el logo y el título
    $logoContainer.appendChild($logoImg);
    $logoContainer.appendChild($title);

    // Crear el contenedor de los enlaces
    let $linksContainer = document.createElement('div');
    $linksContainer.classList.add('hidden', 'sm:ml-6', 'sm:block');

    let $links = document.createElement('div');
    $links.classList.add('flex', 'space-x-4');

    // Crear los enlaces
    let linksData = [
        { href: '#inicio', text: 'Inicio', ariaCurrent: 'page' },
        { href: '#personajes', text: 'Personajes'},
        { href: '#plataformas', text: 'Plataformas'},
        { href: '#contactanos', text: 'Contactanos'}
    ];

    linksData.forEach(linkData => {
        let $link = document.createElement('a');
        $link.setAttribute('href', linkData.href);
        $link.textContent = linkData.text;
        $link.classList.add('noselect','block','text-negro', 'hover-bg-azul', 'hover-text-blanco', 'rounded-md', 'px-3', 'py-2', 'text-sm', 'font-medium'); // Agregar la clase 'block'
        if (typeof linkData.className === 'string') {
            linkData.className.split(' ').forEach(className => {
                $link.classList.add(className.trim()); // Agregar cada clase individualmente
            });
        }
        if (linkData.ariaCurrent) {
            $link.setAttribute('aria-current', linkData.ariaCurrent);
        }
        $links.appendChild($link);
    });
    

    // Adjuntar los enlaces al contenedor de enlaces
    $linksContainer.appendChild($links);

    // Adjuntar todo al contenedor principal
    $headerContainer.appendChild($mobileMenuButtonContainer);
    $headerContainer.appendChild($logoContainer);
    $headerContainer.appendChild($linksContainer);
    $container.appendChild($headerContainer);

    // Crear el menú móvil
    let $mobileMenu = document.createElement('div');
    $mobileMenu.classList.add('sm:hidden');
    $mobileMenu.setAttribute('id', 'mobile-menu');

    let $mobileMenuLinksContainer = document.createElement('div');
    $mobileMenuLinksContainer.classList.add('space-y-1', 'px-2', 'pb-3', 'pt-2');

    // Crear los enlaces del menú móvil
    linksData.forEach(linkData => {
        let $link = document.createElement('a');
        $link.setAttribute('href', linkData.href);
        $link.textContent = linkData.text;
        $link.classList.add('noselect','block','text-negro', 'hover-bg-azul', 'hover-text-blanco', 'rounded-md', 'px-3', 'py-2', 'text-sm', 'font-medium');
        if (linkData.ariaCurrent) {
            $link.setAttribute('aria-current', linkData.ariaCurrent);
        }
        $mobileMenuLinksContainer.appendChild($link);
    });

    // Adjuntar los enlaces al menú móvil
    $mobileMenu.appendChild($mobileMenuLinksContainer);

    // Adjuntar el menú móvil al contenedor principal
    $container.appendChild($mobileMenu);

    // Adjuntar el contenedor principal al nav
    $nav.appendChild($container);

    return $nav;
}

export default navbar;