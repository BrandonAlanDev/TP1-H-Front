const opinar=()=>{
    $opinar = document.createElement('section');
    $opinar.setAttribute('id','opinar');
    $opinar.classList.add('bg-amarillo', 'rounded-3xl', 'p-4', 'mt-5', 'justify-center', 'align-middle');
    
    $article = document.createElement('article');
    $article.classList.add('comentar', 'gap-5', 'justify-center', 'align-middle', 'items-center');

    $div1 = document.createElement('div');
    $div1.classList.add('label', 'p-2');
    return $opinar;
};
export default opinar;