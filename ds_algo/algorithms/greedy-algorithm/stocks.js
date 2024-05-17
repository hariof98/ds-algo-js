// leetcode - 121. Best Time to Buy and Sell Stock

const maxProfit = function (prices) {
    /*
        Greedy Algorithm -
        [7,1,5,3,6,4]

        min = 7 => 1
        profit = 0 => 1-1 = 0
                      5-1 = 4
                      3-1 = 2
                      6-1 = 5
                      4-1 = 3
    */

    let min = prices[0];
    let profit = 0;
    let diff;

    for (let i = 1; i <= prices.length; i++) {
        // O(n)
        if (prices[i] < min) {
            // O(n)
            min = prices[i];
        }

        diff = prices[i] - min; // O(n)

        if (diff > profit) {
            // O(n)
            profit = diff;
        }
    }

    return profit; // SC -> O(1)
};
/* Final, 
    TC -> O(n)
    SC -> O(1)
*/

// without greedy algorithm (not really optimized)
const maxProfits = function (prices) {
    let buy = prices[0]; // 0
    let index = 0; // 4
    let sell = 0; // 5
    let flag = [];

    for (let i = 0; i <= prices.length; i++) {
        // TC -> O(n)
        // analyse the buying price
        if (prices[i] < buy && i !== prices.length - 1) {
            // 0 < 3
            buy = prices[i]; // 0
            index = i; // 4
        }
    }

    for (let i = 0; i <= prices.length - 1; i++) {
        // TC -> O(n)
        // analyse the selling price
        if (i >= index) {
            // 5 >= 4
            flag.length = 1;

            if (prices[i] > sell) {
                // 5 > 0
                sell = prices[i]; // 5
            }
        }
    }

    // SC -> O(1)
    if (flag.length === 0) {
        return 0;
    } else {
        return sell - buy; // 5 - 0
    }
};
// [3,2,6,5,0,3]
