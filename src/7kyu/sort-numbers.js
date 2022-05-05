function solution(nums) {
  return !nums ? [] : nums.sort((x, y) => x - y);
}

module.exports = solution;
