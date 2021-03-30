function sumMaxMin(numArr){
    var max=numArr[0], min=numArr[0], result=0;;
    if(numArr.length === 1){
        return numArr;
    }
    for(var i=0; i<numArr.length; i++){
        numArr[i]>max ? max=numArr[i] : min=numArr[i];
    }
    result = max + min;
    return result;
}


describe("sumMaxMin", function () {
    it("should return 1 when we pass [1] as an argument", function(){
        expect(sumMaxMin([1])).toEqual([1]);
    });
    it("should return 10 + 1 = 11 when we pass [1,3,10] as an argument", function (){
        expect(sumMaxMin([1,3,10])).toEqual(11);
    });
    it("should return -2 + -10 = -12 when we pass [-2,-5,-10] as an argument", function (){
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12);
    });
    it("should return 50 + 1000 = 1050 when we pass [50,100,150,200,250,300,350,400,450,500,1000] as an argument", function(){
        expect(sumMaxMin([50,100,150,200,250,300,350,400,450,500,1000])).toEqual(1050);
    });
});