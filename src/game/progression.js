import getRandomNumber from '../random.js';
import runGame from '../main.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, difference, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        const num = start + difference * i;
        progression.push(num);
    }
    return progression;
};

const getGameData = () => {
    const startProgression = getRandomNumber(0, 100);
    const lengthProgression = getRandomNumber(5, 10);
    const diffProgression = getRandomNumber(2, 6);
    const unknownNumber = getRandomNumber(0, lengthProgression - 1);
    const progression = getProgression(startProgression, diffProgression, lengthProgression);
    const answer = progression[unknownNumber];
    progression[unknownNumber] = '..';
    const question = `${progression.join(' ')}`;
    return [question, String(answer)];
};

export default () => runGame(description, getGameData);
