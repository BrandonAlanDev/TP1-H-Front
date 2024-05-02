const opinar=()=>{
    let $opinar = document.createElement('section');
    $opinar.setAttribute('id','opinar');
    $opinar.classList.add('bg-amarillo', 'rounded-3xl', 'p-4', 'mt-5', 'justify-center', 'align-middle');
    
    let $article = document.createElement('article');
    $article.classList.add('comentar', 'gap-5', 'justify-center', 'align-middle', 'items-center');

    let $div1 = document.createElement('div');
    $div1.classList.add('label', 'p-2');

    let $form = document.createElement('form');
    $form.setAttribute('method','post');
    $form.setAttribute('id','formulario');
    $form.classList.add('flex', 'flex-row', 'flex-wrap', 'gap-5');
    
    let $id=document.createElement('input');
    $id.setAttribute('type','hidden');
    $id.setAttribute('name','id');

    $form.appendChild($id);

    let $div2=document.createElement('div');
    $div2.classList.add('flex','flex-col', 'flex-wrap', 'gap-5');
    
    let $div3=document.createElement('div');
    $div3.classList.add('flex', 'flex-row', 'flex-wrap', 'align-middle', 'items-center', 'gap-5', 'justify-center');

    let $div4=document.createElement('div');
    $div4.classList.add('flex', 'flex-col', 'flex-wrap', 'align-middle', 'items-center', 'gap-5');

    let $div5=document.createElement('div');
    $div5.classList.add('flex', 'flex-row', 'flex-wrap', 'align-middle', 'items-center', 'gap-5');

    let $prev=document.createElement('button');
    $prev.setAttribute('id','prevPerfil');
    $prev.classList.add('bg-negro', 'text-amarillo', 'pt-2', 'pb-2', 'pl-5', 'pr-5', 'rounded-2xl');
    $prev.innerText="Prev";

    let $next=document.createElement('button');
    $next.setAttribute('id','nextPerfil');
    $next.classList.add('bg-negro', 'text-amarillo', 'pt-2', 'pb-2', 'pl-5', 'pr-5', 'rounded-2xl');
    $next.innerText="Next";

    $div5.appendChild($prev);
    $div5.appendChild($next);

    $div4.appendChild($div5);

    let $img = document.createElement('img');
    $img.setAttribute('id','fotoperfil');
    $img.setAttribute('src','/src/img/dolia-perfil.webp');
    $img.setAttribute('alt','imagen de usuario');
    $img.classList.add('perfil', 'imagen-transicion', 'rounded-3xl');

    let $inputImage=document.createElement('input');
    $inputImage.setAttribute('type','hidden');
    $inputImage.setAttribute('name','imagen');
    $inputImage.setAttribute('id','imagen_src');
    $inputImage.setAttribute('value','/src/img/dolia-perfil.webp');

    $div4.appendChild($img);
    $div4.appendChild($inputImage);

    let $div6=document.createElement('div');
    $div6.classList.add('items-start','flex','flex-col','flex-wrap');

    let $lblUser=document.createElement('label');
    $lblUser.setAttribute('for','user');
    $lblUser.innerText="Nombre :";

    let $user=document.createElement('input');
    $user.setAttribute('type','text');
    $user.setAttribute('name','user');
    $user.setAttribute('id','user');
    $user.setAttribute('placeholder','Nombre de Usuario');
    $user.setAttribute('autocomplete','off');
    $user.classList.add('bg-transparent', 'input1');

    let $lblComment=document.createElement('label');
    $lblComment.setAttribute('for','comentario');
    $lblComment.innerText="Comentario :";

    let $comment=document.createElement('input');
    $comment.setAttribute('type','text');
    $comment.setAttribute('name','comment');
    $comment.setAttribute('id','comentario');
    $comment.setAttribute('placeholder','Ingresa tu opinion aquí');
    $comment.setAttribute('autocomplete','off');
    $comment.classList.add('bg-transparent', 'input2');

    $div6.appendChild($lblUser);
    $div6.appendChild($user);
    $div6.appendChild($lblComment);
    $div6.appendChild($comment);
    
    $div3.appendChild($div4);
    $div3.appendChild($div6);

    $div2.appendChild($div3);

    let $enviar = document.createElement('input');
    $enviar.setAttribute('type','submit');
    $enviar.setAttribute('value','Enviar');
    $enviar.classList.add('ml-5', 'rounded-3xl', 'enviar');

    $form.appendChild($div2)
    $form.appendChild($enviar);
    $div1.appendChild($form);

    $article.appendChild($div1);
    $opinar.appendChild($article);

    return $opinar;
};
export default opinar;