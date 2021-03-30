/*
// 1. Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function algo1(){
    var newArr=[];
    for(var i=1; i<=255; i++){
        newArr.push(i);
    }
    return newArr;
}

console.log(algo1());
*/
/*
// 2. Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
function algo2(){
    var sum=0;
    for(var i=1;i<=1000;i++){
        if(!(i%2)){
            sum+=i;
        }
    }
    return sum;
}

console.log(algo2());
*/

/*
// 3. Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function algo3(){
    var sum=0;
    for(var i=1; i<=5000; i++){
        if(i%2){
            sum+=i;
        }
    }
    return sum;
}

console.log(algo3());
*/
/*
// 4. Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function algo4(arr){
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(algo4([1,2,5]));
console.log(algo4([-5,2,5,12]));
*/
/*
// 5. Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function algo5(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(algo5([-3,3,5,7]));
*/
/*
// 6. Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function algo6(arr){
    let size = arr.length;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/size;
}

console.log(algo6([1,3,5,7,20]));
*/
/*
// 7. Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function algo7(){
    let newArr=[];
    for(let i=1; i<=50;i++){
        if(i%2){
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(algo7());
*/
/*
// 8. Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
function algo8(arr, Y){
    let newArr=[];
    for(let i=0; i<arr.length;i++){
        if(arr[i]>Y){
             newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(algo8([1,3,5,7], 3));
*/
/*
// 9. Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
function algo9(arr){
    for(let i=0; i<arr.length;i++){
        arr[i]= Math.pow(arr[i], 2);
    }
    return arr;
}

console.log(algo9([1,5,10,-2]));
*/
/*
// 10. Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]). 
function algo10(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0) arr[i] = 0;
    }
    return arr;
}

console.log(algo10([1,5,10,-2]));
*/
/*
// 11. Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function algo11(arr){
    let max=arr[0];
    let min=arr[0];
    let sum=0;
    let size=arr.length;
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
        if(arr[i]> max){
            max=arr[i];
        } else{
            min=arr[i];
        }
    }
    newArr.push(max, min, sum/size);
    return newArr;
}

console.log(algo11([1,5,10,-2]));
*/
/*
// 12. Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function algo12(arr){
    let last =arr.length-1;
    if(arr.length < 2) console.log(`Error`);
    else{
        let temp=arr[0];
        arr[0] = arr[last];
        arr[last] = temp;
    }
    return arr;
}

console.log(algo12([1,5,10,-2]));
*/
/*
// 13. De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
function algo13(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0) arr[i]="Dojo";
    }
    return arr;
}

console.log(algo13([-1,-3,2]));
*/