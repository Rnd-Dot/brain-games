import getRandomNumber from '../conditions.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = (operators) => operators[getRandomNumber(0, operators.length - 1)];

const calculate = (num1, num2, symbol) => {
    switch (symbol) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default: throw new Error('Sorry! This operation is not available.');
    }
};

const getGameData = () => {
    const num1 = getRandomNumber(0, 100);
    const num2 = getRandomNumber(0, 100);
    const randomOperator = getRandomOperator(['+', '-', '*']);
    const answer = String(calculate(num1, num2, randomOperator));
    const question = `${num1} ${randomOperator} ${num2}`;
    return [question, answer];
};

export default () => runGame(description, getGameData);
