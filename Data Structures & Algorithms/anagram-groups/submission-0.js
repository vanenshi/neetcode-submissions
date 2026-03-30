class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        const isAnagrams = (str1, str2) => {
            return [...str1].sort().join() === [...str2].sort().join()
        }

        for (let str of strs) {
            // if already exist
            const existing = map.keys().find((value) => isAnagrams(value, str))

            const list = strs.filter((value) => isAnagrams(value, str))
            if (existing)
                map.set(existing, list);
            else
                map.set(str, list);
        }

        return [...map.values()]
    }
}
