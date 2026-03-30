class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const ss = [...s].sort().join();
        const st = [...t].sort().join();
        return ss === st;
    }
}
