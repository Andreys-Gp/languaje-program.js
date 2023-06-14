let objeto = {
    nombre: "andreys",
    edad: 23
}
/* arreglo */
let colores = [
    "blanco",
    "negro",
    "azul"
];

console.log(objeto);
console.log(colores);
objeto.correo = "brayan6gonzalez@gmail.com";
/*      agregar al arreglo
 */
colores.push("anaranjado");
console.log(objeto);
console.log(colores);

/*  cadenas de texto */

let nombre = 'Brayan Andreys';
let apellido = "Gonzalez Perez";
let saludo = new String("hola mundo");
console.log(nombre, apellido, saludo);
console.log(nombre.length, apellido.length, saludo.length);

let lorem = "Elit exercitation occaecat nisi id minim cillum incididunt ex voluptate laboris incididunt. Cupidatat tempor amet ea aliqua culpa sint irure officia do voluptate cillum. Magna laborum consequat dolore eu nisi nisi magna.";

/* metodos */
console.log(nombre.length,
    apellido.length, saludo.length,
    nombre.toUpperCase(),
    apellido.toLowerCase,
    lorem.includes("Elit"),
    lorem.includes("Andreys"),
    lorem.split(" ")
);

/* concatenar */
let name = "Noromar";
let apellide = "Morales";
let saludo1 = "Hola mi nombre es" + name + " " + apellide;
console.log(saludo1);
/*      interpolacion variables */
let saludo2 = `hola mi nombre es ${name} ${apellide}`;
console.log(saludo2);

let ul = `
     <ul>
    <li>primavera</li>
    <li>verano</li>
    <li>otoño</li>
    <li>invierno</li>
    </ul>  `
console.log(ul);

/* Number */
let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

/*         typeof dice de que tipo de elemento estamos trabajando
 */
console.log(a, b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof b, typeof a);
console.log(a + parseInt(d));

/*  es lo mismo con el odjeto Number */
console.log(Number.parseInt(c));
console.log(a + Number.parseFloat(d));

/*  tipos datos Boolean */
let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso);
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));

/*     function Las funciones son uno de
 los bloques de construcción fundamentales
  en JavaScript. Una función en JavaScript es similar a 
  un procedimiento — un conjunto de instrucciones que realiza 
  una tarea o calcula un valor, pero para que un procedimiento
   califique como función, debe tomar alguna entrada y devolver 
   una salida donde hay alguna relación obvia entre la entrada y
    la salida. Para usar una función, debes definirla en algún lugar
     del ámbito desde el que deseas llamarla.
 */

/*  function declarada */

function estoEsUnaFuncion() {
    console.log("uno");
    console.log("dos");
    console.log("tres");
}
/*     una function que devuelve valor 
 */
function estoEsUnaFuncionQueDevuelveValor() {
    console.log("uno");
    console.log("dos");
    console.log("tres");
    return "retorna una cadena de texto";
}
/* estoEsUnaFuncionQueDevuelveValor(); */
/*     o , se declara o invoca funcion como  */
let valorDeFuncion = estoEsUnaFuncionQueDevuelveValor();

/*        invocacion de funciones */
estoEsUnaFuncion();
console.log(valorDeFuncion);

/* function que recive valores */
function saludar(nombre, edad) {
    console.log(`hola mi nombre es $(nombre) y tengo $(edad) años`);
}
saludar("Natacha", 6);
saludar();

funcionDeclarada();

/* funciones declaradas vs funciones  expresadas */
function funcionDeclarada() {
    console.log("funcion declarada puede invocarse en cualquier parte del incluso antes de que sea declarada");
};
funcionDeclarada();

/* lo primero que ordena js son variables y funciones  */

/* function anonima */
const funcionExpresada = function () {
    console.log("esto es una funcion expresada es una funcion sin nombre que se le asignado como valor a una variable ");

};
funcionExpresada();

/*   arreglos */

const ab = [];

const ba = [1, true, "hola", ["A", "B", "C"]];
console.log(ba);
console.log(ba.length);
console.log(ba[2]);
console.log(ba[3][1]);

const C = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(C);

const D = Array(100).fill(false);
console.log(D);

const coloress = ["rojo", "verde", "azul"];
console.log(coloress);
coloress.push("negro");
console.log(coloress);
colores.forEach(function (el, index) {
    console.log(`<li id="${index}">${el}</li>`);
});

/* objeto */
const B = {}
console.log(B);

const Brayan = {
    nombre: "Brayan",
    apellido: "Gonzalez",
    edad: 23,
    pasatiempos: ["leer", "musica", "dibujar", "enseñar"],
    soltero: false,
    contacto: {
        email: "brayan6gonzalez@gmail.com",
        facebook: "http://brian.gp.963",
        movil: "322009922"
    },
    saludarr: function () {
        console.log("bienbenido :)")
    },
    decirMiNombre: function () {
        console.log('Hola me llamo ${this.nombre} apellido ${this.apellido edad ${this.edad}')
    }
}
console.log(Brayan);
console.log(Brayan.nombre);
console.log(Brayan.soltero);
console.log(Brayan.pasatiempos);
console.log(Brayan.pasatiempos[3]);
console.log(Brayan.contacto.facebook);
Brayan.saludarr();
Brayan.decirMiNombre();

/* operadores */

/*  aritmeticos: + - * / % ()  */

/*  operandores relacionales > < >= <= == === != !== */

/*  = asignacion de variable 
 == comparacion de variable 
 === buena practica*/

/* operadores logicos 
!--Not
||--or
&&--and */

/*  condicional else-if */

/* operador ternario condicion ?verdadera o : falsa */

let edad = 19;
console.log("opeador ternario");
let eresMayor = (edad >= 18) ?
    "Eres mayor de edad" :
    "Eres menor de edad";
console.log(edad);

 /* switch - case */

 /* domingo=0
 lunes=1
 martes=2
 miercoles=3
 jueves=4
 viernes=5
 sabado=6 */

 let dia=2;
  switch (dia) {
    case 0:
        console.log("domingo");
        break;
        case 1:
            console.log("lunes");
            break;
          case 2:
            console.log("martes");
            break;
            case 3:
                console.log("miercoles");
                break;
                case 4:
                    console.log("jueves");
                    break;
                    case 5:
                        console.log("viernes");
                        break;
                        case 6:
                            console.log("sabado");
                            break;
  
    default:
        console.log("el dia no existee");
        break;
  }

  let contador=0;
  while (contador<10) {
    console.log(contador);
    contador++;
  }

  do {
    console.log(contador);
    contador++;
  } while (contador<10);

  for (let i = 0; i < 10; i++) {
             console.log("for"+i);
   /*  const element = array[index];
     */
  }
  let numeros =[10,20,30,40,50,60,70,80,90];

   for (let i = 0; i < numeros.length; i++) {
     console.log(numeros[i]);
   }

   const Nombre={
    name:"brayan",
    apellide:"Gonzalez",
     años:35
   }
     for (const propiedad in Nombre) {
            console.log(propiedad);
            console.log(`Key: $(propiedad), Value: $(Nombre[propiedad])) `); 
        }

          /* cualquier elemento iterable */
        let cadena="Hola mundo";
        for (const caracter of cadena) {
            console.log(caracter);
        }

        

