//enemy 생성

let enemyElementArr = [];

const enemyElement = document.createElement("div");

enemyElement.appendChild("randomEnemyElement");

let randomEnemyArr = [
  enemyBee,
  enemyWingMan,
  enemyMouse,
  enemyslimeBlue,
  enemysnail,
];

function createEnemy() {
  let randomEnemy = randomNum();

  let randomEnemyElement = randomEnemyArr[randomEnemy];

  bgElement.appendChild(enemyElement);
  enemyElement.appendChild(randomEnemyElement);

  enemyElementArr.push(randomEnemyElement);
}

setInterval(createEnemy, 3000);

function randomNum() {
  let max = 4;
  let min = 0;
  let randomNum = Math.floor(Math.random() * (max + 1 - min) + min);

  return randomNum;
}
