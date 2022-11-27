/* eslint-disable import/extensions, no-console */

import readlineSync from 'readline-sync';

import { name, getRandomInt } from '../index.js';

const getPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const checkPrime = (figure) => {
    const boundary = Math.floor(Math.sqrt(figure));
    for (let i = 2; i <= boundary; i += 1) if (figure % i === 0) return false;
    return figure >= 2;
  };

  const reversAns = (figure) => (checkPrime(figure) ? 'yes' : 'no');
  let j = 0;
  while (j < 3) {
    const figure = getRandomInt(20);
    console.log(`Question: ${figure}`);
    const answer = readlineSync.question('Your answer: ');
    if ((checkPrime(figure) && answer === 'yes') || (!checkPrime(figure) && answer === 'no')) {
      console.log('Correct!');
      j += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${reversAns(figure)}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (j === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getPrime;
