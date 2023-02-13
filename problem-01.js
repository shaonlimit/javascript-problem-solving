// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

const countOdds = function (low, high) {
  let count = 0;
  for (i = low; i <= high; i++) {
    if (i % 2 != 0) count = count + 1;
  }
  return count;
};

const result = countOdds(10, 85);
console.log(result);
