// randomInteger.js

// const getRandomInteger = require('./utils/MathHelper.js');
function getRandomInteger(min, max) {
    if (min > max) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  module.exports = getRandomInteger;
  