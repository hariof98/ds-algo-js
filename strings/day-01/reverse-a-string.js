// 151. Reverse Words in a String

const reverseWords = function (s) {
    if (s.length === 0) {
        return s;
    }

    // const result = s.split(" ").filter((data) => {
    //     return data.trim();
    // });

    // return result.reverse().join(" ");

    let result = "";
    let arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result = arr[i].trim() + " " + result;
        }
    }

    return result.trim();
};
