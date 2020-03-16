`use strict`;

var newArr =[1,2,3,4];

function greaterThan(a){
    var a =a ;
    var count=0;
    
for(var i=0 ; i< newArr.length ;i++){

if(newArr[i] >a){

    count++ ;
}

}
var msg =`the number of number that are greater than ${a} is:`
return[ msg , count];

}

greaterThan(2);
console.log(greaterThan(2));
