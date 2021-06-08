let c=0,i=0;
var intervalID = setInterval(count , 1000);


let p=document.getElementById('plus');
let n=document.getElementById('minus');
let h=document.getElementById('heart');
let po=document.getElementById('pause');
let likes=document.getElementById('lik');
let form=document.getElementById("comment-form");
let comments=document.getElementById("comment-input");
let showcomment=document.getElementById("co")
let times=0;


function count(){

  p.addEventListener("click", function(){
  document.getElementById("counter").innerHTML = c++;})

  n.addEventListener("click", function(){
  document.getElementById("counter").innerHTML = c--;})
  c++;
  document.getElementById('counter').innerHTML=c;
}


po.addEventListener("click", function(){
clearInterval(intervalID);
po.innerHTML="resume";
})
h.addEventListener("click", function(){
times++;
let li=document.createElement("li");
li.innerHTML=`${c} get ${times} likes`
likes.appendChild(li);
})
form.addEventListener("submit",function(e){
  //alert(`${comments.value}`)
  e.preventDefault();
  let lll=document.createElement("li");
  lll.innerHTML=comments.value;
  co.appendChild(lll)
})
