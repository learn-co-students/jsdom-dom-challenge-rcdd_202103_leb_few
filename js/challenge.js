"use strict"; // fires when the initial HTML document has been completely loaded
let pause;
const timer=function(){
    return setInterval(function(){
    pause=0;
    const counter=document.getElementById("counter");
    const countIn = parseInt(counter.innerText);
    counter.innerText=countIn + 1;
},1000)}
  let interval=timer();

//-----------------------------------------------
const minus=document.getElementById("minus");

minus.addEventListener("click",function(){
  const counter=document.getElementById("counter");
  const tmp=parseInt(counter.innerText);
  counter.innerText=tmp-1;
});

//-----------------------------------------------
const plus=document.getElementById("plus");
plus.addEventListener("click",function(){
  const counter=document.getElementById("counter");
  const tmp=parseInt(counter.innerText);
  counter.innerText=tmp+1;
});

//-----------------------------------------------
const heart=document.getElementById("heart");

heart.addEventListener("click",function(){
  const counter= parseInt(document.getElementById("counter").innerText);
  const likes=document.querySelector(".likes");
  let li = document.createElement('li');
     li.textContent = `${counter}  has been liked`;
     likes.appendChild(li);
})
//-----------------------------------------------

const pausebtn=document.getElementById("pause");

pausebtn.addEventListener("click",function(){
  if(pause==0){
    clearInterval(interval);
    pausebtn.innerText="resume";
  }
  else{
    interval=timer();
    pausebtn.innerText="pause";
  }
  pause=1;
});
//-----------------------------------------------
const commentForm=document.getElementById("comment-form");

commentForm.addEventListener("submit",function(event){
    event.preventDefault();
    const commentsSection = document.querySelector(".comments");
    const commentAdded = document.createElement("p");
    const commentInput = document.getElementById("comment-input");
    commentAdded.innerText=commentInput.value;
    commentsSection.appendChild(commentAdded);
    commentInput.value=" ";
});
