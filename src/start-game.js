import readlineSync from 'readline-sync';

const startGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const playersName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playersName}`);
  console.log(gameDescription);

  const numberOfCorrectAnswersToWin = 3;

  for (let i = 0; i < numberOfCorrectAnswersToWin; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const playersAnswer = readlineSync.question('Your answer: ');

    const correctAnswerResponse = 'Correct!';
    const incorrectAnswerResponse = `${playersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${playersName}!`;

    const correctAnswerString = String(correctAnswer);

    if (playersAnswer !== correctAnswerString) {
      console.log(incorrectAnswerResponse);
      break;
    }
    console.log(correctAnswerResponse);

    if (i === numberOfCorrectAnswersToWin - 1) console.log(`Congratulations, ${playersName}!`);
  }
};

export default startGame;
