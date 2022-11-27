/* eslint-disable import/extensions, no-console */

import readlineSync from 'readline-sync';

import { name, getRandomInt } from '../index.js';

const getTypeOfNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const figure = getRandomInt(100);
    console.log(`Question: ${figure}`);
    const answer = readlineSync.question('Your answer: ');
    const reversNum = () => (figure % 2 === 0 ? 'yes' : 'no');
    if ((figure % 2 === 0 && answer === 'yes') || (figure % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${reversNum(figure)}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getTypeOfNumber;
