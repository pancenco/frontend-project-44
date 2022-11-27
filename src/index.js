/* eslint-disable import/extensions, no-console */

import readlineSync from 'readline-sync';

const name = readlineSync.question(
  'Welcome to the Brain Games!\nMay I have your name? ',
);

console.log(`Hello, ${name}!`);

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandTwo = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const getRandomOp = () => Math.floor(Math.random() * 3);

export {
  name, getRandomInt, getRandTwo, getRandomOp,
};
