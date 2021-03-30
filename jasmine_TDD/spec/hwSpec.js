//Ejercicio 1
//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    var sum = 0;
    for(var i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}
//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
     var sum = 0;
     for(var i=0; i<arr.length; i++){
         if(arr[i] === arr[0] || arr[i] === arr[arr.length-1]){
             sum+=arr[i];
         }
     }
     return sum;
}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    });
    it("should return 32640 when we pass 255 as an argument", function(){
        expect(Sum1toN(255)).toEqual(32640);
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    });
    it("should return -15 when we pass [-10,5,25,65,7,2,3,5,6,-5] as an argument", function() {
        expect(sumFirstLast([-10,5,25,65,7,2,3,5,6,-5])).toEqual(-15);
    }); 
});
