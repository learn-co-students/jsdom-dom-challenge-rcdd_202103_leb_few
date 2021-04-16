var seconds = 0;
var el = document.getElementById("counter");

function incrementSeconds() {
  seconds += 1;
  el.innerText = seconds;
}
var cancel = setInterval(incrementSeconds, 1000);

const minus = document.getElementById("minus");
minus.addEventListener("click", function (e) {
  el.innerText = seconds - 1;
});

const plus = document.getElementById("plus");
plus.addEventListener("click", function (e) {
  el.innerText = seconds + 1;
});
const val = el.value;
const likes = document.getElementsByClassName("likes");
const heart = document.getElementById("heart");
heart.addEventListener("click", function (e) {
  likes.innerHTML += `<li> ${val} has been liked</li>`;
});
