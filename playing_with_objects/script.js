// 1 Practica iterar por medio de un array de objetos/diccionarios.

var users = [
    {
        name: 'Michael',
        age: 37
    },
    {
        name: 'John',
        age: 30
    },
    {
        name: 'David',
        age: 27
    }
];

// ¿Cómo harías print/log de la edad de John?
console.log(`Edad de John ${users[1].age}`);
// ¿Cómo harías print/log del nombre del primer objeto?
console.log(`Nombre del primer Objeto: ${users[0]['name']}`);
// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
for(var i in users){
    console.log(`${users[i].name} - ${users[i].age}`);
}
// ¿Cómo harías para imprimir el nombre de los mayores de edad?
function printAge(users){
    var maxAge = users[0].age;
    var nameUser= users[0].name;
    for(var j in users){
        if(users[i].age > maxAge){
            maxAge = users[i].age;
            nameUser = users[i].name;
        }
    }
    return [nameUser, maxAge];
}
console.log(printAge(users));
// END