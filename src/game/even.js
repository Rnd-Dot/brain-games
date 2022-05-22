import startGame from '../start-game.js';
import randomNumbers from '../random-numbers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const minNumberToShow = 1;
  const maxNumberToShow = 100;

  const numberToShow = randomNumbers(minNumberToShow, maxNumberToShow);
  const correctAnswer = numberToShow % 2 === 0 ? 'yes' : 'no';

  return [numberToShow, correctAnswer];
};

const brainEven = () => startGame(gameDescription, generateRound);
export default brainEven;
