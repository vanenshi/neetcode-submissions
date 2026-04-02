class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length === 0) return [];

        const zeros = nums.filter(x => x === 0);
        const numberOfZeros = zeros.length;
        const ans = new Array(nums.length).fill(0);

        console.log("numberOfZeros", numberOfZeros)

        // if there is more than 1 zero, then result is all zero
        if (numberOfZeros > 1) return ans;

        const productOfAll = nums
            .filter(x => x !== 0) // no Zero
            .reduce((prvVal, curVal) => (prvVal * curVal), 1);

        console.log("productOfAll", productOfAll)


        const arrayContainZero = numberOfZeros > 0;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (arrayContainZero && num !== 0) ans[i] = 0;
            else if (arrayContainZero && num === 0) ans[i] = productOfAll;
            else ans[i] = productOfAll / num;
        }

        return ans;
    }
}
