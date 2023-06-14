/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". 
*/
//RESPUESTA UNO
const invertir = (cadena,repeticion) =>(!cadena)
?
console.warn("No pusiste una cadena")
:
(repeticion===undefined)?
console.warn("No pusiste cuantas veces repetir")
:
console.info (cadena.repeat(repeticion))

invertir("Hola Mundo" ,5)
invertir("" ,5)
invertir("Hola Mundo" ,)
//RESPUESTA DOS
const strReverse = (str = "") => {
    if (!str) return console.warn('Olvidaste ingresar una cadena.')
    if (typeof str !== 'string') return console.error('¡No ingresaste una cadena de caracteres!')

    let splitStr = str.split("")
    let reverseArray = splitStr.reverse()
    let reverseStr = reverseArray.join("")

    return reverseStr
}

console.log(strReverse("Hola Mundo Cruel"))



//RESPUESTA TRES
const invierteTexto = (cadena = "") => {
  if (!cadena) return console.error("No ingresaste cadena de texto a procesar");
  let textoInvertido = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    textoInvertido += cadena.charAt(i);
  }
  console.info(textoInvertido);
};

invierteTexto();
invierteTexto("");
invierteTexto("Hola Mundo aqui estoy");

//RESPUESTA 4

const invertircade=(cadena="")=>
(!cadena)
?console.warn("No ingresaste una cadena")
:console.info(cadena.split("").reverse().join(""));
invertircade ();
invertircade("Hola Mundito")


/*
Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
//Primera Respuesta
const contarTexto = (cadena = "", palabra = undefined) => {
  if (!cadena) return console.warn("No has ingresado frase para procesar");
  if (!palabra) return console.warn("No has ingresado palabra a procesar");

  regex = new RegExp(palabra, "g");
  if (regex.test(cadena)) {
    console.info(
      `La palabra "${palabra}" se repite "${
        cadena.match(regex).length
      }" veces dentro de la frase`
    );
  } else {
    return console.warn("La palabra no existe dentro de la frase");
  }
};

contarTexto();
contarTexto("hola mundo adios mundo");
contarTexto("", "mundo");
contarTexto("hola mundo adios mundo", "");
contarTexto("hola mundo adios mundo", "mundo");
//segunda respuesta

const textoEnCadena = (cadena="", texto="")=>{

if (!cadena) return console.warn("no ingresaste un texto a procesar");
if(!texto) return console.warn("no ingresaste la palabra");

let i = 0, contador = 0;

    while ( i !== -1 ) {
        
        i = cadena.indexOf(texto, i);

        if ( i !== -1) {
            i++;
            contador++;
        }
        }
        return console.info(` La palabra ${texto} se repite ${contador} veces `);

}
textoEnCadena();
textoEnCadena("hola mundo en ell mundo");
textoEnCadena("", "mundo");
textoEnCadena("hola mundo este esel mundo de todos", "mundo");


Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
:*/
const funcioPalindro=(texto = "")=>{
if(!texto) return console.warn("Olvidaste ingressar la frase");

texto=texto.toLowerCase();

let alReves= texto.split("").reverse().join("");

return (texto === alReves)
? console.info(`la palabra ingresada "${texto}",palabra al reves "${alReves}", si es palindrome`)
 :console.info(`la palabra ingresada "${texto}",palabra al reves "${alReves}", No es palindrome`);

}
funcioPalindro();
funcioPalindro("salas");
funcioPalindro("SaLas");
funcioPalindro("hola mundo");




//SEGUNDA FORMA
const palindromo = ( palabra = "") => {
    if ( !palabra ) return console.warn('No ingresaste una palabra o frase');

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (alReves === palabra)
        ? console.info(`Sí es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
        : console.warn(`La palabra o frase no es palíndomo, Palabra original ${palabra}, Palabra al revés ${alReves}`);
};

//palindromo('Salas');
//palindromo('Mario');

//TERCERA RESPUESTA

const Palindromo = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste cadena de texto a procesar");
  let textoInvertido = "";
  const regex = / /gi;
  cadena2 = cadena.replace(regex, "").toUpperCase();
  cadena2 = cadena2.replace(/,/g, "");
  cadena2 = cadena2.replace(/!/g, "");
  cadena2 = cadena2.replace(/¡/g, "");
  cadena2 = cadena2.replace(/:/g, "");
  cadena2 = cadena2.replace(/\?/g, "");
  cadena2 = cadena2.replace(/¿/g, "");

  for (let i = cadena2.length - 1; i >= 0; i--) {
    switch (cadena2.charAt(i)) {
      case "Á":
        cadena2 = cadena2.replace(/Á/g, "A");
        break;
      case "É":
        cadena2 = cadena2.replace(/É/g, "E");
        break;
      case "Í":
        cadena2 = cadena2.replace(/Í/g, "I");
        break;
      case "Ó":
        cadena2 = cadena2.replace(/Ó/g, "O");
        break;
      case "Ú":
        cadena2 = cadena2.replace(/Ú/g, "U");
        break;
      default:
        break;
    }
    textoInvertido += cadena2.charAt(i);
  }

  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena2.charAt(i).toUpperCase() != textoInvertido.charAt(i).toUpperCase()
    ) {
      return console.info(`La frase "${cadena}", no es un palindromo`);
    }
  }
  return console.log(`La frase "${cadena}", si es un palindromo.`);
};

//Palindromo();
//Palindromo("");
//Palindromo("comer");
//Palindromo( "salas");