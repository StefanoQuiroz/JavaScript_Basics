// medium entendiendo javascript
// Objetos literales o declarativos sin instanciar o hacer un constructor
// () => {this.key no usar} function() {usar this.key}
// const stefano = {
//     nombre : 'Stefano',
//     edad: 27,
//     sexo: 'masculino',
//     pasatiempos : ['correr', 'sauna'],
//     hablar : function(){return `Hola soy ${this.nombre}, y tengo ${this.edad} años`;}
// }

//console.log(stefano.hablar());
// Objetos construidos
function Persona(nombre, edad, sexo, pasatiempos){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.pasatiempos = pasatiempos;
    this.hablar = function(){return `Hola soy ${this.nombre} y tengo ${this.edad} años`;};
}

const stefan = new Persona('Stefano', 27, 'masculino', ['correr', 'nadar']);

// console.log(stefan.hablar());

// Contenido
const myObj = {
    nombre: 'Jeisson',
    hablar: function(){return `${this.nombre}`;}
}

// const myFunc = myObj.hablar;
// myObj.hablar = null;
// console.log(myObj.hablar);
// console.log(myFunc);

// Acceder a propiedades Notación . & Notacion['key' || var] var = 'key'

console.log(myObj.nombre, myObj["nombre"]);
const propiedad = 'nombre';
console.log(myObj[propiedad]);

// Atributos de las propiedades

