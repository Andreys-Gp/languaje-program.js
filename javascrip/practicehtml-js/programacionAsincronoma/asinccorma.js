
/* El método global setTimeout() establece 
un temporizador que ejecuta una función o una pieza de 
código específica una vez que expira el temporizador.
 */
setTimeout(()=>{
    console.log("inicio");
    console.log("Ejecutando un setTimeout se ejecuta una sola vez");
}, 1000);



/* El método setInterval() , ofrecido en las interfaces Window y Worker , 
llama a una función o ejecuta un fragmento de código
 de forma reiterada, con un retardo de tiempo fijo entre cada llamada.

Este método devuelve un ID de intervalo que lo identifica de forma única, 
de ese modo, el intervalo puede ser eliminado más tarde llamando a
 clearInterval() . */


 /* setInterval(() => {
    console.log("Se ejcuta indefinidamente cada cierto de tiempo ");
}, 1000);
 */
/*  setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000); */

let temporizador= setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

 clearTimeout(temporizador);
  console.log("despues del clearTimeout");
  
    