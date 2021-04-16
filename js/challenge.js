let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let likes = document.getElementsByClassName('likes')[0];
let pause = document.getElementById('pause');
let submit = document.getElementById('submit');
let commentInput = document.getElementById('comment-input');
let comments = document.getElementsByClassName('comments')[0];
//incriment by 1 every second
let a = setTimeout(start, 5000);
let i = 1;
counter.innerText = i;
function start() {
  setInterval(increase, 1000);
}

function increase() {
    if (i < Infinity) {
      counter.innerText = i;
      i++;
    }
}

// use plus and minus
plus.addEventListener('click', function(e){
  counter.innerText = `${parseInt(counter.innerText) + 1}`;
  i = parseInt(counter.innerText);
});

minus.addEventListener('click', function(e){
  counter.innerText = `${parseInt(counter.innerText) - 1}`;
  i = parseInt(counter.innerText);
});

//add likes
heart.addEventListener('click',function(e){
  likes.innerHTML += `<li>${counter.innerText} liked your post!</li>`
})

//pause
pause.addEventListener('click',function(e){
  if (pause.innerText === "pause"){
      pause.innerText = "resume";
      clearInterval(a);
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
  } else {
    pause.innerText = "pause";
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
  }
})

//add comments
submit.addEventListener('click',function(e){
  comments.innerHTML += `${commentInput.value}<br>`;
  event.preventDefault();
})
