let user_score = 0;
let computer_score = 0;

let DOM=document;
let stone = DOM.getElementById('stone');
let scissor = DOM.getElementById('scissor');
let paper = DOM.getElementById('paper');


let options = DOM.getElementById('options');
let result = DOM.getElementById('result');
let userwon = DOM.getElementById('userwin');


let btnrule = DOM.getElementById('btn-rule');
let rulebox = DOM.getElementById('rule-box');
let exitrule = DOM.getElementById('close-rule');


let pcwon = DOM.getElementById('pcwin');
let res1 = DOM.getElementById('winner');

let res2 = DOM.getElementById('res');
let btnagain = DOM.getElementById('playagain');

let labelpc = DOM.getElementById('comptr-score');
let labeluser = DOM.getElementById('user-score');
let humanscr = DOM.getElementById('human-score');
let aiscr = DOM.getElementById('computer-score');


let btnend = DOM.getElementById('endgame');
let reset = DOM.getElementById('resetgame');

btnend.addEventListener('click', () => {
  if (computer_score < user_score) {
    resett();
    window.location.href = '/win.html';
  } else if (computer_score == user_score) {
    alert('TIE UP');
  } else {
    alert('YOU LOST');
  }
});
function resett() {
  localStorage.clear();
  user_score = 0;
  computer_score = 0;
  updateScore();
  reset.style.display = 'none';
}
function updateScore() {
  aiscr.innerText = computer_score;
  humanscr.innerText = user_score;

  localStorage.setItem('pc', Number(computer_score));
  localStorage.setItem('user', Number(user_score));
}

stone.addEventListener('click', () => {
  stonepicked();
  componentonclick();
  updateScore();
});

scissor.addEventListener('click', () => {
  scissorpicked();
  componentonclick();
  updateScore();
});

paper.addEventListener('click', () => {
  paperpicked();
  componentonclick();
  updateScore();
});

btnagain.addEventListener('click', () => {
  result.style.display = 'none';
  options.style.display = 'flex';
  labelpc.classList.remove('stone');
  labelpc.classList.remove('paper');
  labelpc.classList.remove('scissor');
  labeluser.classList.remove('stone');
  labeluser.classList.remove('paper');
  labeluser.classList.remove('scissor');
});

function componentonclick() {
  options.style.display = 'none';
  result.style.display = 'flex';
  if (computer_score || user_score) {
    reset.style.display = '';
  } else {
    reset.style.display = 'none';
  }
}

function userwins() {
  user_score += 1;
  userwon.style.display = 'flex';
  pcwon.style.display = 'none';
  btnagain.innerText = 'PLAY AGAIN';
  res2.innerText = 'AGAINST PC';
  res1.innerText = 'YOU WIN';
}
function pcwins() {
  computer_score += 1;
  userwon.style.display = 'none';
  pcwon.style.display = 'flex';
  btnagain.innerText = 'PLAY AGAIN';
  res2.innerText = 'AGAINST PC';
  res1.innerText = 'YOU LOST';
}
function tie() {
  userwon.style.display = 'none';
  pcwon.style.display = 'none';
  res1.innerText = 'TIE UP';
  res2.innerText = '';
  btnagain.innerText = 'REPLAY';
}
function RuleFunction() {
  if (rulebox.style.display === 'none') {
    rulebox.style.display = 'flex';
  } else {
    rulebox.style.display = 'none';
  }
}

exitrule.addEventListener('click', () => {
  rulebox.style.display = 'none';
});
function stonepicked() {
  labeluser.classList.add('stone');
  console.log('stone');
  pcpicked = randompicker();
  if (pcpicked === 0) {
    console.log('Tie');
    labelpc.classList.add('stone');
    tie();
  } else if (pcpicked === 1) {
    labelpc.classList.add('scissor');
    console.log('user wins');
    userwins();
  } else {
    console.log('pc wins');
    labelpc.classList.add('paper');
    pcwins();
  }
}
function scissorpicked() {
  labeluser.classList.add('scissor');
  console.log('scissor');
  pcpicked = randompicker();
  if (pcpicked === 0) {
    console.log('pc wins');
    labelpc.classList.add('stone');
    pcwins();
  } else if (pcpicked === 1) {
    console.log('tie');
    labelpc.classList.add('scissor');
    tie();
  } else {
    console.log('user wins');
    labelpc.classList.add('paper');
    userwins();
  }
}
function paperpicked() {
  labeluser.classList.add('paper');
  console.log('paper');
  pcpicked = randompicker();
  if (pcpicked === 0) {
    console.log('user wins');
    labelpc.classList.add('stone');
    userwins();
  } else if (pcpicked === 1) {
    console.log('pc wins');
    labelpc.classList.add('scissor');
    pcwins();
  } else {
    console.log('tie');
    labelpc.classList.add('paper');
    tie();
  }
}

function randompicker() {
  let ai = Math.floor(Math.random() * 3);
  if (ai === 1) {
    console.log('pc:scissor');
  } else if (ai === 0) {
    console.log('pc:stone');
  } else {
    console.log('pc:paper');
  }
  return ai;
}

reset.addEventListener('click', resett);

reset.style.display = 'none';

if (localStorage.getItem('pc')) {
  computer_score = Number(localStorage.getItem('pc'));
  aiscr.innerText = computer_score;
  reset.style.display = '';
}
if (localStorage.getItem('user')) {
  user_score = Number(localStorage.getItem('user'));
  humanscr.innerText = user_score;
  reset.style.display = '';
}
