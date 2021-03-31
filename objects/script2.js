// medium entendiendo javascript
// Objetos literales o declarativos sin instanciar o hacer un constructor
const stefano = {
    nombre : 'Stefano',
    edad: 27,
    sexo: 'masculino',
    pasatiempos : ['correr', 'sauna'],
    hablar : function(){return `Hola soy ${this.nombre}, y tengo ${this.edad} años`;}
}

console.log(stefano.hablar());
// Objetos construidos
