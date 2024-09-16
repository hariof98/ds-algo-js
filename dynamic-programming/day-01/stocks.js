// 121. Best Time to Buy and Sell Stock

const maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0;
    }

    // using Greedy Algorithm
    let diff;
    let profit = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }

        diff = prices[i] - min;

        if (diff > profit) {
            profit = diff;
        }
    }

    return profit;
};
