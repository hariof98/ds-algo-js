// 452. Minimum Number of Arrows to Burst Balloons

const findMinArrowShots = function (points) {
    if (points.length === 0) {
        return [];
    }

    // sort
    points.sort((a, b) => {
        return a[1] - b[1];
    });

    let result = [points[0]];
    let arrows = 1; // 1 arrow will be definitely required for bursting the balloons

    for (let i = 1; i < points.length; i++) {
        let prevLastValue = result[result.length - 1];
        let currFirstValue = points[i];

        if (prevLastValue[1] < currFirstValue[0]) {
            // no overlap
            arrows++;
            result.push(currFirstValue);
        }
    }

    return arrows;
};
