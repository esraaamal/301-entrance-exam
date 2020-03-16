`use strict` ;


function Myform(hope ,date){
    this.hope =hope ;
    this.date =date;
Myform.log.push(this);
set1();
}



   var myresult=document.getElementById('myresult');
   var sForm= document.getElementById('sForm');
   Myform.log =[];





  function renderss(){

    myresult.textContent ="";
    for(var i=0 ;i<Myform.log.length ;i++){

        var pEl =document.createElement('p');
        myresult.appendChild(pEl);
        pEl.textContent =`${Myform.log[i].hope}`;
        
    }

  }

function set1(){
    var sds=JSON.stringify(Myform.log);
localStorage.setItem('esraa' , sds);
renderss();
}




    

   function submitHandle(event){
       event.preventDefault();
       var formId =document.getElementById('sForm');
       var log=event.target ;
       var hope =log.hope.value;
       var date=log.date.value;
       new logobject(hope,date);
       renderss();
       formId.rest();

   }


sForm.addEventListener('submit',submitHandle);








