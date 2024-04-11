const titulo = (txt) =>{
    let $h1 = document.createElement(`H1`);
    $h1.innerHTML=txt;
    $h1.setAttribute("id",id);
    return $h1;
}
export default titulo;
