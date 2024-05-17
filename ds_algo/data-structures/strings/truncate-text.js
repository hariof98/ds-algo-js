const truncateText = (s, max) => {
    const arr = s.split("");

    if (arr.length > max) {
        arr.splice(max, arr.length);
        return arr.join("") + "...";
    } else {
        return s;
    }
};

console.log(truncateText("astronomical brilliance", 5));
