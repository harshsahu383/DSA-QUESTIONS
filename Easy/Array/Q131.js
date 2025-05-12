


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
let prices = [7,1,2,3,4,5,6];
console.log(buyAndSellStock(prices));
// using 0ms solution
function buyAndSell(prices){
    let buy = prices[0];
    let sell = 0;
    for(let i = 1;i<prices.length;i++){
        buy = Math.min(buy,price[i]);
        sell = Math.max(sell,price[i]-buy);
    }
    return sell;
}