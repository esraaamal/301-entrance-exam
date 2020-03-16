`use strict`;

var newArr =[1,2,3,4,5];

function greaterThan(a){
    var a =a ;
    var count=0;
for(var i=0 ; i< newArr.length ;i++){

if(newArr[i] >a){

    count++ ;
}

}
document.getElementById('showResult').innerHTML=`${count}`;

}

greaterThan(2);