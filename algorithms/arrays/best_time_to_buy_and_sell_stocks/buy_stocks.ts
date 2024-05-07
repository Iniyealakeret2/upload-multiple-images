// PROBLEM EXPLANATION

/** 
 * The problem asks us to find the maximum profit that can be achieved by buying and selling a stock 
 * within a given set of days. Each day is represented by an index in the array, and the value at that index 
 * represents the price of the stock on that day.

The key constraints are:
	- We can only buy and sell the stock once.
	- We must buy before we sell.
	- We want to maximize our profit.

*	To solve this problem, we need to find the lowest price to buy (the "buy" day) and the highest price to sell 
*	(the "sell" day) within the array. Then, we calculate the profit by subtracting the buy price from the sell price. 
*	We repeat this process for all possible combinations of buy and sell days and return the maximum profit.

*/

export const maxProfit = (prices: number[]): number => {
  // We can't make any profit with less than 2 prices
  if (prices.length < 2) {
    return 0;
  }

  // Initialize minPrice to the first element
  let minPrice = prices[0]; // Buy price and price[currentVale] = sell price
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // Update the minimum price seen so far
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Update the maximum profit if selling at the current price would give a higher profit
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

// [7, 1, 5, 3, 6, 4] ====
// when i = 0(7), maxProfit = 0, minPrice = 7
// when i = 1(1), maxProfit = 0, minPrice = 1
// when i = 2(5), maxProfit = 4, minPrice = 1
// when i = 3(3), maxProfit = 4, minPrice = 1
// when i = 4(6), maxProfit = 5, minPrice = 1
// when i = 5(4), maxProfit = 5, minPrice = 1

//STEP BY STEP GUIDE
/**
 	1. We initialize two variables, minPrice and maxProfit. minPrice will keep track of 
	   the minimum price seen so far, and maxProfit will keep track of the maximum profit we can achieve.

	2. We iterate through the prices array using a for loop.

	3. At each iteration, we update minPrice if the current price is lower than the current minPrice.

	4. We then check if the profit we would make by selling at the current price (prices[i] - minPrice) 
	   is greater than the current maxProfit. If it is, we update maxProfit with this new value.

	5. Finally, we return maxProfit, which holds the maximum profit achievable.
 */

// O(n)^2 CODE

function maxProfits(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      // Calculate the profit by selling on day j and buying on day i
      const profit = prices[j] - prices[i];
      // Update maxProfit if the profit is greater
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}
