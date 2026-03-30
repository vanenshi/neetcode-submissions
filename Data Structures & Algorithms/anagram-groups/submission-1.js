class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const sortedStr = [...str].sort().join();

            if (map.has(sortedStr)) {
                map.set(sortedStr, [...map.get(sortedStr), str])
            } else {
                map.set(sortedStr, [str])
            }
        }

        return [...map.values()]
    }
}
