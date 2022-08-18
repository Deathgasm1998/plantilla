/* FUNCIONES PARA CARRITO
-------------------------------------------------- */

let elemento = document.getElementsByClassName('name-product1');
let texto = elemento[0].innerText;
console.log(texto);
console.log(texto.length);
document.getElementsByClassName('name-product1').innerHTML = 'hola'


/* End of FUNCIONES PARA CARRITO
-------------------------------------------------- */
function recortarTexto(texto, longitud, elemento){
    let cadenaCut = texto.substring(0,longitud);
    elemento.innerText('jola');
}