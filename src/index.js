module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else {
    for (let i = 0; i <matrix.length; i++) {
      if ((i + 1) % 2 === 0) {
        matrix[i].reverse();
      }
    }

    let result = matrix.flat(Infinity);
    return result;
  }
};
