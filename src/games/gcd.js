/* eslint-disable import/extensions, no-console */

import readlineSync from 'readline-sync';

import { name, getRandomInt } from '../index.js';

const nod = (x, y) => (!y ? x : nod(y, x % y));

const getGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const x = getRandomInt(50);
    const y = getRandomInt(50);
    const expr = (`${x} ${y}`);
    const findNod = nod(x, y);
    console.log(`Question: ${expr}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === findNod) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${findNod}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getGcd;
