class Animale {
    /*      constructor es un metodo especial que se ejecuta en el momento de la instancia de la claseel
     */
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    //Metodos 
    sonar = function () {
        console.log("Hago sonidos por que estoy vivo");
    }

    saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}
 class Perro extends Animale{
    constructor(nombre, genero, tamano) {
        super(nombre, genero);
        this.tamano = tamano;
    }
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("GUAA GUAA !!!");
    }

 }
const lulu = new Animale("lulu", "femenino"),
    copito = new Perro("copito", "masculino","enorme");

console.log(lulu);
lulu.saludar();
lulu.sonar();
console.log(copito);
copito.saludar();
copito.ladrar();

