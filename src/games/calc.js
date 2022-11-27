/* eslint-disable import/extensions, no-console, no-eval */

import readlineSync from 'readline-sync';

import { name, getRandomInt, getRandomOp } from '../index.js';

const getCalc = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const figure1 = getRandomInt(10);
    const figure2 = getRandomInt(10);
    const operators = ['+', '-', '*'];
    const operType = getRandomOp();
    const oper = operators[operType];
    const expr = (`${figure1} ${oper} ${figure2}`);
    const exprRes = eval(expr);
    console.log(`Question: ${expr}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === exprRes) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${exprRes}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getCalc;
