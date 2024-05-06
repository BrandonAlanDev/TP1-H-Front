const opiniones=()=>{
    let $opiniones = document.createElement('section');
    $opiniones.setAttribute('id','opiniones');
    $opiniones.classList.add('rounded-3xl', 'p-4', 'mt-2', 'flex','flex-row','flex-wrap', 'justify-center','space-x-7','bg-blanco','gap-5');

    let $recargar = document.createElement('button');
    $recargar.innerText="Recargar";
    $recargar.setAttribute('id','recargar');
    $recargar.classList.add('ml-5', 'rounded-3xl', 'recargar');

    let $buscar = document.createElement('button');
    $buscar.innerText="Buscar";
    $buscar.setAttribute('id','buscarUser');
    $buscar.classList.add('ml-5', 'rounded-3xl', 'recargar');

    let $paginador = document.createElement('div');
    $paginador.classList.add('gap-5', 'flex', 'flex-row','flex-nowrap');

    let $prev = document.createElement('button');
    $prev.innerText="⭠";
    $prev.setAttribute('id','prevOpiniones');
    $prev.classList.add('ml-5', 'rounded-3xl', 'paginado');

    let $page = document.createElement('button');
    $page.innerText="1";
    $page.setAttribute('id','pageOpiniones');
    $page.classList.add('ml-5', 'rounded-3xl', 'paginado');

    let $next = document.createElement('button');
    $next.innerText="→";
    $next.setAttribute('id','nextOpiniones');
    $next.classList.add('ml-5', 'rounded-3xl', 'paginado');

    let $lblUser=document.createElement('label');
    $lblUser.setAttribute('for','user');
    $lblUser.innerText="Usuario : ";

    let $user=document.createElement('input');
    $user.setAttribute('type','text');
    $user.setAttribute('name','user');
    $user.setAttribute('id','userSearch');
    $user.setAttribute('placeholder','Nombre de Usuario');
    $user.setAttribute('autocomplete','off');
    $user.classList.add('bg-transparent', 'input1');

    $paginador.appendChild($prev);
    $paginador.appendChild($page);
    $paginador.appendChild($next);
    $opiniones.appendChild($paginador);
    $opiniones.appendChild($lblUser);
    $opiniones.appendChild($user);
    $opiniones.appendChild($buscar);
    $opiniones.appendChild($recargar);
    return $opiniones;
};
export default opiniones;