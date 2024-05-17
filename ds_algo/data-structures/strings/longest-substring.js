console.clear();

const lengthOfLongestSubstring = function (s) {
    if (s.length === 0) {
        return 0;
    }

    let maxLength = 0;
    let charIndexMap = new Map(); // Map to track characters and their last seen index
    let start = 0; // Start of the current substring

    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];
        //console.log(currentChar, end);

        if (charIndexMap.has(currentChar)) {
            // If the current character is already in the substring,
            // move the start of the substring to after its last occurrence
            start = Math.max(start, charIndexMap.get(currentChar) + 1);
        }

        // Update the character's last seen index
        charIndexMap.set(currentChar, end);
        //console.log(charIndexMap);

        // Calculate the length of the current substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

// not optimized
const lengthOfLongestSubstrings = function (s) {
    if (s.length <= 1) {
        return s.length;
    }

    let finalArray = [];
    let backupArray = [];

    let count = 0;

    const recursive = (arr) => {
        if (count === s.length) {
            return;
        }

        if (count === 0) {
            finalArray.push(arr);
        } else {
            if (backupArray.length === 0) {
                if (finalArray.includes(arr)) {
                    backupArray.push(arr);
                } else {
                    finalArray.push(arr);
                }
            } else {
                if (backupArray.includes(arr)) {
                    if (backupArray.length > s.length - count) {
                        return;
                    }

                    backupArray = [];
                }

                backupArray.push(arr);
            }
        }

        count++;

        recursive(s[count]);
    };

    recursive(s[0]);

    return finalArray.length >= backupArray.length ? finalArray.length : backupArray.length;
};
