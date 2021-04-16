document.addEventListener("DOMContentLoaded", () => {
//Timer
let timer = window.setInterval(timerFunc,1000);
//let counter = 0;
function timerFunc()
{
  let counter = parseInt(document.getElementById("counter").innerText);
  counter++;
  document.getElementById("counter").innerText = `${counter}`;
}

// Pause button
document.getElementById("pause").addEventListener("click",(e) => {
  const btns = document.getElementsByTagName("button");
  if(e.target.innerText === "pause")
  {
    clearInterval(timer);
    e.target.innerText = "resume";
    for(let i=0; i<btns.length;i++)
    {
      if(btns[i].innerText !== "resume")
      {
        btns[i].disabled = true;
      }
    }
  }
  else {
    e.target.innerText = "pause";
    timer = window.setInterval(timerFunc,1000);
    for(let i=0; i<btns.length;i++)
    {
      if(btns[i].innerText !== "pause")
      {
        btns[i].disabled = false;
      }
    }
  }
});

// Plus button
document.getElementById("plus").addEventListener("click", () => {
  let counter = parseInt(document.getElementById("counter").innerText);
  counter++;
  document.getElementById("counter").innerText = `${counter}`;
});

// Minus button
document.getElementById("minus").addEventListener("click", () => {
  let counter = parseInt(document.getElementById("counter").innerText);
  counter--;
  document.getElementById("counter").innerText = `${counter}`;
});

// Heart button
document.getElementById("heart").addEventListener("click", () => {
  const counter = document.getElementById("counter").innerText;
  const li = document.getElementsByTagName("li");
  let existed = false;
  for(let i=0;i<li.length;i++)
  {
    let arr = li[i].innerText.split(" ");
    if(arr[0] === counter)
    {
      existed = true;
      arr[4] = parseInt(arr[4]) + 1;
      arr[5] = 'times.';
      li[i].innerText = arr.join(" ");
    }
  }
  if(!existed)
  {
    document.getElementsByClassName("likes")[0].insertAdjacentHTML("beforeend",`<li>${counter} has been liked 1 time.</li>`);
  }
});

// Comments
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const comment = document.getElementById("comment-input").value;
  document.getElementById("list").insertAdjacentHTML("beforeend",`<p>${comment}</p>`);
  document.getElementById("comment-input").value = "";
});

});
