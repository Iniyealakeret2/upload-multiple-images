"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const two_sums_1 = require("./arrays/two_sums/two_sums");
const buy_stocks_1 = require("./arrays/best_time_to_buy_and_sell_stocks/buy_stocks");
// SOLUTION TO TWO SUMS ALGORITHM PROBLEM
// TIME COMPLEXITY IS O(N) AND SPACE-COMPLEXITY IS O(N)
const numbers = [2];
const target = 2;
console.log((0, two_sums_1.twoSums)(numbers, target));
// SOLUTION TO BUY STOCKS ALGORITHM PROBLEM
// TIME COMPLEXITY IS O(N) AND SPACE-COMPLEXITY IS O(N)
const prices = [7, 1, 5, 3, 6, 4, 9, 12, 2, 1];
console.log((0, buy_stocks_1.maxProfit)(prices));
