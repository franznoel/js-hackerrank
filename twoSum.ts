function twoSum(nums: number[], target: number): number[] {
  const hashTable = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && (nums[i] + nums[j] === target)) {
        return [i, j]
      }
    }
  }
};


console.log(twoSum([1,2,3,4], 7))
