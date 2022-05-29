import getRandomNumber from '../utils.js';
import runGame from '../main.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if given number is even. Otherwise answer "no".';
const generateRound = () => {
  const number = getRandomNumber(0, 25);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

const startBrainEven = () => runGame(description, generateRound);

export default startBrainEven;
