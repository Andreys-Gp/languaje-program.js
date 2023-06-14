//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const aleatorio =()=> console.info(Math.round(Math.random() * 100));
aleatorio()

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 const capicua =(numero=0)=>
  {
    if (!numero) return console.warn("no ingresaste un numero");
    if (typeof numero !== "number") return console.error(`el valor ${numero} ingresaste no un dato numerico`);
    
    numero=numero.toString();
    let alReves=numero.split("").reverse().join("");
      
    return ((numero)===alReves)
    ?console.info(`si es un numero capicua, numero origianl ${numero} numero al reves ${alReves}`)
    :console.info(`no es capicua numero ${numero} comparacion ${alReves}`);
  }
  capicua()



//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120

  const factorial=(numero=undefined)=>{
        if (numero===undefined) return console.warn("no ingrasaste dato numerico");
    if (typeof numero !=="number") return console.log(`el valor "${numero}" ingresado no un numero `);
    if (numero===0) return console.error("el numero no deve ser 0");
    if (Math.sign(numero) === -1) return console.error("el numero no puede ser negativo");

    let factorial=1;
    for (let i = numero; i>1; i--) {
      factorial*=i;
    }

    return console.info(`El factorial de ${numero} es factorial ${factorial}`);
  }
  factorial();
  factorial("5");
  factorial(10);