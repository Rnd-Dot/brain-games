import getRandomNumber from '../random.js';
import runGame from '../main.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  if (num1 === 0) {
    return num2;
  }
  while (num2 !== 0) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const getGameData = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const answer = String(gcd(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, answer];
};

export default () => runGame(description, getGameData);
