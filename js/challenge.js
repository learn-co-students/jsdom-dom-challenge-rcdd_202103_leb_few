document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM has loaded");
});

//increment by 1 every second

let isPaused=false;

setInterval(start, 1000)


let i = 1;
function start() {
    if (i < Infinity) {
      counter.innerText = i;
      i++;
    }
}

plus.addEventListener("click",() =>{
  start();
})

minus.addEventListener("click",() => {
   if (i > 0) {
      counter.innerText = i;
      i--;
    }
})

let arrayOfNum=[1, 5, 6, 1, 8 ,9, 1, 5, 9];

function countDup(arrayOfNum,num){
  let result=0;
  for (let k=0; k<arrayOfNum.length; k++){
    if(arrayOfNum[k] === num){
      result++;
    }
  }
  return result;
}

heart.addEventListener("click", () => {
  arrayOfNum.push(counter.innerText);
  j=countDup(arrayOfNum,counter.innerText);
  let like = `${counter.innerText} has been liked ${j} times!`
  let li=document.createElement("li");
  li.innerText = like;
  list.appendChild(li);
})

pause.addEventListener("click", ()=>
{
  if (pause.innerText === "pause"){
    pause.innerText= "resume";
  }
  else{
    pause.innerText= "pause"
  }
})


submit.addEventListener("submit", (e) => {
  e.preventDefault()
  let inp = document.getElementById("comment-input").value;
  let com = document.createElement("P");
  com.textContent = `${inp}`;
  document.getElementById("list").appendChild(com);
})

