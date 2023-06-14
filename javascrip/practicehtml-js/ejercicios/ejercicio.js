/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

console.log("primer punto");

//funcion declarada 
/* function contarCaracteres(cadena = "") {
    if (!cadena) {
        console.warn("No ingreso cadena texto");
    } else {
        console.info(`la dadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}contarCaracteres();
contarCaracteres("hola mundo"); */

//funcion expresada
const contarCaracteres = (cadena = "") =>
    (!cadena) ? console.warn("No ingreso cadena") :
    console.info(`la dadena "${cadena}" tiene ${cadena.length} caracteres`);
contarCaracteres();
contarCaracteres("hola mundo");

console.log("segundo punto");
const recortarTexto = (cadena = "", longitud = undefined) => (!cadena) ?
    console.warn("No ingresaste un texto")
    /* :console.info(cadena.slice(0,longitud)) */
    :
    (longitud === undefined) ?
    console.warn("No ingresastes la logitud para recortar el texto") :
    console.info(cadena.slice(0, longitud));
recortarTexto("hola mundo", 4);
recortarTexto("mira", 0);
recortarTexto();
recortarTexto("Hola mundo");
recortarTexto("", 5);


console.log("tercer punto");
const cadenaAArreglo = (texto = "", separador = undefined) =>
    (!texto) ?
    console.warn("No ingresaste una cadena de texto") :
    (separador === undefined) ?
    console.warn("no ingresaste un separador") :
    console.info(texto.split(separador));
cadenaAArreglo("Amet nulla occaecat deserunt aliquip. Eiusmod dolore nulla commodo reprehenderit sit. Adipisicing reprehenderit anim do aliqua voluptate. Dolor proident irure pariatur adipisicing labore enim aliqua laborum irure esse ut. Veniam magna aliquip enim excepteur mollit anim exercitation eu eu laborum dolore in", " ");

console.log("cuanto punto ");
const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto) return console.warn("No ingresaste texto.");

    if (veces === undefined) return console.warn("No ingresaste veces repetir texto.");

    if (veces === 0) return console.error("el numero de veces no puede ser 0");

    if (Math.sign(veces) === -1  ) return console.error("el numero de veces no puede ser negativo");

    for (let index = 1; index <= veces; index++) console.info(`${texto},${index}`);
}
repetirTexto("hola mundo", 3);
repetirTexto();
repetirTexto("Hola mundo", 0);
repetirTexto("Hola mundo",-20);