const heroSpeed = 5;
const heroJumpSpeed = 10;
let jumpSwitch = false;

//hero left 가 왜 hero 이미지의 가운데가 잡혀있지? 체크하기

//hero move
document.addEventListener("keydown", function heroIsMoving(e) {
  const heroLeft = getComputedStyle(heroElement).left;
  const heroLeftNum = Number(heroLeft.split("px")[0]);

  //walk
  if (e.keyCode === 37 && heroLeftNum > 55 && !jumpSwitch) {
    heroElement.style.left = heroLeftNum - heroSpeed + "px";
    heroElement.classList = "left";
  } else if (e.keyCode === 39 && heroLeftNum < BG_WIDTH - 55 && !jumpSwitch) {
    heroElement.style.left = heroLeftNum + heroSpeed + "px";
    heroElement.classList = "right";
  }

  //jump
  if (e.keyCode === 90 && !jumpSwitch) {
    heroElement.classList = "jump";
    jumpSwitch = true;
    const jumpHeight = 16;
    const jumpDuration = 1000;
    const jumpStart = performance.now();

    function jump(currentTime) {
      const jumpTime = currentTime - jumpStart;
      const progress = Math.min(jumpTime / jumpDuration, 1);
      const jumpDistance = jumpHeight * (-Math.pow(progress, 2) + progress);
      const heroBottomNum = Number(
        getComputedStyle(heroElement).bottom.split("px")[0]
      );

      heroElement.style.bottom = `${heroBottomNum + jumpDistance}px`;

      if (progress < 0.5) {
        requestAnimationFrame(jump);
      } else {
        heroElement.style.bottom = `${heroBottomNum - jumpDistance}px`;

        if (progress < 1) {
          requestAnimationFrame(jump);
        } else {
          jumpSwitch = false;
          heroElement.classList.remove("jump");

          const landSoundEffect = new Audio("./audio/land.ogg");
          landSoundEffect.play();
        }
      }
    }

    requestAnimationFrame(jump);
    //jump Sound Effect
    const soundEffect = new Audio("./audio/jump.ogg");
    soundEffect.play();
  }

  // setTimeout(resetJumpSwitch, 1500);

  //jumpAttack
  if (e.keyCode === 88 && !jumpSwitch) {
    const heroBottom = getComputedStyle(heroElement).bottom;

    heroElement.classList = "jumpAttack";
    jumpSwitch = true;
    const jumpHeight = 16;
    const jumpDuration = 1000;
    const jumpStart = performance.now();

    function jump(currentTime) {
      const jumpTime = currentTime - jumpStart;
      const progress = Math.min(jumpTime / jumpDuration, 1);
      const jumpDistance = jumpHeight * (-Math.pow(progress, 2) + progress);
      const heroBottomNum = Number(
        getComputedStyle(heroElement).bottom.split("px")[0]
      );

      heroElement.style.bottom = `${heroBottomNum + jumpDistance}px`;

      if (progress < 0.5) {
        requestAnimationFrame(jump);
      } else {
        heroElement.style.bottom = `${heroBottomNum - jumpDistance}px`;

        if (progress < 1) {
          requestAnimationFrame(jump);
        } else {
          jumpSwitch = false;
          heroElement.classList.remove("jumpAttack");

          const landSoundEffect = new Audio("./audio/land.ogg");
          landSoundEffect.play();
        }
      }
    }

    requestAnimationFrame(jump);
    //jump Sound Effect
    const soundEffect = new Audio("./audio/jump.ogg");
    soundEffect.play();
  }

  //attack
  if (e.keyCode === 67 && !jumpSwitch) {
    heroElement.classList = "attack";

    //attack Sound Effect
    const soundEffect = new Audio("./audio/attack.mp3");
    soundEffect.play();
  }
});

function resetJumpSwitch() {
  jumpSwitch = false;
  heroElement.classList.remove("jumpAttack");
  heroElement.classList.remove("jumpAttack");
}

document.addEventListener("keyup", function (e) {
  if (
    (e.keyCode === 37 ||
      e.keyCode === 39 ||
      e.keyCode === 67 ||
      e.keyCode === 88) &&
    !jumpSwitch
  )
    heroElement.className = "stop";
});
