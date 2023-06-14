// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirCadena = (cadena = "") => (!cadena) ?
    console.warn("no ingreso una cadane texto") :
    console.info(cadena.split("").reverse().join(""));

invertirCadena();


//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const textoCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("no ingresaste cadena de texto");
    if (!texto) return console.warn("no ingreso palabra a evaluar");
    let i = 0,
        contador = 0;
    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${texto} se repite ${contador} veces`);
}
textoCadena();

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palandrimo = (palabra = "") => {
    if (!palabra) return console.warn(" no ingresaste una palabra o frase");
    palabra = palabra.toLocaleLowerCase();
    // un arreglo
    let alReves = palabra.split("").reverse().jonin("");

    return (palabra === alReves) ?
        console.info(`si es palandrimo, original ${palabra} igualdad ${alReves}`) :
        console.info(`no es palindromo, original ${palabra} igualdad ${alReves}`);
}
palandrimo();


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. 

const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto) ?
    console.warn("no ingresaste texto en el programa") :
    (!patron) ?
    console.warn("no ingresaste un patron de busqueda") :
    console.info(texto.replace(new RegExp(patron, "ig"), ""));

    eliminarCaracteres();
