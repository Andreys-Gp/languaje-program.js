

/* function cuadradoCallback(value, callback){
    setTimeout()=>{
        callback(value,value*value);
    }, 0| Math.random()*1000
    }
 */
    function cuadradoPromise(value){
         return new Promise((resolve, reject)=>{
            setTimeout(()=>{
               /*  callback(value, value*value); */
               resolve({
                value,
                result:value*value
               });
            }, 0|Math.random()*1000 );
         });
        } 
           cuadradoPromise(0)

           .then((obj)=>{
            console.log(`inicio promise`);
            console.log(`promise: ${obj.value}, ${obj.result}`);
            return cuadradoPromise(1);
            })

            .then(obj =>{
               console.log(`promise: ${obj.value}, ${obj.result}`);
               return cuadradoPromise(2); 
            })

            .then(obj =>{
                console.log(`promise: ${obj.value}, ${obj.result}`);
                return cuadradoPromise(3); 
             })

             .then(obj =>{
                console.log(`promise: ${obj.value}, ${obj.result}`);
                return cuadradoPromise(4); 
             })

             .then(obj =>{
                console.log(`promise: ${obj.value}, ${obj.result}`);
                return cuadradoPromise(5); 
             })

             .then(obj=>{
                console.log(`promise: ${obj.value}, ${obj.result}`);
                console.log(`fin de la promesa- promisa`);
             })
          
           .catch()