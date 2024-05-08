/**
 *  The goal is to find an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

	First, let's consider a brute-force approach. For each element in the input array nums, we could calculate the product of all 
	other elements and store it in the corresponding position in the answer array. However, this approach would take O(n^2) time 
	complexity, which is not acceptable according to the problem constraints.

	To achieve O(n) time complexity, we need to come up with a more efficient approach.

	One efficient way to solve this problem without using division is by using two arrays to keep track of the products of all 
	elements to the left and right of each element in the input array.

	Here's how the algorithm works:

	1. Initialize two arrays left and right of the same length as nums, where left[i] represents the product of all elements to 
	   the left of nums[i], and right[i] represents the product of all elements to the right of nums[i].

	2. Start by filling the left array. We initialize left[0] to 1 and then iterate through the elements of nums from index 1 to n-1. 
	   For each index i, left[i] is equal to left[i-1] * nums[i-1].

	3. Similarly, fill the right array. We initialize right[n-1] to 1 and then iterate through the elements of nums from index n-2 down to 0. 
	   For each index i, right[i] is equal to right[i+1] * nums[i+1].

	4. Finally, we calculate the answer array. For each index i, answer[i] is equal to left[i] * right[i].
 */

export const productExceptSelf = (nums: number[]): number[] => {
  const n: number = nums.length;
  const answer: number[] = new Array(n).fill(1);

  let leftProduct: number = 1;
  for (let i = 0; i < n; i++) {
    answer[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct: number = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};

// [1, 2, 3, 4]
//

// USING DIVISION TO SOLVE IT
function _productExceptSelf(nums: number[]): number[] {
  const totalProduct = nums.reduce((acc, num) => acc * num, 1);
  return nums.map((num) => totalProduct / num);
}

// O(n)^2 SOLUTION

function __productExceptSelf(nums: number[]): number[] {
  const n: number = nums.length;
  const answer: number[] = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    let product: number = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    answer[i] = product;
  }

  return answer;
}
