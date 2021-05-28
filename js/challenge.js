/*
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let counter = document.getElementById('counter');
let commentForm = document.getElementById('comment-form');
let commentInput = document.getElementById('comment-input');
let submit = document.getElementById('submit');
let list = document.getElementById('list');
///////////////

let count = 0;

setInterval(function(){
  counter.innerText = count;
  count++
}, 1000);

///////////////

plus.addEventListener("click", increment);

function increment() {
  count += 1;
  counter.innerText = count;
}
///////////////

minus.addEventListener("click", decrement);

function decrement() {
  count -= 1;
  counter.innerText = count;
}
///////////////

let arr = [];

heart.addEventListener('click', addLike);

function addLike() {
  let found = false;
  
  if (arr.length === 0) {
    arr.push([count, 1]);
  } else {
  
  for (let i=0; i>arr.length; i++) {
  if (count === arr[i][0]) {
    arr[i][1]++;
    found = true;
    break;
  }
}
}

  console.log(arr);
  console.log(count);
}
*/

let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes = document.getElementsByClassName('likes')[0];
let list = document.getElementById('list');
let commentInput = document.getElementById('comment-input');
let submit = document.getElementById('submit');

let nIntervId;
let i = 0;
let clicked = false;
let arr = [];

counter.addEventListener("load", start());

pause.addEventListener('click', function (){
  if(clicked === false){
    stop();
    clicked = true;
    pause.innerText = "resume";
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
    submit.disabled = true

  }
  else{
    start();
    clicked = false;
    pause.innerText = "pause";
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    submit.disabled = false
  }
});

plus.addEventListener('click', function (){
  i++;
  counter.innerText = i;
});

minus.addEventListener('click', function (){
  i--;
  counter.innerText = i;
});

heart.addEventListener('click', function (){
  let found  = false;
  if(arr.length === 0){
    arr.push([i , 1]);
  }
  else{
    for(let j = 0; j < arr.length ; j++){
      if(arr[j][0] === i){
        arr[j][1]++;
        found = true;
        break;
      }
    }
    if(found === false){
      arr.push([i , 1]);
    }
    updateUI();
  }
  list.innerHTML += `<div> ${commentInput.value} </div>`;
  commentInput.value = "";
});

submit.addEventListener('click', function (e){
  e.preventDefault();
  list.innerHTML += `<div> ${commentInput.value} </div>`;
  commentInput.value = "";
});

    function start() {
      nIntervId = setInterval(increment, 1000);
    }

    function increment() {
             counter.innerText = i;
             console.log(i);
             i++;
             if(i>10){
             }
    }
    function stop() {
       clearInterval(nIntervId);
     }

     function updateUI(){
       likes.innerHTML = " ";
       for(let i=0 ; i < arr.length ; i++){
         likes.innerHTML += `<li>${arr[i][0]} has been liked ${arr[i][1]} times`;
       }
     }