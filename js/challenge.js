
let plusBtn = document.querySelector('#plus');
let counterBtn = document.querySelector('#counter');
let minusBtn = document.getElementById("minus");
let heartBtn = document.getElementById("heart");
let playBtn = document.getElementById("pause");
let flag=true;
//counter starts automatically
let seconds = 0;
let myTime = setInterval(incrementSeconds, 1000);
function incrementSeconds() {
if (flag){
    seconds += 1;
    counterBtn.innerText = seconds;
  }
}

//counter stops on click
  /*function stopTimer() {
      clearInterval(myTime)
  }*/
  playBtn.addEventListener("click",pauseEvent)

 function pauseEvent(e){
   flag=false;
   minusBtn.disabled = true;
   plusBtn.disabled = true;
   heartBtn.disabled = true;
      clearInterval(myTime);
      playBtn.innerHTML = "resume";
      playBtn.removeEventListener("click", pauseEvent);
      playBtn.addEventListener("click", resumeEvent);

 function myFunction() {
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    heartBtn.disabled = true;
    document.getElementById("submit").disabled = true;
  }}

  function resumeEvent(e){
    flag=true;
    minusBtn.disabled = false;
    plusBtn.disabled = false;
    heartBtn.disabled =false;
   myTime = setInterval(incrementSeconds, 1000);
      playBtn.innerHTML = "pause";
      playBtn.removeEventListener("click", resumeEvent)
      playBtn.addEventListener("click", pauseEvent);
  }


//increment&decrement manually
plusBtn.addEventListener("click", function(){
  if(flag == true){
  counter += 1;
  counterBtn.innerHTML = parseInt(counterBtn.innerHTML) + 1
}
})

minusBtn.addEventListener("click", function(){
  counter -= 1;
  counterBtn.innerHTML = parseInt(counterBtn.innerHTML) - 1
})

heartBtn.addEventListener("click",heartEvent);  //addEventListener + ID only ID !!
function heartEvent(e){
  let ul = document.getElementById('likes1')
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(`${counterBtn.innerText }has been liked`));
  ul.appendChild(li);
};


//add comments
let comments=document.querySelector("input");
let commentsDisplay= document.querySelector(".comments")
comments.addEventListener("change",addComment);
function addComment(e){
    const newLi = document.createElement('li')
    newLi.innerText = this.value
    commentsDisplay.appendChild(newLi)
};
