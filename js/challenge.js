let counter=document.querySelector("#counter");
let buttons=document.querySelectorAll('button');
let pause=document.querySelector('#pause');
const addButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const likeButton = document.querySelector('#heart');
const comments = document.querySelector('h3');
let ul = document.querySelector('ul');
let form = document.querySelector('form')
const like = document.querySelector(".likes");
const submitButton = document.querySelector('#submit');


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

function disableButtons() {
 buttons.forEach(button => {
  console.log(button.id)
   if(button.id!="pause" ){
   button.disabled=true}
  });
}

function enableButtons() {
  buttons.forEach(button => {
    button.disabled=false;
   });
 }

pause.addEventListener('click',()=>{
  if (pause.innerHTML === ' pause '){
    clearInterval(intervalID)
    disableButtons()
    pause.innerHTML = 'resume'
}else {
  intervalID=setInterval(valueCount,1000),
    pause.innerHTML = 'pause'
    enableButtons()
}

})
    
function likeComment() {
  const newLike = document.createElement("ul");
  const liLike = document.createElement("li");
  const current = counter.innerText;
  if(current === counter.innerText) {
    like.append(newLike);
    newLike.append(liLike);
    liLike.innerHTML = `${current} has been liked`;
  }
}



function addComments(user) {
  let p = document.createElement('p');
  p.textContent = user
  comments.appendChild(p)
}

addButton.addEventListener('click', () => {
  valueCount();
});

minusButton.addEventListener('click', () => {
  decrementCounter()
});

likeButton.addEventListener('click', () => {
  likeComment()
})

form.addEventListener('submit', (e) => {
e.preventDefault()
addComments(e.target.comment.value)
form.reset()
})