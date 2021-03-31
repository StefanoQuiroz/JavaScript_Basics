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

console.log(stefan.hablar());