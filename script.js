const btn = document.querySelector('button');
const main = document.querySelector('main');
const overlay =document.querySelector('#overlay');
const timer = document.querySelector('#timer');
const scoree = document.querySelector('#score');
const finalScore = document.querySelector("#finalScore");
const restartBtn = document.querySelector("#restartBtn");


const box = document.createElement('div');
box.classList.add('box');

let interval;
let time = 0;
let score = 0;

const randomColor = ()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}
const randomBox = ()=>{
  box.style.backgroundColor = randomColor();
  main.append(box);
  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  const rY = Math.random() * mainH;
  const rX = Math.random() * mainW;
  
  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

function startGame() {
  time = 0;
  score = 0;

  timer.textContent = time;
  scoree.textContent = score;

  overlay.style.display = "none";

  randomBox();

  interval = setInterval(() => {
    randomBox();

    time++;
    timer.textContent = time;

    if (time >= 20) {
      clearInterval(interval);
      finalScore.textContent = score;
      overlay.style.display = "flex";
    }
  }, 1000);

  setTimeout(() =>{
    clearInterval(interval);
     overlay.style.display = 'flex';
   },20000);

   btn.style.display = "none";
}

btn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

box.addEventListener("click", () =>{
    score += 1;
    scoree.textContent = score;
});

