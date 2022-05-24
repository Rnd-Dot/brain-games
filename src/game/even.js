import { randomNumber, getDivider } from "../help.js";
import { numberMin, numberMax, gameCondition } from "../conditions.js";
import { playGame } from "../play-game.js";

const logicGame = () => {
    const number = randomNumber(numberMin, numberMax);
    const answer = getDivider(number) ? 'yes' : 'no';
    const question = `Question: ${number}`;

    return [question, answer];
};

const evenPlay = () => {
    playGame (logicGame, gameCondition);
};

export default evenPlay;