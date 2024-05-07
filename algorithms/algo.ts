import { twoSums } from "./arrays/two_sums/two_sums";
import { maxProfit } from "./arrays/best_time_to_buy_and_sell_stocks/buy_stocks";

// SOLUTION TO TWO SUMS ALGORITHM PROBLEM
// TIME COMPLEXITY IS O(N) AND SPACE-COMPLEXITY IS O(N)
const numbers: number[] = [2];
const target = 2;

console.log(twoSums(numbers, target));

// SOLUTION TO BUY STOCKS ALGORITHM PROBLEM
// TIME COMPLEXITY IS O(N) AND SPACE-COMPLEXITY IS O(N)
const prices: number[] = [7, 1, 5, 3, 6, 4, 9, 12, 2, 1];

console.log(maxProfit(prices));
