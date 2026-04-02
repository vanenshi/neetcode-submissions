class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // 9:20:12:5
        let header = "";
        let message = "";
        let encoded = "";

        for (let str of strs) {
            header += str.length + ":"; // "20:12:5:"
        }
        header = header.slice(0, header.length - 1); // "20:12:5"
        encoded += header.length + "#"; // "7#"
        encoded += header; // "7#20:12:5:"

        for (let str of strs) {
            message += str; // "sdlfjsdx42;l:"
        }
        encoded += message; // "7#20:12:5" + "sdlfjsdx42;l:"

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // first pick up the <count>: in the string
        const firstSegment = str.split("#")[0];
        const headerSize = Number(firstSegment);
        const sizeOfFirstCount = firstSegment.length + 1; // size of count + 1 for the "#"

        if (headerSize === 0) return [];

        const header = str.slice(
            sizeOfFirstCount,
            sizeOfFirstCount + Number(headerSize)
        );
        const payload = str.slice(sizeOfFirstCount + Number(headerSize));
        const headerSizes = header.split(":");
        console.log(headerSizes);
        console.log(payload);

        const strs = [];
        let pointer = 0;
        for (let i = 0; i < headerSizes.length; i++) {
            const headerSize = Number(headerSizes[i]);
            console.log(pointer, pointer + headerSize);
            strs.push(payload.slice(pointer, pointer + headerSize));

            pointer += Number(headerSize);
        }

        return strs;
    }
}
