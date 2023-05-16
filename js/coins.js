//create coin

let coinElementArr = [];

function createCoins() {
  const coinElement = document.createElement("div");

  coinElement.style.position = "absolute";

  let randomCoinLeft = randomCoin();
  coinElement.style.left = randomCoinLeft + "px";

  coinElement.style.width = COIN_WIDTH + "px";
  coinElement.style.height = COIN_HEIGHT + "px";
  coinElement.style.bottom = "290px";
  coinElement.style.display = "inline-block";

  coinElement.style.background = 'url("./img/coinGold.png")';
  coinElement.style.transform = "scale(0.6)";
  coinElement.style.margin = "0px";

  setTimeout(() => {
    coinElement.remove();
  }, 8000);

  bgElement.appendChild(coinElement);

  coinElementArr.push(coinElement);
}

function randomCoin() {
  let max = BG_WIDTH - COIN_WIDTH * 2;
  let min = COIN_WIDTH;

  let randomNum = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomNum;
}

setInterval(createCoins, 3000);
let getCoinSwitch = false;

function getCoin() {
  coinElementArr.forEach((coinElement) => {
    const coinLeftNum = Number(coinElement.style.left.split("px")[0]);
    const heroLeftNum = Number(heroElement.style.left.split("px")[0]);

    const coinBottomNum = Number(coinElement.style.bottom.split("px")[0]);
    const heroBottomNum = Number(heroElement.style.bottom.split("px")[0]);

    if (
      //coin - hero collision range
      heroBottomNum + HERO_HEIGHT >= coinBottomNum &&
      heroLeftNum >= coinLeftNum - HERO_WIDTH &&
      heroLeftNum + HERO_WIDTH <= coinLeftNum + COIN_WIDTH + HERO_WIDTH
    ) {
      getCoinSwitch = true;

      coinElement.remove();
      coinElementArr = coinElementArr.filter((el) => el !== coinElement);
      const soundEffect = new Audio("./audio/getCoin2.mp3");
      soundEffect.play();
    } else {
      getCoinSwitch = false;
    }

    function coinScore() {
      const coinBox = document.getElementById("coin");
      const coinNum = document.createElement("span");

      let scoreNum = 0;

      if (getCoinSwitch === true) {
        scoreNum++;
      } else {
        return;
      }

      coinNum.textContent = parseInt(scoreNum);
      console.log(scoreNum);

      coinBox.appendChild(coinNum);
    }

    coinScore();
  });
}

setInterval(getCoin, 10);
