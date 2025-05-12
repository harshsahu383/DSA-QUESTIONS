


function buyAndSellStock(prices){
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        let profit = prices[i] - minPrice;
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }

    return maxProfit;

}
let prices = [7,1,2,3,4,5,];
console.log(buyAndSellStock(prices));