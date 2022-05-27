import getRandomNumber from '../random.js';
import runGame from '../main.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if given number is even. Otherwise answer "no".';
const getGameData = () => {
  const number = getRandomNumber(0, 25);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

const brainEven = () => runGame(description, getGameData);

export default brainEven;
