// 2643. Row With Maximum Ones

const rowAndMaximumOnes = function (mat) {
    if (mat.length === 0) {
        return [0, 0];
    }

    let obj = {
        element: 0,
        count: 0,
    };

    for (let i = 0; i < mat.length; i++) {
        let count = 0;

        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                count++;
            }
        }

        if (count > obj.count) {
            obj.element = i;
            obj.count = count;
        }
    }

    return Object.values(obj);

    // for(let i = 0; i < mat.length; i++){
    //     let start = 0;
    //     let end = mat[i].length - 1;
    //     let len = mat[i].length - 1;
    //     let count = 0;

    //     while(start <= end){
    //         let middle = Math.floor((start + end) / 2);

    //         if(mat[i][middle] === 1){
    //             end = middle - 1;
    //             count = len - end;
    //         }
    //         else{
    //             start = middle + 1;
    //         }
    //     }

    //     if(count > obj.count){
    //         obj.element = i,
    //         obj.count = count
    //     }
    // }

    // return Object.values(obj);
};
