import getRandomNumber from '../random.js';
import runGame from '../main.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getGameData = () => {
  const number = getRandomNumber(0, 50);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

export default () => runGame(description, getGameData);
