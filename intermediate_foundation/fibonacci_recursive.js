// Fibonacci recursive nth number of
function fiboRecursive(num){
    if((num === 0)||(num === 1)) return num;
    return fiboRecursive(num-2) + fiboRecursive(num-1);
}
console.log(fiboRecursive(8));

//////////////////////////////////////////////////////////


