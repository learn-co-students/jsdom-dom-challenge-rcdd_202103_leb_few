let counter = document.getElementById("counter");
let heart = document.getElementById("heart");
let increase = document.getElementById("plus");
let decrease = document.getElementById("minus");
let pause = document.getElementById("pause");
let ul = document.getElementsByClassName("likes");

// UPDATE THE COUNTER
let setTime = 0;
let clear;
   function countTime () {
     setTime ++;
     counter.innerHTML = setTime;
   }

  clear = setInterval(countTime, 1000);


// INCREASE and Decrease THE COUNTER WHEN PREES ON PLUS BUTTON



  increase.addEventListener('click', () => {
      counter.innerHTML = setTime ++ ;
  });

  decrease.addEventListener('click', () => {
      counter.innerHTML = setTime -- ;
  });


/// Like
  heart.addEventListener('click', function() {
    ul.insertAdjacentHTML('beforeend', `<li >❤️</li>` )
  })

  pause.addEventListener('click' , function() {
     clearInterval(clear);
  })
