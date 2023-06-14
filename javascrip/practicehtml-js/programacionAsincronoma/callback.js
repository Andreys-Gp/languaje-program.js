


 function cuadradoCallbak(value,callback){
    setTimeout(()=>{
        callback(value, value*value); 
    },0 | Math.random()*100 );
 }
   cuadradoCallbak(0,(value, result)=>{
  console.log("inicia callback");
  console.log(`Callback: ${value}, ${result}`);
  
  cuadradoCallbak(4,(value, result)=>{
    console.log(`Callback: ${value}, ${result}`);
     });
   });
   