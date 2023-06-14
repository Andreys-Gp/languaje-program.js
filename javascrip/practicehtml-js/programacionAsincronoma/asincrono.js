
/* condigo sincrono bloquiantes */
   
/*  example funtion auto ejecutable  
  rvent loop 
 */
(()=>{
    console.log("Codigo Sincrono");
    console.log("inicio");

  function dos(){
    console.log("Dos");
  }
   function uno(){
    console.log("uno");
    dos();
    console.log("tres");
   }
   uno();
   console.log("fin");

}) ();

/*   sincrono no bloquiante O/i Asincrono */

console.clear();

 (()=>{
    console.log("codigo asincrono ");
    console.log("inicio");
    function dosp(){
      setTimeout(function(){
        console.log("dosp");
      },2000);}

    function unop(){
      setTimeout(function(){
        console.log("unop");
      },1000);
    dosp();
    console.log("tresp");
    }
    
    unop();
    console.log("finp");

 })();