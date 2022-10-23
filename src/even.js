/* eslint-disable import/extensions, no-console */

import readlineSync from 'readline-sync';

const name = readlineSync.question(
  'Welcome to the Brain Games!\nMay I have your name? ',
);

console.log(`Hello, ${name}!`);

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getTypeOfNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const figure = getRandomInt(100);
    console.log(`Question: ${figure}`);
    const answer = readlineSync.question('Your answer: ');
    const reversNum = (figure) => (figure % 2 === 0 ? 'yes' : 'no');
    if ((figure % 2 === 0 && answer === 'yes') || (figure % 2 !== 0 && answer === 'no')) {
      console.log(`Your answer: ${answer}\nCorrect!`);
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${reversNum(figure)}'.\nLet's try again, ${name}!`);
      break;
    }
    /* } if (figure % 2 === 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    } if (figure % 2 !== 0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    } */
    console.log(`Congratulations, ${name}!`);
  }
};

export default getTypeOfNumber;
