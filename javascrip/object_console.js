console.log(console);
console.error("esto es un error");
console.warn("esto es un aviso");
console.info("esto es un mensaje informativo");
console.log("esto es un registro de nuestro codigo");

let nombre = "mirian",
    apellido = "luz",
    edad = 23;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);

console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola mi nombre es %s %s y tengo %s años`, nombre, apellido, edad);

console.clear();
console.group("agrupacion de consolas");
console.log("cosnola 1");
console.log("cosnola 2");
console.log("cosnola 3");
console.groupEnd();

const numero = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];
console.table(numero, vocales);
console.table(numero);
console.table(vocales);

const perro = {
    nombre: "Ducan",
    raza: "Doberman",
    color: "CAfe"
}
console.table(perro);

console.time("cuanto tiempo tarda");
const areglo = Array(1000000);
for (let i = 0; i < areglo.length; i++) {
    areglo[i] = i;
}
console.timeEnd("cuanto tiempo tarda");

/* testing */

let x = 3,
    y = 6;
pruebaxy = "se espera que x sea menor que y";
console.assert(x < y, {
    x,
    y,
    pruebaxy
});
