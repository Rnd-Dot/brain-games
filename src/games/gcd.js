import getRandomNumber from '../utils.js';
import runGame from '../main.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let number1 = a;
  let number2 = b;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return (number1 + number2);
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const answer = String(getGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
};

export default () => runGame(description, generateRound);
