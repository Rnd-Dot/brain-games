import getRandomNumber from '../utils.js';
import runGame from '../main.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default: throw new Error(`Sorry! This operation - ${symbol} is not available, use (+ , - or *)`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operators = ['+', '-', '*'];
  const getRandomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const answer = String(calculate(number1, number2, getRandomOperator));
  const question = `${number1} ${getRandomOperator} ${number2}`;
  return [question, answer];
};

export default () => runGame(description, generateRound);
