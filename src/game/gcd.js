import getRandomNumber from '../conditions.js';
import runGame from '../play.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
    if (a === 0) {
        return b;
    }
    while (b !== 0) {
        if (a > b) {
            a -= b;
        } else { b -= a; }
    }

    return a;
};

const getGameData = () => {
    const num1 = getRandomNumber(0, 100);
    const num2 = getRandomNumber(0, 100);
    const answer = String(gcd(num1, num2));
    const question = `${num1} ${num2}`;
    return [question, answer];
};

export default () => runGame(description, getGameData);
