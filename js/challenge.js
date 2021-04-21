document.addEventListener("DOMContentLoaded", () => {

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let heart = document.getElementById('heart');
let pause = document.getElementById("pause");
 let submit = document.getElementById("submit");
let count=0;
let clock = true;

let counter = setInterval(timer, 1000);

        function timer(){
                          if(clock){
document.getElementById("counter").innerHTML = counter  ;
                          counter++;  }
               };



// function increment(){
//   counter++;
// }
//
// function decrement(){
//  counter--;
// }


plus.addEventListener("click", function increase () {
     counter++;
});

minus.addEventListener("click", function decrease () {
     counter--;
});

heart.addEventListener("click",  () => {
    let li = document.getElementsByTagName('li');
let counter = document.getElementById('counter').innerText
 let existed= false;
for(let i = 0; i<li.length;i++){
let arr =li[i].innerText.split(" ");
if (arr[0]===counter)
{existed=true;
arr[4]=parseInt(arr[4])+1;
arr[5]='times.'
li[i].innerText= arr.join(" ");
                     } } if(!existed) {
document.getElementsByClassName("likes")[0].insertAdjacentHTML("beforeend",`<li>${counter} has been liked 1 time.</li>`);}
})


//
pause.addEventListener("click",function(){
  if (clock){
    pause.innerHTML = "resume"
    clock = false
    heart.disabled=true;
    plus.disabled=true;
    minus.disabled=true;
    submit.disabled=true;
  }
  else{
    pause.innerHTML = "pause"
    clock = true;
    heart.disabled=false;
    plus.disabled=false;
    minus.disabled=false;
    submit.disabled=false;
  }

})
let div = document.querySelector("div#list.comments");
 const comments=document.querySelector("input");
 submit.addEventListener ('click',function (e) {
 e.preventDefault()
 let newp=document.createElement("p")
 div.appendChild(newp)
 newp.innerText=comments.value
    comments.value = ""
   ; })
 });
