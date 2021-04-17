//creat counter

const myH1 = document.querySelector("h1#counter");
let i = 0;
let interval = setInterval(increment, 1000);
let isRunning = true;
function increment(){
  i += 1;
  myH1.innerText = i;
}

//increment and decrement manually

const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");

minusButton.addEventListener('click', function(e){
  i--;
  myH1.innerText = i;
});

plusButton.addEventListener('click', function(e){
  i++;
  myH1.innerText = i;
});

//lIKE

const likeButton =  document.getElementById("heart");
const likeList =  document.querySelector("ul.likes");
let likes = new Object();

likeButton.addEventListener("click", function(e){
  if(i in likes){
    likes[i] += 1;
    document.getElementById(i).innerText = `${i} has been liked ${likes[i]} times`;
  } else{
    likes[i] = 1;
    likeList.innerHTML += `<li id=${i}>${i} has been liked ${likes[i]} times</li>`;
  }
});

//pause

const pauseButton = document.getElementById("pause");

pauseButton.addEventListener('click', function(e){
  if(isRunning){
    clearInterval(interval);
    isRunning = false;
    minusButton.disabled = true;
    plusButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.innerText = "resume";
  }else{
    interval = setInterval(increment, 1000);
    isRunning = true;
    minusButton.disabled = false;
    plusButton.disabled = false;
    likeButton.disabled = false;
    pauseButton.innerText = "pause";
  }
});


//leave a comment

const comments = document.getElementById("list");
const submitButton= document.getElementById("submit");
const input= document.getElementById("comment-input");


submitButton.addEventListener('click', function(e){
  comments.innerHTML += `<p>${input.value}</p>`;
  e.preventDefault();
});
