document.addEventListener('DOMContentLoaded',()=>{
let s = 0;
const el = document.getElementById("counter");
function incrementSeconds () {
  s +=1;
  el.innerText = s;
}
let int = setInterval(incrementSeconds,1000);

let pBtn = document.getElementById("plus");
console.log(pBtn)
pBtn.onclick = function (){
  s ++;
  el.innerText = s  ;
  }
let mBtn = document.getElementById("minus");
console.log(mBtn)
mBtn.onclick = function (){
  s --;
  el.innerText = s  ;
  }
let hBtn = document.getElementById("heart");
let likesN = 0;
hBtn.onclick = function() {
  likesN ++;
  let l = document.getElementById("like"); 
  let li = document.createElement("li");
  let st = li.innerText = `${s} was liked ${likesN} times`
  let n = document.createTextNode(s);
  l.appendChild(li)
      };
let paBtn = document.getElementById("pause");
paBtn.addEventListener('click',function a(){
  clearTimeout(int);
  });
pBtn.removeEventListener('click', a)
});



