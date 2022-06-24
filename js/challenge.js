let counter=document.querySelector("#counter");
let buttons=document.querySelectorAll('button');
let pause=document.querySelector('#pause');
let isPlaying = true;


let count=0;
let intervalID;

function valueCount() {
    count++;
    counter.innerHTML=count;
   
}


function decrementCounter() {
  let counterVal = parseInt(counter.innerText);
  counter.innerText = (counterVal - 1).toString();
}



document.addEventListener('DOMContentLoaded',()=>{
intervalID=setInterval(valueCount,1000);
})


pause.addEventListener('click',()=>{
if(pause.innerHTML==="resume"){
  buttons.forEach(button=>{
    button.setAttribute("disabled",true)
    } )
}})



if (pause.innerHTML==='') {
  
  setInterval(() => valueCount,1000);
}
else if(pause.innerHTML==='resume') {
  clearInterval(intervalID);
  
}


