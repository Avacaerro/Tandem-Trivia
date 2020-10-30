/* Shuffle array in-place using Fisher-Yates shuffle algorithm */
const shuffle = (arr) => {
  for (let idx = 0; idx < arr.length; idx += 1) {
    let jdx = Math.floor(Math.random() * arr.length);
    [arr[idx], arr[jdx]] = [arr[jdx], arr[idx]];
  }
  return arr;
};

module.exports = shuffle;