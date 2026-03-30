class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const set = new Set(nums);

    for (let i = 0; i < nums.length; i++) {
      const toFind = target - nums[i];
      console.log(i, toFind, set.has(toFind))
      if (set.has(toFind)) {
        const j = nums.findIndex((value, idx) => value === toFind && idx !== i);
        if (j != -1) return [i, j];
      }
    }
  }
}