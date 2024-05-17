// leetcode - 5. Longest Palindromic Substring
// expand from the center, make the left pointer out of bounds and check with right. If right is out of bound, exit.
const longestPalindrome = function (s) {
    let odd;
    let even;
    let longest = "";

    const getPalindromicSubString = (array, left, right) => {
        while (left >= 0 && right < array.length && array[left] === array[right]) {
            left--;
            right++;
        }

        console.log(left, right);

        const a = array.slice(left + 1, right);
        console.log(a);
        return a;
    };

    for (let i = 0; i < s.length; i++) {
        odd = getPalindromicSubString(s, i, i);
        even = getPalindromicSubString(s, i, i + 1);

        let check = odd.length > even.length ? odd : even;

        if (check.length > longest.length) {
            longest = check;
        }
    }

    return longest;
};

longestPalindrome("babad");
