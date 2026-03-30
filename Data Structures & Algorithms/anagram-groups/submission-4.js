class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        const toArrRepresntation = (str) => {
            const count = new Array(26).fill(0);

            for (let c of str) { // O(m)
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            return count;
        }

        for (let str of strs) { // O(n)
            const sortedStr = toArrRepresntation(str).join(",");
            if (map.has(sortedStr)) {
                map.set(sortedStr, [...map.get(sortedStr), str])
            } else {
                map.set(sortedStr, [str])
            }
        }

        return [...map.values()]
    }
}
