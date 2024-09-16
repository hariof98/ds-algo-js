// 274. H-Index

// with H-Index, always sort in desc order for better iterations

const hIndex = function (citations) {
    if (citations.length === 0) {
        return -1;
    }

    citations.sort((a, b) => {
        return b - a;
    });

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) {
            return i;
        }
    }

    return citations.length;

    // let hIndex = 0;

    // for(let i = 0; i < citations.length; i++){
    //     if(citations[i] >= i + 1){
    //         hIndex = i + 1;
    //     }
    //     else{
    //         break;
    //     }
    // }

    // return hIndex;
};
