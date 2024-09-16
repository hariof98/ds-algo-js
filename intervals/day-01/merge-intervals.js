// 56. Merge Intervals

const merge = function (intervals) {
    if (intervals.length === 0) {
        return [];
    }

    // sort
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prevLastValue = result[result.length - 1];
        const currFirstValue = intervals[i];

        if (prevLastValue[1] >= currFirstValue[0]) {
            // there is an overlap
            prevLastValue[1] = Math.max(prevLastValue[1], currFirstValue[1]);
        } else {
            result.push(currFirstValue);
        }
    }

    return result;
};
