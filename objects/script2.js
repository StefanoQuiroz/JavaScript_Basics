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
// const myObj = {
//     nombre: 'Jeisson',
//     hablar: function(){return `${this.nombre}`;}
// }

// const myFunc = myObj.hablar;
// myObj.hablar = null;
// console.log(myObj.hablar);
// console.log(myFunc);

// Acceder a propiedades Notación . & Notacion['key' || var] var = 'key'

// console.log(myObj.nombre, myObj["nombre"]);
// const propiedad = 'nombre';
// console.log(myObj[propiedad]);

// Atributos de las propiedades

// var atributos = Object.getOwnPropertyDescriptor(myObj, 'hablar');
// console.log(atributos);

// Establecer Atributos

// var myObject = {};
// Object.defineProperty(myObject, 'a', {
//     value: 2,
//     writable: true, //si se modifica o no 
//     enumerable: true,
//     configurable: true
// });

// console.log(myObject.a);
// myObject.a = 3;
// console.log(myObject.a);

// Enumerable
// var myObj = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   Object.defineProperty(myObj, 'd', {
//     value: 4,
//     writable: true,
//     configurable: true,
//     enumerable: true
//   });
  
//   console.log(myObj); // {a: 1,b: 2,c: 3}
  
//   for(var item in myObj) {
//     console.log(item);
//   }

// Immutable.js
require(['./immutable.min.js'], function (Immutable) {
    var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
    var map2 = map1.set('b', 50);
    map1.get('b'); // 2
    map2.get('b'); // 50
  });
