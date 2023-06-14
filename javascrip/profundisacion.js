  /* destructuracion */
  /*  const [one, two, three]=numerico;
   console.log(one,two,three); */

  let personaje = {
    nombre: "mircha",
    apellido: "flores",
    edad: 35
  }
  /* destru */
  let {
    nombre,
    apellido,
    edad
  } = personaje;
  console.log(nombre, apellido, edad);

  /* parametro rest y operador spread */

  function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function (n) {
      resultado += n;
    })
    return resultado;
  }
  console.log(sumar(1, 2));


  /*  spread */
  const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];
  console.log(arr1, arr2);
  const arr3 = [...arr1, ...arr2];
  console.log(arr3);


  /* arrow function */
  const salude = () => console.log(`HELLO`);
  salude();

  const sume = (a, b) => a + b;
  console.log(sume(9, 1));

  const funcioDeVariasLineas = () => {
    console.log("hola");
    console.log("mira");
    console.log("nombre");
  }
  funcioDeVariasLineas();

  const numeross=[1,2,3,4,5];
  numeross.forEach((referencia,posicion) => console.log(`${referencia} es ta en la posicion ${posicion}`));

     /*  POOO
      clases---modelo a seguir 
      objetos---es una instancia de clase 
          atributos---es una caracteristica de la propiedad del objeto son variables dentro del objeto
          metodos---solas acciones que un metodo puede realizar */

          