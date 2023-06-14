
console.log("manejo de errores");
       /* evaluando codigo */
try {
    console.log("aca se agrega el codigo a evaluar");
    noExiste;
} catch (error) {
    console.log("aca se captura cualquier error cometido lanzado por try");
    console.log(error);
}finally{
    console.log("siempre se eecuta al final del bloque codigo");
}
try {
    let numero="y";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es numerico"); }
        console.log(numero*numero);
    }
    catch (numeroError) {
    console.log(`se produjo el siguiente error: ${numeroError}`);
} 

   /* break y continue */
          const elArray=[1,2,3,4,5,6,7,8,9,0];
   for (let i = 0; i < elArray.length; i++) {
     if (i===5) {
        break;
     }
     console.log(elArray[i]);
   }

   /* const elArray=[1,2,3,4,5,6,7,8,9,0]; */
   for (let i = 0; i < elArray.length; i++) {
     if (i===5) {
        continue;
     }
     console.log(elArray[i]);
   }
   
   /* destructuracion */
   const [one, two, three]=numerico;
    console.log(one,two,three);

    let personaje={
        nombre:"mircha",
        apellido:"flores",
        edad:35
    }
    /* destru */
    let {nombre,apellido,edad}=personaje;
    console.log(nombre,apellido,edad);