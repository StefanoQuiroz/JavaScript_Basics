// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
function bigSize(numArr){
    for(var i=0; i<numArr.length; i++){
        if (numArr[i]>0) numArr[i] = "big";
    }
    return numArr;
}
// var a = [-1,3,5,-5];
// console.log(bigSize(a));
// Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function algo2(numArr){
    var max=numArr[0], min=numArr[0];
    for(var i=0; i<numArr.length; i++){
        if(numArr[i]<min) min = numArr[i];
        else max = numArr[i];
    }
    console.log(min);
    return max;
}

//console.log(algo2([1,2,3,4,5]));
// Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
function algo3(numArr){
    console.log(numArr[numArr.length-2]);
    for(var i=0; i<numArr.length; i++){
        if(numArr[i]%2){
            return numArr[i];
        }
    }
}
//console.log(algo3([2,3,4,5,6]));
// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
function double(numArr){
    var newArr = [];
    for(var i=0; i<numArr.length; i++){
        newArr.push(numArr[i]*2);
    }
    return newArr;
}
//console.log(double([1,2,3]));
// Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
function countPositives(numArr){
    var count=0;
    for(var i=0; i<numArr.length;i++){
        if(numArr[i]>0) count++;
    }
    numArr.pop();
    numArr.push(count);
    return numArr;
}

//console.log(countPositives([-1,1,1,1]));
// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
function oddEven(numArr){
    var countOdd = 0, countEven = 0;
    for(var i=0; i<numArr.length; i++){
        if(!(numArr[i]%2)){
            countOdd++;
            countEven = 0;
        } else {
            countEven++;
            countOdd = 0;
        }
        if(countOdd == 3){
            countOdd = 0;
            console.log(`¡Qué imparcial!`);
        } else if(countEven == 3){
            countEven = 0;
            console.log(`¡Es para bien!`)
        }
    }
}
// oddEven([2,3,3,4,5,6,7,7,7]);
// Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 
function incrementSeconds(numArr){
    for(var i=0;i<numArr.length; i++){
        if(i%2){
            console.log(numArr[i])
            numArr[i]=1;
        }
    }
    return numArr;
}

//console.log(incrementSeconds([2,3,4,5,6]));
// Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function previousLengths(numArr){
    var newArr = [];
    for(var i=0; i<numArr.length-1; i++){
        if(i==0){
            newArr.push(numArr[i], numArr[i].length);
        } else {
            newArr.push(numArr[i].length);
        }
    }
    return newArr;
}

//console.log(previousLengths(["programar","dojo", "genial"]));
// Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
function addSeven(numArr){
    var newArr = [];
    for(var i=0; i<numArr.length; i++){
        newArr.push(numArr[i]+7);
    }
    return newArr;
}

//console.log(addSeven([1,2,3]));
// Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
function reverse(numArr){
    var middle = Math.floor(numArr.length/2);
    for(var i=0, j=numArr.length-1; i<middle || j>=middle; i++, j--){
        var temp = numArr[i];
        numArr[i]=numArr[j];
        numArr[j]=temp;        
    }
    return numArr;
}

//console.log(reverse([3,1,6,4,2]));
// Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function negativePerspective(numArr){
    var newArr=[];
    for(var i=0; i<numArr.length; i++){
        if(numArr[i]>0) newArr.push(numArr[i]*-1);
        else newArr.push(numArr[i]);
    }
    return newArr;
}

//console.log(negativePerspective([1,-3,5]));
// Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function alwaysHungry(numArr){
    for(var i=0; i<numArr.length; i++){
        if(numArr[i]==="comida") console.log("yummy");
        else console.log("tengo hambre");
    }
}

//alwaysHungry(["comida", "nada", "comida"]);
// Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
function shiftToTheCenter(numArr){
    var temp = numArr[0];
    numArr[0] = numArr[numArr.length - 1];
    numArr[numArr.length - 1] = temp;
    return numArr;
}

// console.log(shiftToTheCenter([true, 42, "Ada", 2, "pizza"]));
// console.log(shiftToTheCenter([1,2,3,4,5,6]));
// Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
function scaleArray(numArr, num){
    for(var i=0; i<numArr.length; i++){
        numArr[i] = numArr[i]*num;
    }
    return numArr;
}

console.log(scaleArray([1,2,3], 3));