class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length === 0) return [];

        const prefixProds = new Array(nums.length).fill(1);
        const postfixProds = new Array(nums.length).fill(1);
        const ans = new Array(nums.length);

        prefixProds[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            prefixProds[i] = nums[i - 1] * prefixProds[i - 1];
        }

        postfixProds[nums.length - 1] = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            postfixProds[i] = nums[i + 1] * postfixProds[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            ans[i] = prefixProds[i] * postfixProds[i];
        }

        return ans
    }
}