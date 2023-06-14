/*  POOO
      clases---modelo a seguir 
      objetos---es una instancia de clase 
          atributos---es una caracteristica de la propiedad del objeto son variables dentro del objeto
          metodos---solas acciones que un metodo puede realizar (son funciones dentro de un objeto) */

          //funcion constructora

         /*  function Animal(nombre,genero){
            //Atributos
            this.nombre = nombre;
            this.genero = genero;
            //Metodos
            this.sonar=function(){
                console.log("Hago sonidos por que estoy vivo");
            }

            this.saludar=function(){
                console.log(`Hola me llamo ${this.nombre}`);
            }
          } */

          //funcion constructora asignandole los metodos al prototipo no ala funcion buena practica

          function Animal(nombre,genero){
            //Atributos
            this.nombre = nombre;
            this.genero = genero;
          }
           //Metodos agregados al prototipo no ala funcion construtora 
           Animal.prototype.sonar=function(){
            console.log("Hago sonidos por que estoy vivo");
        }

       Animal.prototype.saludar=function(){
            console.log(`Hola me llamo ${this.nombre}`);
        }

          const peluche=new Animal("Peluche","masculino"),
                natacha=new Animal("natacha","femenino");

                console.log(peluche);
                console.log(natacha);

                peluche.sonar();
                natacha.sonar();
                peluche.saludar();
                natacha.saludar();



