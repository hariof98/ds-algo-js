const insert = function (intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }

    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    let result = [];

    for (let i = 0; i < intervals.length; i++) {
        let currInterval = intervals[i];

        if (newInterval[1] >= currInterval[0] && newInterval[0] <= currInterval[1]) {
            // overlap
            newInterval[0] = Math.min(newInterval[0], currInterval[0]);
            newInterval[1] = Math.max(newInterval[1], currInterval[1]);
        } else if (newInterval[0] < currInterval[0]) {
            // no overlap and new interval is less than current interval
            result.push(newInterval);
            newInterval = currInterval;
        } else {
            // no overlap and new interval is greater than current interval
            result.push(currInterval);
        }
    }

    result.push(newInterval);

    return result;
};
