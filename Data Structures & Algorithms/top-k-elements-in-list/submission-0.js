class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Very Simple solution
        const map = new Map();

        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }

        const arr = [...map];
        const ans = arr.toSorted((a, b) => b[1] - a[1]).map((x) => x[0]);
        return ans.slice(0, k);
    }
}