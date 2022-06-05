import _countBy from 'lodash/countBy';
import _some from 'lodash/some';
import Squares from './Squares';

export const randomIntInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateRandomMatrix = (reels = 3, squares = 5) => {
  let matrix = [];
  for (let r = 0; r < reels; r++) {
    let subMatrix = [];
    for (let s = 0; s < squares; s++) {
      const randInt = randomIntInRange(0, Squares.length - 1);
      subMatrix.push(randInt);
    }
    matrix.push(subMatrix);
  }

  return { list: matrix };
};

export const matrixHas3x = (reels) => {
  return _some(_countBy(reels.list.map(m => m[1])), val => val > 2);
}

export const matrixHas2x = (reels) => {
  return _some(_countBy(reels.list.map(m => m[1])), val => val > 1);
}
