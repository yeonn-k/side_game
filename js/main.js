const BG_WIDTH = 1400;
const BG_HEIGHT = 550;

const HERO_WIDTH = 128;
const HERO_HEIGHT = 138;

const COIN_WIDTH = 64;
const COIN_HEIGHT = 64;

const JUMP_HEIGHT = 350;

//객체 가져오기 ~~Element
const heroElement = document.getElementById("hero");
const bgElement = document.getElementById("bg");
const scoreElement = document.getElementById("scoreNumber");
const heartBox = document.getElementById("hearts");
const startBtn = document.getElementById("startBtn");

//enemy setting

//background Music Switch - Enter
let soundSwitch = false;
const soundEffect = new Audio("./audio/game-music-loop-7-145285.mp3");

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13 && !soundSwitch) {
    soundSwitch = true;
    soundEffect.play();
    soundEffect.loop = true;
  } else if (e.keyCode === 13 && soundSwitch) {
    soundEffect.pause();
    soundSwitch = false;
  }
});
