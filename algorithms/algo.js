"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const two_sums_1 = require("./two_sums/two_sums");
// SOLUTION TO TWO SUMS ALGORITHM PROBLEM
// TIME COMPLEXITY IS O(N) AND SPACE-COMPLEXITY IS O(N)
const numbers = [2];
const target = 2;
console.log((0, two_sums_1.twoSums)(numbers, target));
