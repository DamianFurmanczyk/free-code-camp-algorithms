// https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

(function challage1() {
  const sumAll = nums => {
    let result = 0;

    for (let i = Math.min(...nums); i <= Math.max(...nums); i++) {
      result += i;
    }

    return result;
  };

  const result = sumAll([1, 4]);
  // console.log(result);
})();

// https://www.freecodecamp.org/challenges/diff-two-arrays
(function challenge2() {
  const diff = (arr1, arr2) => {
    // .includes polyfill? ok

    const diff1 = arr1.filter(record => arr2.indexOf(record) === -1);
    const diff2 = arr2.filter(record => arr1.indexOf(record) === -1);

    return [...diff1, ...diff2];
  };

  const result = diff([1, 2, 4, 3], [1, 3, 6]);
  console.log(result);
})();
