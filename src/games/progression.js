/* eslint-disable import/extensions, no-console, no-return-assign */

import readlineSync from 'readline-sync';

import { name, getRandomInt, getRandTwo } from '../index.js';

const getArPr = () => {
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const x = getRandomInt(20);
    const seqLength = getRandTwo(4, 9);
    const d = getRandTwo(1, 5);
    const y = x + d * seqLength;
    const seqArr = [];
    for (let j = x; j <= y; j += d) {
      seqArr.push(j);
    }
    const randElemInt = getRandTwo(0, (seqArr.length - 1));
    const randElem = seqArr[randElemInt];
    const hidedArr = seqArr;
    hidedArr[randElemInt] = '..';
    let hidRand = '';
    hidedArr.map((it) => hidRand += `${it} `);
    console.log(`Question: ${hidRand}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === randElem) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${randElem}'.\n Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getArPr;
