        //prototipo
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
   //herencia prototipica 
   function Perro(nombre,genero,tamano){
    this.super=Animal;
    this.super(nombre,genero);
     this.tamano=tamano;
   }
    //perro esta heredando de animal 
    Perro.prototype=new Animal();
    Perro.prototype.constructor=Perro;

    //sobreescritura de metodos del prototipo padre en el hijo 
    Perro.prototype.sonar=function(){
        console.log("soy un perro y ladro ");
    }
    Perro.prototype.ladrar=function(){
        console.log("Guaaaa Guaaa");
    }

      
  const peluche=new Perro("Peluche","masculino","mediano"),
        natacha=new Animal("natacha","femenino","pequeño");

        console.log(peluche);
        console.log(natacha);

        peluche.sonar();
        natacha.sonar();
        peluche.saludar();
        natacha.saludar();

        