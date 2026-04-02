// super optimized version base on the V8 engine

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const headerParts = new Array(strs.length);
        let messageParts = new Array(strs.length);

        for (let i = 0; i < strs.length; i++) {
            const s = strs[i];
            headerParts[i] = s.length;
            messageParts[i] = s;
        }

        const header = headerParts.join(":");
        const headerLen = header.length;

        // Single allocation path
        return headerLen + "#" + header + messageParts.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;

        const charCodeOfHastag = "#".charCodeAt(0);
        const charCodeOfColon = ":".charCodeAt(0);
        const charCodeOfZero = "0".charCodeAt(0);

        // Parse header length manually
        let headerSize = 0;
        while (str.charCodeAt(i) !== charCodeOfHastag) {
            // '#'
            headerSize = headerSize * 10 + (str.charCodeAt(i) - charCodeOfZero);
            i++;
        }

        i++; // skip '#'

        if (headerSize === 0) return [];

        const headerEnd = i + headerSize;

        const result = [];
        let num = 0;
        let payloadIndex = headerEnd;

        for (; i < headerEnd; i++) {
            const code = str.charCodeAt(i);

            if (code === charCodeOfColon) {
                // ':'
                result.push(str.slice(payloadIndex, payloadIndex + num));
                payloadIndex += num;
                num = 0;
            } else {
                num = num * 10 + (code - charCodeOfZero);
            }
        }

        // last segment
        result.push(str.slice(payloadIndex, payloadIndex + num));

        return result;
    }
}