`use strict` ;
document.getElementById('close').addEventListener("click", function(){

document.getElementById('myresult').style.display ='none';




})

function Myform(hope ,date){
    this.hope =hope ;
    this.date =date;
Myform.log.push(this);
// set1();
}



   var myresult=document.getElementById('myresult');
   var sForm= document.getElementById('sForm');
   Myform.log =[];
console.log(Myform.log);




  function renderss(){

    myresult.textContent ="";
    for(var i=0 ;i<Myform.log.length ;i++){
        var olEl =document.createElement('ol');
        myresult.appendChild(olEl);
        var liEl =document.createElement('li');
        liEl.textContent =`${i}-${Myform.log[i].hope}`;
        olEl.appendChild(liEl);
        var liEl2 =document.createElement('li');
        liEl2.textContent =`${Myform.log[i].date}`;
        olEl.appendChild(liEl2);
       
        
        
    }

  }

function set1(){
    var sds=JSON.stringify(Myform.log);
localStorage.setItem('esraa' , sds);

}

function get1(){
    var esraa =localStorage.getItem('esraa');
    Myform.log=JSON.parse(esraa);
    renderss();
}



    

   function submitHandle(event){
       event.preventDefault();
       var formId =document.getElementById('sForm');
       var log=event.target ;
       var hope =log.hope.value;
       var date=log.date.value;
       new Myform(hope,date);
       set1();
       renderss();
       formId.rest();

   }


sForm.addEventListener('submit',submitHandle);

get1();






