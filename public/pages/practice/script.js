// ═══════════════════════════════════════════════════════════════════
// 60 CURATED PROBLEMS — 20 EASY · 20 MEDIUM · 20 HARD
// Each has: testCases array with input/expected for real validation
// ═══════════════════════════════════════════════════════════════════
const problems = [

  // ╔═══════════════════════════╗
  // ║     EASY  (20 problems)   ║
  // ╚═══════════════════════════╝

  {
    id:1, title:"Two Sum", difficulty:"easy", category:"array", acceptance:"49.2%",
    description:"Given an array of integers <code>nums</code> and an integer <code>target</code>, return the indices of the two numbers that add up to <code>target</code>. You may assume each input has exactly one solution and you may not use the same element twice.",
    constraints:"2 ≤ nums.length ≤ 10⁴ · -10⁹ ≤ nums[i] ≤ 10⁹",
    examples:[
      {input:"nums = [2,7,11,15], target = 9", output:"[0,1]", explain:"nums[0]+nums[1]=2+7=9"},
      {input:"nums = [3,2,4], target = 6", output:"[1,2]", explain:"nums[1]+nums[2]=2+4=6"}
    ],
    hint:"Use a hash map to store each number's index as you iterate.",
    starterJS:"function twoSum(nums, target) {\n  // your code here\n}",
    starterPY:"def twoSum(nums, target):\n    # your code here\n    pass",
    testCases:[
      {args:[[2,7,11,15],9], expected:[0,1]},
      {args:[[3,2,4],6], expected:[1,2]},
      {args:[[3,3],6], expected:[0,1]},
      {args:[[1,5,3,7],8], expected:[1,2]}
    ],
    fnName:"twoSum", points:10
  },
  {
    id:2, title:"Reverse String", difficulty:"easy", category:"string", acceptance:"75.8%",
    description:"Write a function that reverses a string. The input string is given as an array of characters <code>s</code>. Modify the array in-place.",
    constraints:"1 ≤ s.length ≤ 10⁵",
    examples:[
      {input:'s = ["h","e","l","l","o"]', output:'["o","l","l","e","h"]'},
      {input:'s = ["H","a","n","n","a","h"]', output:'["h","a","n","n","a","H"]'}
    ],
    hint:"Use two pointers — one at start, one at end — and swap as you move inward.",
    starterJS:"function reverseString(s) {\n  // modify s in-place\n}",
    starterPY:"def reverseString(s):\n    # modify s in-place\n    pass",
    testCases:[
      {args:[["h","e","l","l","o"]], expected:["o","l","l","e","h"]},
      {args:[["H","a","n","n","a","h"]], expected:["h","a","n","n","a","H"]},
      {args:[["A"]], expected:["A"]},
      {args:[["a","b"]], expected:["b","a"]}
    ],
    fnName:"reverseString", points:10, inPlace:true, inPlaceArg:0
  },
  {
    id:3, title:"FizzBuzz", difficulty:"easy", category:"basics", acceptance:"68.5%",
    description:"Given an integer <code>n</code>, return a string array where for each number from 1 to n: if divisible by 3 → \"Fizz\", by 5 → \"Buzz\", by both → \"FizzBuzz\", else the number as string.",
    constraints:"1 ≤ n ≤ 10⁴",
    examples:[
      {input:"n = 5", output:'["1","2","Fizz","4","Buzz"]'},
      {input:"n = 15", output:'[..., "14", "FizzBuzz"]'}
    ],
    hint:"Check divisibility by 15 first, then 3, then 5.",
    starterJS:"function fizzBuzz(n) {\n  // return array of strings\n}",
    starterPY:"def fizzBuzz(n):\n    # return list of strings\n    pass",
    testCases:[
      {args:[3], expected:["1","2","Fizz"]},
      {args:[5], expected:["1","2","Fizz","4","Buzz"]},
      {args:[15], expected:["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]}
    ],
    fnName:"fizzBuzz", points:10
  },
  {
    id:4, title:"Palindrome Number", difficulty:"easy", category:"math", acceptance:"52.4%",
    description:"Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise. An integer is a palindrome when it reads the same backward as forward.",
    constraints:"-2³¹ ≤ x ≤ 2³¹ - 1",
    examples:[
      {input:"x = 121", output:"true", explain:"121 reads as 121 from left to right and right to left."},
      {input:"x = -121", output:"false", explain:"From left: -121. From right: 121-. Not a palindrome."}
    ],
    hint:"Negative numbers are never palindromes. Reverse half the number and compare.",
    starterJS:"function isPalindrome(x) {\n  // return boolean\n}",
    starterPY:"def isPalindrome(x):\n    # return boolean\n    pass",
    testCases:[
      {args:[121], expected:true},
      {args:[-121], expected:false},
      {args:[10], expected:false},
      {args:[0], expected:true},
      {args:[12321], expected:true}
    ],
    fnName:"isPalindrome", points:10
  },
  {
    id:5, title:"Valid Anagram", difficulty:"easy", category:"hash", acceptance:"62.1%",
    description:"Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.",
    constraints:"1 ≤ s.length, t.length ≤ 5×10⁴ · strings contain only lowercase English letters",
    examples:[
      {input:'s = "anagram", t = "nagaram"', output:"true"},
      {input:'s = "rat", t = "car"', output:"false"}
    ],
    hint:"Count frequencies of each letter using a hash map or array of 26.",
    starterJS:"function isAnagram(s, t) {\n  // return boolean\n}",
    starterPY:"def isAnagram(s, t):\n    # return boolean\n    pass",
    testCases:[
      {args:["anagram","nagaram"], expected:true},
      {args:["rat","car"], expected:false},
      {args:["a","a"], expected:true},
      {args:["ab","ba"], expected:true},
      {args:["ab","a"], expected:false}
    ],
    fnName:"isAnagram", points:10
  },
  {
    id:6, title:"Maximum Subarray", difficulty:"easy", category:"array", acceptance:"50.0%",
    description:"Given an integer array <code>nums</code>, find the subarray with the largest sum and return its sum.",
    constraints:"1 ≤ nums.length ≤ 10⁵ · -10⁴ ≤ nums[i] ≤ 10⁴",
    examples:[
      {input:"nums = [-2,1,-3,4,-1,2,1,-5,4]", output:"6", explain:"Subarray [4,-1,2,1] has the largest sum 6."},
      {input:"nums = [1]", output:"1"}
    ],
    hint:"Kadane's Algorithm: track current max ending here and global max.",
    starterJS:"function maxSubArray(nums) {\n  // return number\n}",
    starterPY:"def maxSubArray(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[-2,1,-3,4,-1,2,1,-5,4]], expected:6},
      {args:[[1]], expected:1},
      {args:[[5,4,-1,7,8]], expected:23},
      {args:[[-1]], expected:-1}
    ],
    fnName:"maxSubArray", points:10
  },
  {
    id:7, title:"Merge Sorted Arrays", difficulty:"easy", category:"array", acceptance:"45.8%",
    description:"You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in non-decreasing order, and two integers <code>m</code> and <code>n</code>. Merge <code>nums2</code> into <code>nums1</code> as one sorted array. The final result should be stored inside <code>nums1</code>.",
    constraints:"nums1.length == m + n · nums2.length == n · 0 ≤ m, n ≤ 200",
    examples:[
      {input:"nums1 = [1,2,3,0,0,0], m=3, nums2 = [2,5,6], n=3", output:"[1,2,2,3,5,6]"}
    ],
    hint:"Start merging from the end of nums1 to avoid overwriting elements.",
    starterJS:"function merge(nums1, m, nums2, n) {\n  // modify nums1 in-place\n}",
    starterPY:"def merge(nums1, m, nums2, n):\n    # modify nums1 in-place\n    pass",
    testCases:[
      {args:[[1,2,3,0,0,0],3,[2,5,6],3], expected:[1,2,2,3,5,6]},
      {args:[[1],1,[],0], expected:[1]},
      {args:[[0],0,[1],1], expected:[1]}
    ],
    fnName:"merge", points:10, inPlace:true, inPlaceArg:0
  },
  {
    id:8, title:"Contains Duplicate", difficulty:"easy", category:"hash", acceptance:"61.0%",
    description:"Given an integer array <code>nums</code>, return <code>true</code> if any value appears at least twice in the array, and <code>false</code> if every element is distinct.",
    constraints:"1 ≤ nums.length ≤ 10⁵",
    examples:[
      {input:"nums = [1,2,3,1]", output:"true"},
      {input:"nums = [1,2,3,4]", output:"false"}
    ],
    hint:"Use a Set to track seen numbers.",
    starterJS:"function containsDuplicate(nums) {\n  // return boolean\n}",
    starterPY:"def containsDuplicate(nums):\n    # return boolean\n    pass",
    testCases:[
      {args:[[1,2,3,1]], expected:true},
      {args:[[1,2,3,4]], expected:false},
      {args:[[1,1,1,3,3,4,3,2,4,2]], expected:true}
    ],
    fnName:"containsDuplicate", points:10
  },
  {
    id:9, title:"Single Number", difficulty:"easy", category:"bit", acceptance:"70.2%",
    description:"Given a non-empty array of integers <code>nums</code>, every element appears twice except for one. Find that single one. You must implement a solution with O(1) extra space.",
    constraints:"1 ≤ nums.length ≤ 3×10⁴ · every element appears twice except one",
    examples:[
      {input:"nums = [2,2,1]", output:"1"},
      {input:"nums = [4,1,2,1,2]", output:"4"}
    ],
    hint:"XOR all numbers together: a^a=0, a^0=a.",
    starterJS:"function singleNumber(nums) {\n  // return number\n}",
    starterPY:"def singleNumber(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[2,2,1]], expected:1},
      {args:[[4,1,2,1,2]], expected:4},
      {args:[[1]], expected:1}
    ],
    fnName:"singleNumber", points:10
  },
  {
    id:10, title:"Roman to Integer", difficulty:"easy", category:"string", acceptance:"58.3%",
    description:"Given a Roman numeral string, convert it to an integer. Roman numerals: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.",
    constraints:"1 ≤ s.length ≤ 15 · s contains only I,V,X,L,C,D,M",
    examples:[
      {input:'s = "III"', output:"3"},
      {input:'s = "LVIII"', output:"58"},
      {input:'s = "MCMXCIV"', output:"1994"}
    ],
    hint:"If a smaller value appears before a larger one, subtract it instead of adding.",
    starterJS:"function romanToInt(s) {\n  // return number\n}",
    starterPY:"def romanToInt(s):\n    # return number\n    pass",
    testCases:[
      {args:["III"], expected:3},
      {args:["LVIII"], expected:58},
      {args:["MCMXCIV"], expected:1994},
      {args:["IX"], expected:9},
      {args:["XLII"], expected:42}
    ],
    fnName:"romanToInt", points:10
  },
  {
    id:11, title:"Best Time to Buy and Sell Stock", difficulty:"easy", category:"array", acceptance:"54.1%",
    description:"Given an array <code>prices</code> where <code>prices[i]</code> is the price on the i-th day, find the maximum profit from one buy and one sell. If no profit is possible, return 0.",
    constraints:"1 ≤ prices.length ≤ 10⁵",
    examples:[
      {input:"prices = [7,1,5,3,6,4]", output:"5", explain:"Buy on day 2 (price=1), sell on day 5 (price=6), profit=5."},
      {input:"prices = [7,6,4,3,1]", output:"0"}
    ],
    hint:"Track minimum price so far and calculate profit at each step.",
    starterJS:"function maxProfit(prices) {\n  // return number\n}",
    starterPY:"def maxProfit(prices):\n    # return number\n    pass",
    testCases:[
      {args:[[7,1,5,3,6,4]], expected:5},
      {args:[[7,6,4,3,1]], expected:0},
      {args:[[2,4,1]], expected:2},
      {args:[[1]], expected:0}
    ],
    fnName:"maxProfit", points:10
  },
  {
    id:12, title:"Climbing Stairs", difficulty:"easy", category:"dp", acceptance:"51.5%",
    description:"You are climbing a staircase. It takes <code>n</code> steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    constraints:"1 ≤ n ≤ 45",
    examples:[
      {input:"n = 2", output:"2", explain:"1+1 or 2"},
      {input:"n = 3", output:"3", explain:"1+1+1, 1+2, or 2+1"}
    ],
    hint:"This is the Fibonacci sequence: dp[i] = dp[i-1] + dp[i-2].",
    starterJS:"function climbStairs(n) {\n  // return number\n}",
    starterPY:"def climbStairs(n):\n    # return number\n    pass",
    testCases:[
      {args:[2], expected:2},
      {args:[3], expected:3},
      {args:[5], expected:8},
      {args:[1], expected:1}
    ],
    fnName:"climbStairs", points:10
  },
  {
    id:13, title:"Linked List Cycle", difficulty:"easy", category:"linked", acceptance:"46.7%",
    description:"Given <code>head</code> of a linked list, determine if the linked list has a cycle. Return <code>true</code> if there is a cycle, <code>false</code> otherwise. For this problem, implement using a Set or two-pointer technique. Input is an array representation — the function receives the array.",
    constraints:"0 ≤ list length ≤ 10⁴",
    examples:[
      {input:"head = [3,2,0,-4], pos = 1", output:"true", explain:"Tail connects to node at index 1"},
      {input:"head = [1], pos = -1", output:"false"}
    ],
    hint:"Use two pointers (slow and fast). If they meet, there's a cycle.",
    starterJS:"function hasCycle(arr, pos) {\n  // pos is the index the tail connects to (-1 = no cycle)\n  // return boolean\n}",
    starterPY:"def hasCycle(arr, pos):\n    # pos is the index tail connects to (-1 = no cycle)\n    # return boolean\n    pass",
    testCases:[
      {args:[[3,2,0,-4],1], expected:true},
      {args:[[1,2],0], expected:true},
      {args:[[1],-1], expected:false},
      {args:[[],- 1], expected:false}
    ],
    fnName:"hasCycle", points:10
  },
  {
    id:14, title:"Valid Parentheses", difficulty:"easy", category:"stack", acceptance:"40.5%",
    description:"Given a string <code>s</code> containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type and in the correct order.",
    constraints:"1 ≤ s.length ≤ 10⁴",
    examples:[
      {input:'s = "()"', output:"true"},
      {input:'s = "()[]{}"', output:"true"},
      {input:'s = "(]"', output:"false"}
    ],
    hint:"Use a stack. Push for opening brackets, pop and compare for closing brackets.",
    starterJS:"function isValid(s) {\n  // return boolean\n}",
    starterPY:"def isValid(s):\n    # return boolean\n    pass",
    testCases:[
      {args:["()"], expected:true},
      {args:["()[]{}"], expected:true},
      {args:["(]"], expected:false},
      {args:["([)]"], expected:false},
      {args:["{[]}"], expected:true}
    ],
    fnName:"isValid", points:10
  },
  {
    id:15, title:"Count Primes", difficulty:"easy", category:"math", acceptance:"33.3%",
    description:"Given an integer <code>n</code>, return the number of prime numbers that are strictly less than <code>n</code>.",
    constraints:"0 ≤ n ≤ 5×10⁶",
    examples:[
      {input:"n = 10", output:"4", explain:"Primes less than 10: 2, 3, 5, 7"},
      {input:"n = 0", output:"0"}
    ],
    hint:"Sieve of Eratosthenes is the optimal approach.",
    starterJS:"function countPrimes(n) {\n  // return number\n}",
    starterPY:"def countPrimes(n):\n    # return number\n    pass",
    testCases:[
      {args:[10], expected:4},
      {args:[0], expected:0},
      {args:[1], expected:0},
      {args:[2], expected:0},
      {args:[20], expected:8}
    ],
    fnName:"countPrimes", points:10
  },
  {
    id:16, title:"Power of Two", difficulty:"easy", category:"bit", acceptance:"45.8%",
    description:"Given an integer <code>n</code>, return <code>true</code> if it is a power of two. Otherwise, return <code>false</code>.",
    constraints:"-2³¹ ≤ n ≤ 2³¹ - 1",
    examples:[
      {input:"n = 1", output:"true"},
      {input:"n = 16", output:"true"},
      {input:"n = 3", output:"false"}
    ],
    hint:"A power of two in binary has exactly one 1-bit. Use n & (n-1) == 0.",
    starterJS:"function isPowerOfTwo(n) {\n  // return boolean\n}",
    starterPY:"def isPowerOfTwo(n):\n    # return boolean\n    pass",
    testCases:[
      {args:[1], expected:true},
      {args:[16], expected:true},
      {args:[3], expected:false},
      {args:[0], expected:false},
      {args:[64], expected:true}
    ],
    fnName:"isPowerOfTwo", points:10
  },
  {
    id:17, title:"Move Zeroes", difficulty:"easy", category:"array", acceptance:"60.7%",
    description:"Given an array <code>nums</code>, move all 0's to the end while maintaining the relative order of the non-zero elements. Do this in-place.",
    constraints:"1 ≤ nums.length ≤ 10⁴",
    examples:[
      {input:"nums = [0,1,0,3,12]", output:"[1,3,12,0,0]"},
      {input:"nums = [0]", output:"[0]"}
    ],
    hint:"Use a write pointer. Copy non-zero elements forward, then fill remaining with zeros.",
    starterJS:"function moveZeroes(nums) {\n  // modify in-place\n}",
    starterPY:"def moveZeroes(nums):\n    # modify in-place\n    pass",
    testCases:[
      {args:[[0,1,0,3,12]], expected:[1,3,12,0,0]},
      {args:[[0]], expected:[0]},
      {args:[[1,0,0,2]], expected:[1,2,0,0]}
    ],
    fnName:"moveZeroes", points:10, inPlace:true, inPlaceArg:0
  },
  {
    id:18, title:"Intersection of Two Arrays", difficulty:"easy", category:"hash", acceptance:"70.2%",
    description:"Given two integer arrays <code>nums1</code> and <code>nums2</code>, return an array of their intersection. Each element in the result must be unique.",
    constraints:"1 ≤ nums.length ≤ 1000",
    examples:[
      {input:"nums1 = [1,2,2,1], nums2 = [2,2]", output:"[2]"},
      {input:"nums1 = [4,9,5], nums2 = [9,4,9,8,4]", output:"[4,9]"}
    ],
    hint:"Use a Set for one array, then check if elements of the other exist in the Set.",
    starterJS:"function intersection(nums1, nums2) {\n  // return array (order doesn't matter)\n}",
    starterPY:"def intersection(nums1, nums2):\n    # return list (order doesn't matter)\n    pass",
    testCases:[
      {args:[[1,2,2,1],[2,2]], expected:[2]},
      {args:[[4,9,5],[9,4,9,8,4]], expected:[4,9]}
    ],
    fnName:"intersection", points:10, unordered:true
  },
  {
    id:19, title:"Missing Number", difficulty:"easy", category:"math", acceptance:"62.8%",
    description:"Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range [0, n], return the one number that is missing.",
    constraints:"n == nums.length · 1 ≤ n ≤ 10⁴",
    examples:[
      {input:"nums = [3,0,1]", output:"2"},
      {input:"nums = [0,1]", output:"2"}
    ],
    hint:"Use XOR or math: sum of 0..n minus sum of array = missing number.",
    starterJS:"function missingNumber(nums) {\n  // return number\n}",
    starterPY:"def missingNumber(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[3,0,1]], expected:2},
      {args:[[0,1]], expected:2},
      {args:[[9,6,4,2,3,5,7,0,1]], expected:8},
      {args:[[0]], expected:1}
    ],
    fnName:"missingNumber", points:10
  },
  {
    id:20, title:"Binary Search", difficulty:"easy", category:"search", acceptance:"55.2%",
    description:"Given a sorted array of integers <code>nums</code> and a <code>target</code>, return the index of target if found, else return -1. You must write an algorithm with O(log n) runtime.",
    constraints:"1 ≤ nums.length ≤ 10⁴ · nums is sorted in ascending order",
    examples:[
      {input:"nums = [-1,0,3,5,9,12], target = 9", output:"4"},
      {input:"nums = [-1,0,3,5,9,12], target = 2", output:"-1"}
    ],
    hint:"Use two pointers low and high. Check mid each iteration.",
    starterJS:"function search(nums, target) {\n  // return index or -1\n}",
    starterPY:"def search(nums, target):\n    # return index or -1\n    pass",
    testCases:[
      {args:[[-1,0,3,5,9,12],9], expected:4},
      {args:[[-1,0,3,5,9,12],2], expected:-1},
      {args:[[5],5], expected:0},
      {args:[[5],1], expected:-1}
    ],
    fnName:"search", points:10
  },

  // ╔═══════════════════════════╗
  // ║   MEDIUM  (20 problems)   ║
  // ╚═══════════════════════════╝

  {
    id:21, title:"3Sum", difficulty:"medium", category:"array", acceptance:"32.4%",
    description:"Given an array <code>nums</code>, return all triplets [nums[i], nums[j], nums[k]] such that i≠j≠k and nums[i]+nums[j]+nums[k]==0. No duplicate triplets.",
    constraints:"3 ≤ nums.length ≤ 3000",
    examples:[
      {input:"nums = [-1,0,1,2,-1,-4]", output:"[[-1,-1,2],[-1,0,1]]"},
      {input:"nums = [0,1,1]", output:"[]"}
    ],
    hint:"Sort the array, fix one element, then use two-pointer on the rest.",
    starterJS:"function threeSum(nums) {\n  // return array of triplets\n}",
    starterPY:"def threeSum(nums):\n    # return list of triplets\n    pass",
    testCases:[
      {args:[[-1,0,1,2,-1,-4]], expected:[[-1,-1,2],[-1,0,1]]},
      {args:[[0,1,1]], expected:[]},
      {args:[[0,0,0]], expected:[[0,0,0]]}
    ],
    fnName:"threeSum", points:20, deepEqual:true
  },
  {
    id:22, title:"Group Anagrams", difficulty:"medium", category:"hash", acceptance:"66.2%",
    description:"Given an array of strings <code>strs</code>, group the anagrams together. You can return the answer in any order.",
    constraints:"1 ≤ strs.length ≤ 10⁴",
    examples:[
      {input:'strs = ["eat","tea","tan","ate","nat","bat"]', output:'[["bat"],["nat","tan"],["ate","eat","tea"]]'}
    ],
    hint:"Sort each word to create a key, group words by that key in a hash map.",
    starterJS:"function groupAnagrams(strs) {\n  // return array of arrays\n}",
    starterPY:"def groupAnagrams(strs):\n    # return list of lists\n    pass",
    testCases:[
      {args:[["eat","tea","tan","ate","nat","bat"]], expected:[["eat","tea","ate"],["tan","nat"],["bat"]]},
      {args:[[""]], expected:[[""]]},
      {args:[["a"]], expected:[["a"]]}
    ],
    fnName:"groupAnagrams", points:20, groupCompare:true
  },
  {
    id:23, title:"Longest Substring Without Repeating Characters", difficulty:"medium", category:"string", acceptance:"33.8%",
    description:"Given a string <code>s</code>, find the length of the longest substring without repeating characters.",
    constraints:"0 ≤ s.length ≤ 5×10⁴",
    examples:[
      {input:'s = "abcabcbb"', output:"3", explain:'The answer is "abc", with length 3.'},
      {input:'s = "bbbbb"', output:"1"}
    ],
    hint:"Sliding window with a Set: expand right, shrink left when a duplicate is found.",
    starterJS:"function lengthOfLongestSubstring(s) {\n  // return number\n}",
    starterPY:"def lengthOfLongestSubstring(s):\n    # return number\n    pass",
    testCases:[
      {args:["abcabcbb"], expected:3},
      {args:["bbbbb"], expected:1},
      {args:["pwwkew"], expected:3},
      {args:[""], expected:0},
      {args:["au"], expected:2}
    ],
    fnName:"lengthOfLongestSubstring", points:20
  },
  {
    id:24, title:"Product of Array Except Self", difficulty:"medium", category:"array", acceptance:"64.5%",
    description:"Given an integer array <code>nums</code>, return an array where each element is the product of all the elements of <code>nums</code> except <code>nums[i]</code>. You must not use division.",
    constraints:"2 ≤ nums.length ≤ 10⁵",
    examples:[
      {input:"nums = [1,2,3,4]", output:"[24,12,8,6]"},
      {input:"nums = [-1,1,0,-3,3]", output:"[0,0,9,0,0]"}
    ],
    hint:"Use prefix and suffix product arrays (or do it in two passes).",
    starterJS:"function productExceptSelf(nums) {\n  // return array\n}",
    starterPY:"def productExceptSelf(nums):\n    # return list\n    pass",
    testCases:[
      {args:[[1,2,3,4]], expected:[24,12,8,6]},
      {args:[[-1,1,0,-3,3]], expected:[0,0,9,0,0]}
    ],
    fnName:"productExceptSelf", points:20
  },
  {
    id:25, title:"Container With Most Water", difficulty:"medium", category:"greedy", acceptance:"54.3%",
    description:"Given <code>n</code> non-negative integers representing an elevation map, find two lines that together with the x-axis form a container that holds the most water.",
    constraints:"2 ≤ height.length ≤ 10⁵",
    examples:[
      {input:"height = [1,8,6,2,5,4,8,3,7]", output:"49"}
    ],
    hint:"Two-pointer: start from both ends, move the shorter line inward.",
    starterJS:"function maxArea(height) {\n  // return number\n}",
    starterPY:"def maxArea(height):\n    # return number\n    pass",
    testCases:[
      {args:[[1,8,6,2,5,4,8,3,7]], expected:49},
      {args:[[1,1]], expected:1},
      {args:[[4,3,2,1,4]], expected:16}
    ],
    fnName:"maxArea", points:20
  },
  {
    id:26, title:"Sort Colors (Dutch National Flag)", difficulty:"medium", category:"sort", acceptance:"57.1%",
    description:"Given an array <code>nums</code> with values 0, 1, or 2.  Sort them in-place so that same values are adjacent, in order 0→1→2. Do not use the library sort function.",
    constraints:"1 ≤ nums.length ≤ 300",
    examples:[
      {input:"nums = [2,0,2,1,1,0]", output:"[0,0,1,1,2,2]"},
      {input:"nums = [2,0,1]", output:"[0,1,2]"}
    ],
    hint:"Three pointers: low, mid, high. Swap 0s to front, 2s to back.",
    starterJS:"function sortColors(nums) {\n  // sort in-place\n}",
    starterPY:"def sortColors(nums):\n    # sort in-place\n    pass",
    testCases:[
      {args:[[2,0,2,1,1,0]], expected:[0,0,1,1,2,2]},
      {args:[[2,0,1]], expected:[0,1,2]},
      {args:[[0]], expected:[0]}
    ],
    fnName:"sortColors", points:20, inPlace:true, inPlaceArg:0
  },
  {
    id:27, title:"Merge Intervals", difficulty:"medium", category:"sort", acceptance:"46.1%",
    description:"Given an array of <code>intervals</code> where intervals[i] = [start, end], merge all overlapping intervals.",
    constraints:"1 ≤ intervals.length ≤ 10⁴",
    examples:[
      {input:"intervals = [[1,3],[2,6],[8,10],[15,18]]", output:"[[1,6],[8,10],[15,18]]"},
      {input:"intervals = [[1,4],[4,5]]", output:"[[1,5]]"}
    ],
    hint:"Sort by start time, then iterate and merge if current overlaps with previous.",
    starterJS:"function mergeIntervals(intervals) {\n  // return merged array\n}",
    starterPY:"def mergeIntervals(intervals):\n    # return merged list\n    pass",
    testCases:[
      {args:[[[1,3],[2,6],[8,10],[15,18]]], expected:[[1,6],[8,10],[15,18]]},
      {args:[[[1,4],[4,5]]], expected:[[1,5]]},
      {args:[[[1,4],[0,4]]], expected:[[0,4]]}
    ],
    fnName:"mergeIntervals", points:20, deepEqual:true
  },
  {
    id:28, title:"Search in Rotated Sorted Array", difficulty:"medium", category:"search", acceptance:"38.5%",
    description:"Given a sorted array that has been rotated at some pivot, search for a target value. Return its index or -1. Array has distinct values.",
    constraints:"1 ≤ nums.length ≤ 5000",
    examples:[
      {input:"nums = [4,5,6,7,0,1,2], target = 0", output:"4"},
      {input:"nums = [4,5,6,7,0,1,2], target = 3", output:"-1"}
    ],
    hint:"Modified binary search: check which half is sorted and narrow down accordingly.",
    starterJS:"function searchRotated(nums, target) {\n  // return index or -1\n}",
    starterPY:"def searchRotated(nums, target):\n    # return index or -1\n    pass",
    testCases:[
      {args:[[4,5,6,7,0,1,2],0], expected:4},
      {args:[[4,5,6,7,0,1,2],3], expected:-1},
      {args:[[1],0], expected:-1},
      {args:[[1],1], expected:0}
    ],
    fnName:"searchRotated", points:20
  },
  {
    id:29, title:"Generate Parentheses", difficulty:"medium", category:"backtrack", acceptance:"72.4%",
    description:"Given <code>n</code> pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    constraints:"1 ≤ n ≤ 8",
    examples:[
      {input:"n = 3", output:'["((()))","(()())","(())()","()(())","()()()"]'},
      {input:"n = 1", output:'["()"]'}
    ],
    hint:"Backtracking: track open and close counts. Add '(' if open < n, ')' if close < open.",
    starterJS:"function generateParenthesis(n) {\n  // return array of strings\n}",
    starterPY:"def generateParenthesis(n):\n    # return list of strings\n    pass",
    testCases:[
      {args:[1], expected:["()"]},
      {args:[2], expected:["(())","()()"]},
      {args:[3], expected:["((()))","(()())","(())()","()(())","()()()"]}
    ],
    fnName:"generateParenthesis", points:20, unordered:true
  },
  {
    id:30, title:"Coin Change", difficulty:"medium", category:"dp", acceptance:"41.6%",
    description:"Given an integer array <code>coins</code> and an amount, return the fewest number of coins needed to make up that amount. If it's impossible, return -1.",
    constraints:"1 ≤ coins.length ≤ 12 · 0 ≤ amount ≤ 10⁴",
    examples:[
      {input:"coins = [1,5,10], amount = 12", output:"3", explain:"10+1+1=12"},
      {input:"coins = [2], amount = 3", output:"-1"}
    ],
    hint:"Bottom-up DP: dp[i] = min coins to make amount i. dp[0] = 0.",
    starterJS:"function coinChange(coins, amount) {\n  // return number\n}",
    starterPY:"def coinChange(coins, amount):\n    # return number\n    pass",
    testCases:[
      {args:[[1,5,10],12], expected:3},
      {args:[[2],3], expected:-1},
      {args:[[1],0], expected:0},
      {args:[[1,2,5],11], expected:3}
    ],
    fnName:"coinChange", points:20
  },
  {
    id:31, title:"Longest Palindromic Substring", difficulty:"medium", category:"string", acceptance:"32.4%",
    description:"Given a string <code>s</code>, return the longest palindromic substring in <code>s</code>.",
    constraints:"1 ≤ s.length ≤ 1000",
    examples:[
      {input:'s = "babad"', output:'"bab"', explain:'"aba" is also valid.'},
      {input:'s = "cbbd"', output:'"bb"'}
    ],
    hint:"Expand around center for each character (and between adjacent chars).",
    starterJS:"function longestPalindrome(s) {\n  // return string\n}",
    starterPY:"def longestPalindrome(s):\n    # return string\n    pass",
    testCases:[
      {args:["babad"], expected:["bab","aba"]},
      {args:["cbbd"], expected:["bb"]},
      {args:["a"], expected:["a"]},
      {args:["ac"], expected:["a","c"]}
    ],
    fnName:"longestPalindrome", points:20, multiAnswer:true
  },
  {
    id:32, title:"Subsets", difficulty:"medium", category:"backtrack", acceptance:"73.8%",
    description:"Given an integer array <code>nums</code> of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
    constraints:"1 ≤ nums.length ≤ 10",
    examples:[
      {input:"nums = [1,2,3]", output:"[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"}
    ],
    hint:"Backtracking: at each index, either include or exclude the element.",
    starterJS:"function subsets(nums) {\n  // return array of arrays\n}",
    starterPY:"def subsets(nums):\n    # return list of lists\n    pass",
    testCases:[
      {args:[[1,2,3]], expected:[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]},
      {args:[[0]], expected:[[],[0]]}
    ],
    fnName:"subsets", points:20, deepEqual:true, subsetCompare:true
  },
  {
    id:33, title:"Rotate Image", difficulty:"medium", category:"array", acceptance:"69.0%",
    description:"You are given an <code>n x n</code> 2D matrix representing an image, rotate the image by 90 degrees clockwise. Do it in-place.",
    constraints:"1 ≤ n ≤ 20",
    examples:[
      {input:"matrix = [[1,2,3],[4,5,6],[7,8,9]]", output:"[[7,4,1],[8,5,2],[9,6,3]]"}
    ],
    hint:"Transpose the matrix, then reverse each row.",
    starterJS:"function rotate(matrix) {\n  // modify matrix in-place\n}",
    starterPY:"def rotate(matrix):\n    # modify matrix in-place\n    pass",
    testCases:[
      {args:[[[1,2,3],[4,5,6],[7,8,9]]], expected:[[7,4,1],[8,5,2],[9,6,3]]},
      {args:[[[1,2],[3,4]]], expected:[[3,1],[4,2]]}
    ],
    fnName:"rotate", points:20, inPlace:true, inPlaceArg:0, deepEqual:true
  },
  {
    id:34, title:"House Robber", difficulty:"medium", category:"dp", acceptance:"48.5%",
    description:"Each house has a certain amount of money. Adjacent houses have security systems that will alert police if both are broken into the same night. Given array <code>nums</code> representing money at each house, return the maximum amount you can rob.",
    constraints:"1 ≤ nums.length ≤ 100",
    examples:[
      {input:"nums = [1,2,3,1]", output:"4", explain:"Rob house 1 ($1) and house 3 ($3)."},
      {input:"nums = [2,7,9,3,1]", output:"12"}
    ],
    hint:"DP: dp[i] = max(dp[i-1], dp[i-2] + nums[i]).",
    starterJS:"function rob(nums) {\n  // return number\n}",
    starterPY:"def rob(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[1,2,3,1]], expected:4},
      {args:[[2,7,9,3,1]], expected:12},
      {args:[[2,1,1,2]], expected:4}
    ],
    fnName:"rob", points:20
  },
  {
    id:35, title:"Kth Largest Element in Array", difficulty:"medium", category:"sort", acceptance:"65.2%",
    description:"Given an integer array <code>nums</code> and an integer <code>k</code>, return the k-th largest element. Note that it is the k-th largest element in sorted order, not the k-th distinct element.",
    constraints:"1 ≤ k ≤ nums.length ≤ 10⁵",
    examples:[
      {input:"nums = [3,2,1,5,6,4], k = 2", output:"5"},
      {input:"nums = [3,2,3,1,2,4,5,5,6], k = 4", output:"4"}
    ],
    hint:"Sort descending and return index k-1, or use quickselect for O(n) average.",
    starterJS:"function findKthLargest(nums, k) {\n  // return number\n}",
    starterPY:"def findKthLargest(nums, k):\n    # return number\n    pass",
    testCases:[
      {args:[[3,2,1,5,6,4],2], expected:5},
      {args:[[3,2,3,1,2,4,5,5,6],4], expected:4}
    ],
    fnName:"findKthLargest", points:20
  },
  {
    id:36, title:"Top K Frequent Elements", difficulty:"medium", category:"hash", acceptance:"63.6%",
    description:"Given an integer array <code>nums</code> and an integer <code>k</code>, return the k most frequent elements. You may return the answer in any order.",
    constraints:"1 ≤ nums.length ≤ 10⁵ · 1 ≤ k ≤ number of distinct elements",
    examples:[
      {input:"nums = [1,1,1,2,2,3], k = 2", output:"[1,2]"},
      {input:"nums = [1], k = 1", output:"[1]"}
    ],
    hint:"Use a hash map to count frequencies, then pick the top k.",
    starterJS:"function topKFrequent(nums, k) {\n  // return array\n}",
    starterPY:"def topKFrequent(nums, k):\n    # return list\n    pass",
    testCases:[
      {args:[[1,1,1,2,2,3],2], expected:[1,2]},
      {args:[[1],1], expected:[1]}
    ],
    fnName:"topKFrequent", points:20, unordered:true
  },
  {
    id:37, title:"Number of Islands", difficulty:"medium", category:"graph", acceptance:"55.8%",
    description:"Given an <code>m x n</code> 2D binary grid (values '1' land, '0' water), count the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.",
    constraints:"m == grid.length · n == grid[i].length · 1 ≤ m, n ≤ 300",
    examples:[
      {input:'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output:"3"}
    ],
    hint:"DFS/BFS: iterate through grid, when you find '1', do a DFS to mark the entire island as visited, increment count.",
    starterJS:"function numIslands(grid) {\n  // return number\n}",
    starterPY:"def numIslands(grid):\n    # return number\n    pass",
    testCases:[
      {args:[[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]], expected:1},
      {args:[[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]], expected:3}
    ],
    fnName:"numIslands", points:20
  },
  {
    id:38, title:"Spiral Matrix", difficulty:"medium", category:"array", acceptance:"44.5%",
    description:"Given an <code>m x n</code> matrix, return all elements of the matrix in spiral order.",
    constraints:"1 ≤ m, n ≤ 10",
    examples:[
      {input:"matrix = [[1,2,3],[4,5,6],[7,8,9]]", output:"[1,2,3,6,9,8,7,4,5]"}
    ],
    hint:"Use four boundaries: top, bottom, left, right. Traverse and shrink.",
    starterJS:"function spiralOrder(matrix) {\n  // return array\n}",
    starterPY:"def spiralOrder(matrix):\n    # return list\n    pass",
    testCases:[
      {args:[[[1,2,3],[4,5,6],[7,8,9]]], expected:[1,2,3,6,9,8,7,4,5]},
      {args:[[[1,2,3,4],[5,6,7,8],[9,10,11,12]]], expected:[1,2,3,4,8,12,11,10,9,5,6,7]}
    ],
    fnName:"spiralOrder", points:20
  },
  {
    id:39, title:"Decode Ways", difficulty:"medium", category:"dp", acceptance:"32.1%",
    description:"A message with letters A-Z can be encoded to numbers 1-26. Given a string <code>s</code> containing only digits, return the number of ways to decode it.",
    constraints:"1 ≤ s.length ≤ 100",
    examples:[
      {input:'s = "12"', output:"2", explain:'"AB" (1 2) or "L" (12)'},
      {input:'s = "226"', output:"3"},
      {input:'s = "06"', output:"0"}
    ],
    hint:"DP: dp[i] depends on whether s[i] is valid alone (1-9) and whether s[i-1..i] is valid (10-26).",
    starterJS:"function numDecodings(s) {\n  // return number\n}",
    starterPY:"def numDecodings(s):\n    # return number\n    pass",
    testCases:[
      {args:["12"], expected:2},
      {args:["226"], expected:3},
      {args:["06"], expected:0},
      {args:["11106"], expected:2}
    ],
    fnName:"numDecodings", points:20
  },
  {
    id:40, title:"Set Matrix Zeroes", difficulty:"medium", category:"array", acceptance:"50.6%",
    description:"Given an <code>m x n</code> integer matrix, if an element is 0, set its entire row and column to 0's. You must do it in-place.",
    constraints:"1 ≤ m, n ≤ 200",
    examples:[
      {input:"matrix = [[1,1,1],[1,0,1],[1,1,1]]", output:"[[1,0,1],[0,0,0],[1,0,1]]"}
    ],
    hint:"Record which rows and columns should be zeroed, then do a second pass.",
    starterJS:"function setZeroes(matrix) {\n  // modify in-place\n}",
    starterPY:"def setZeroes(matrix):\n    # modify in-place\n    pass",
    testCases:[
      {args:[[[1,1,1],[1,0,1],[1,1,1]]], expected:[[1,0,1],[0,0,0],[1,0,1]]},
      {args:[[[0,1,2,0],[3,4,5,2],[1,3,1,5]]], expected:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]}
    ],
    fnName:"setZeroes", points:20, inPlace:true, inPlaceArg:0, deepEqual:true
  },

  // ╔═══════════════════════════╗
  // ║    HARD  (20 problems)     ║
  // ╚═══════════════════════════╝

  {
    id:41, title:"Median of Two Sorted Arrays", difficulty:"hard", category:"search", acceptance:"36.1%",
    description:"Given two sorted arrays <code>nums1</code> and <code>nums2</code> of sizes m and n, return the median of the two sorted arrays. Overall run time complexity should be O(log(m+n)).",
    constraints:"0 ≤ m, n ≤ 1000 · 1 ≤ m+n",
    examples:[
      {input:"nums1 = [1,3], nums2 = [2]", output:"2.0"},
      {input:"nums1 = [1,2], nums2 = [3,4]", output:"2.5"}
    ],
    hint:"Binary search on the partition of the smaller array.",
    starterJS:"function findMedianSortedArrays(nums1, nums2) {\n  // return number\n}",
    starterPY:"def findMedianSortedArrays(nums1, nums2):\n    # return number\n    pass",
    testCases:[
      {args:[[1,3],[2]], expected:2.0},
      {args:[[1,2],[3,4]], expected:2.5},
      {args:[[0,0],[0,0]], expected:0.0},
      {args:[[],[1]], expected:1.0}
    ],
    fnName:"findMedianSortedArrays", points:30
  },
  {
    id:42, title:"Trapping Rain Water", difficulty:"hard", category:"array", acceptance:"58.7%",
    description:"Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water can be trapped after raining.",
    constraints:"n == height.length · 1 ≤ n ≤ 2×10⁴",
    examples:[
      {input:"height = [0,1,0,2,1,0,1,3,2,1,2,1]", output:"6"},
      {input:"height = [4,2,0,3,2,5]", output:"9"}
    ],
    hint:"Two-pointer approach: track leftMax and rightMax, add water from the shorter side.",
    starterJS:"function trap(height) {\n  // return number\n}",
    starterPY:"def trap(height):\n    # return number\n    pass",
    testCases:[
      {args:[[0,1,0,2,1,0,1,3,2,1,2,1]], expected:6},
      {args:[[4,2,0,3,2,5]], expected:9},
      {args:[[1,0,1]], expected:1}
    ],
    fnName:"trap", points:30
  },
  {
    id:43, title:"Merge k Sorted Lists", difficulty:"hard", category:"linked", acceptance:"49.8%",
    description:"You are given an array of <code>k</code> sorted arrays. Merge all arrays into one sorted array and return it.",
    constraints:"k == lists.length · 0 ≤ k ≤ 10⁴",
    examples:[
      {input:"lists = [[1,4,5],[1,3,4],[2,6]]", output:"[1,1,2,3,4,4,5,6]"}
    ],
    hint:"Use a min-heap / priority queue or divide-and-conquer merge.",
    starterJS:"function mergeKLists(lists) {\n  // return sorted array\n}",
    starterPY:"def mergeKLists(lists):\n    # return sorted list\n    pass",
    testCases:[
      {args:[[[1,4,5],[1,3,4],[2,6]]], expected:[1,1,2,3,4,4,5,6]},
      {args:[[]], expected:[]},
      {args:[[[]]], expected:[]}
    ],
    fnName:"mergeKLists", points:30
  },
  {
    id:44, title:"Longest Increasing Subsequence", difficulty:"hard", category:"dp", acceptance:"52.3%",
    description:"Given an integer array <code>nums</code>, return the length of the longest strictly increasing subsequence.",
    constraints:"1 ≤ nums.length ≤ 2500",
    examples:[
      {input:"nums = [10,9,2,5,3,7,101,18]", output:"4", explain:"LIS is [2,3,7,101]."},
      {input:"nums = [0,1,0,3,2,3]", output:"4"}
    ],
    hint:"DP O(n²): dp[i] = longest ending at i. Or binary search O(n log n) with a tails array.",
    starterJS:"function lengthOfLIS(nums) {\n  // return number\n}",
    starterPY:"def lengthOfLIS(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[10,9,2,5,3,7,101,18]], expected:4},
      {args:[[0,1,0,3,2,3]], expected:4},
      {args:[[7,7,7,7,7]], expected:1}
    ],
    fnName:"lengthOfLIS", points:30
  },
  {
    id:45, title:"Word Search", difficulty:"hard", category:"backtrack", acceptance:"40.0%",
    description:"Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, return <code>true</code> if word exists in the grid. The word can be constructed from adjacent cells (horizontally or vertically). Same cell may not be used more than once.",
    constraints:"1 ≤ m, n ≤ 6 · 1 ≤ word.length ≤ 15",
    examples:[
      {input:'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output:"true"},
      {input:'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output:"true"}
    ],
    hint:"DFS backtracking from each cell. Mark visited cells, unmark when backtracking.",
    starterJS:"function exist(board, word) {\n  // return boolean\n}",
    starterPY:"def exist(board, word):\n    # return boolean\n    pass",
    testCases:[
      {args:[[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"], expected:true},
      {args:[[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"], expected:true},
      {args:[[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"], expected:false}
    ],
    fnName:"exist", points:30
  },
  {
    id:46, title:"Minimum Window Substring", difficulty:"hard", category:"string", acceptance:"40.7%",
    description:"Given two strings <code>s</code> and <code>t</code>, return the minimum window substring of <code>s</code> such that every character in <code>t</code> (including duplicates) is included. If there is no such window, return empty string.",
    constraints:"1 ≤ s.length, t.length ≤ 10⁵",
    examples:[
      {input:'s = "ADOBECODEBANC", t = "ABC"', output:'"BANC"'},
      {input:'s = "a", t = "a"', output:'"a"'}
    ],
    hint:"Sliding window with a frequency count. Expand right to satisfy, shrink left to minimize.",
    starterJS:"function minWindow(s, t) {\n  // return string\n}",
    starterPY:"def minWindow(s, t):\n    # return string\n    pass",
    testCases:[
      {args:["ADOBECODEBANC","ABC"], expected:"BANC"},
      {args:["a","a"], expected:"a"},
      {args:["a","aa"], expected:""}
    ],
    fnName:"minWindow", points:30
  },
  {
    id:47, title:"Largest Rectangle in Histogram", difficulty:"hard", category:"stack", acceptance:"42.4%",
    description:"Given an array of integers <code>heights</code> representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    constraints:"1 ≤ heights.length ≤ 10⁵",
    examples:[
      {input:"heights = [2,1,5,6,2,3]", output:"10", explain:"Rectangle in bars of height 5 and 6 → 5×2=10."}
    ],
    hint:"Use a stack to find, for each bar, how far it extends left and right.",
    starterJS:"function largestRectangleArea(heights) {\n  // return number\n}",
    starterPY:"def largestRectangleArea(heights):\n    # return number\n    pass",
    testCases:[
      {args:[[2,1,5,6,2,3]], expected:10},
      {args:[[2,4]], expected:4},
      {args:[[1]], expected:1}
    ],
    fnName:"largestRectangleArea", points:30
  },
  {
    id:48, title:"Maximal Square", difficulty:"hard", category:"dp", acceptance:"44.5%",
    description:"Given an <code>m x n</code> binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.",
    constraints:"1 ≤ m, n ≤ 300",
    examples:[
      {input:'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', output:"4"}
    ],
    hint:"dp[i][j] = side length of max square ending at (i,j). dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1.",
    starterJS:"function maximalSquare(matrix) {\n  // return number (area)\n}",
    starterPY:"def maximalSquare(matrix):\n    # return number (area)\n    pass",
    testCases:[
      {args:[[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]], expected:4},
      {args:[[["0","1"],["1","0"]]], expected:1},
      {args:[[["0"]]], expected:0}
    ],
    fnName:"maximalSquare", points:30
  },
  {
    id:49, title:"Edit Distance", difficulty:"hard", category:"dp", acceptance:"53.4%",
    description:"Given two strings <code>word1</code> and <code>word2</code>, return the minimum number of operations required to convert word1 to word2. You can insert, delete, or replace a character.",
    constraints:"0 ≤ word.length ≤ 500",
    examples:[
      {input:'word1 = "horse", word2 = "ros"', output:"3"},
      {input:'word1 = "intention", word2 = "execution"', output:"5"}
    ],
    hint:"Classic DP: dp[i][j] = edit distance between word1[0..i-1] and word2[0..j-1].",
    starterJS:"function minDistance(word1, word2) {\n  // return number\n}",
    starterPY:"def minDistance(word1, word2):\n    # return number\n    pass",
    testCases:[
      {args:["horse","ros"], expected:3},
      {args:["intention","execution"], expected:5},
      {args:["","a"], expected:1}
    ],
    fnName:"minDistance", points:30
  },
  {
    id:50, title:"Word Break", difficulty:"hard", category:"dp", acceptance:"45.4%",
    description:"Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    constraints:"1 ≤ s.length ≤ 300",
    examples:[
      {input:'s = "leetcode", wordDict = ["leet","code"]', output:"true"},
      {input:'s = "applepenapple", wordDict = ["apple","pen"]', output:"true"}
    ],
    hint:"DP: dp[i] = true if s[0..i-1] can be segmented. Check all words that end at position i.",
    starterJS:"function wordBreak(s, wordDict) {\n  // return boolean\n}",
    starterPY:"def wordBreak(s, wordDict):\n    # return boolean\n    pass",
    testCases:[
      {args:["leetcode",["leet","code"]], expected:true},
      {args:["applepenapple",["apple","pen"]], expected:true},
      {args:["catsandog",["cats","dog","sand","and","cat"]], expected:false}
    ],
    fnName:"wordBreak", points:30
  },
  {
    id:51, title:"Maximum Product Subarray", difficulty:"hard", category:"array", acceptance:"34.6%",
    description:"Given an integer array <code>nums</code>, find a subarray that has the largest product, and return the product.",
    constraints:"1 ≤ nums.length ≤ 2×10⁴",
    examples:[
      {input:"nums = [2,3,-2,4]", output:"6", explain:"[2,3] has product 6."},
      {input:"nums = [-2,0,-1]", output:"0"}
    ],
    hint:"Track both the current max and current min product (a negative times a negative can become max).",
    starterJS:"function maxProduct(nums) {\n  // return number\n}",
    starterPY:"def maxProduct(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[2,3,-2,4]], expected:6},
      {args:[[-2,0,-1]], expected:0},
      {args:[[-2,3,-4]], expected:24}
    ],
    fnName:"maxProduct", points:30
  },
  {
    id:52, title:"Serialize and Deserialize Binary Tree", difficulty:"hard", category:"tree", acceptance:"55.1%",
    description:"Design an algorithm to serialize a binary tree to a string and deserialize that string back to the original tree. For this problem, use array representation: given a tree as array (BFS order, null for missing nodes), serialize to string and deserialize back.",
    constraints:"0 ≤ nodes ≤ 10⁴",
    examples:[
      {input:"root = [1,2,3,null,null,4,5]", output:'"1,2,3,null,null,4,5"'}
    ],
    hint:"Use BFS with a queue. Serialize nulls explicitly.",
    starterJS:"function serialize(arr) {\n  // convert array to string\n}\n\nfunction deserialize(str) {\n  // convert string back to array\n}",
    starterPY:"def serialize(arr):\n    # convert list to string\n    pass\n\ndef deserialize(s):\n    # convert string back to list\n    pass",
    testCases:[
      {args:[[1,2,3,null,null,4,5]], expected:[1,2,3,null,null,4,5]},
      {args:[[]], expected:[]},
      {args:[[1]], expected:[1]}
    ],
    fnName:"_serdeTest", points:30, customValidator: true
  },
  {
    id:53, title:"Course Schedule", difficulty:"hard", category:"graph", acceptance:"45.4%",
    description:"There are <code>numCourses</code> courses labeled 0 to numCourses-1. You are given an array <code>prerequisites</code> where prerequisites[i] = [a, b] means you must take b before a. Return true if you can finish all courses (check for cycles).",
    constraints:"1 ≤ numCourses ≤ 2000",
    examples:[
      {input:"numCourses = 2, prerequisites = [[1,0]]", output:"true"},
      {input:"numCourses = 2, prerequisites = [[1,0],[0,1]]", output:"false"}
    ],
    hint:"Topological sort using BFS (Kahn's algorithm) or DFS cycle detection.",
    starterJS:"function canFinish(numCourses, prerequisites) {\n  // return boolean\n}",
    starterPY:"def canFinish(numCourses, prerequisites):\n    # return boolean\n    pass",
    testCases:[
      {args:[2,[[1,0]]], expected:true},
      {args:[2,[[1,0],[0,1]]], expected:false},
      {args:[3,[[1,0],[2,1]]], expected:true},
      {args:[1,[]], expected:true}
    ],
    fnName:"canFinish", points:30
  },
  {
    id:54, title:"Longest Consecutive Sequence", difficulty:"hard", category:"hash", acceptance:"48.6%",
    description:"Given an unsorted array of integers <code>nums</code>, return the length of the longest consecutive elements sequence. You must write an O(n) algorithm.",
    constraints:"0 ≤ nums.length ≤ 10⁵",
    examples:[
      {input:"nums = [100,4,200,1,3,2]", output:"4", explain:"The longest consecutive sequence is [1,2,3,4]."}
    ],
    hint:"Use a Set. For each number that has no predecessor (num-1), count how long the streak goes.",
    starterJS:"function longestConsecutive(nums) {\n  // return number\n}",
    starterPY:"def longestConsecutive(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[100,4,200,1,3,2]], expected:4},
      {args:[[0,3,7,2,5,8,4,6,0,1]], expected:9},
      {args:[[]], expected:0}
    ],
    fnName:"longestConsecutive", points:30
  },
  {
    id:55, title:"N-Queens", difficulty:"hard", category:"backtrack", acceptance:"63.8%",
    description:"Place <code>n</code> queens on an <code>n×n</code> chessboard so no two queens attack each other. Return the number of distinct solutions.",
    constraints:"1 ≤ n ≤ 9",
    examples:[
      {input:"n = 4", output:"2"},
      {input:"n = 1", output:"1"}
    ],
    hint:"Backtracking: place queens row by row, check column and diagonal conflicts.",
    starterJS:"function totalNQueens(n) {\n  // return number of solutions\n}",
    starterPY:"def totalNQueens(n):\n    # return number of solutions\n    pass",
    testCases:[
      {args:[1], expected:1},
      {args:[4], expected:2},
      {args:[5], expected:10},
      {args:[8], expected:92}
    ],
    fnName:"totalNQueens", points:30
  },
  {
    id:56, title:"Sliding Window Maximum", difficulty:"hard", category:"stack", acceptance:"46.3%",
    description:"Given an array <code>nums</code> and a sliding window of size <code>k</code>, return the max value in each window position as the window slides from left to right.",
    constraints:"1 ≤ nums.length ≤ 10⁵ · 1 ≤ k ≤ nums.length",
    examples:[
      {input:"nums = [1,3,-1,-3,5,3,6,7], k = 3", output:"[3,3,5,5,6,7]"}
    ],
    hint:"Use a deque (monotonic queue) that stores indices of useful elements in decreasing order.",
    starterJS:"function maxSlidingWindow(nums, k) {\n  // return array of maximums\n}",
    starterPY:"def maxSlidingWindow(nums, k):\n    # return list of maximums\n    pass",
    testCases:[
      {args:[[1,3,-1,-3,5,3,6,7],3], expected:[3,3,5,5,6,7]},
      {args:[[1],1], expected:[1]},
      {args:[[9,11],2], expected:[11]}
    ],
    fnName:"maxSlidingWindow", points:30
  },
  {
    id:57, title:"Regular Expression Matching", difficulty:"hard", category:"dp", acceptance:"28.2%",
    description:"Given a string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for '.' (any single char) and '*' (zero or more of the preceding element). The matching should cover the entire string.",
    constraints:"1 ≤ s.length ≤ 20 · 1 ≤ p.length ≤ 20",
    examples:[
      {input:'s = "aa", p = "a"', output:"false"},
      {input:'s = "aa", p = "a*"', output:"true"},
      {input:'s = "ab", p = ".*"', output:"true"}
    ],
    hint:"2D DP: dp[i][j] = whether s[0..i-1] matches p[0..j-1]. Handle '*' by considering 0 or more matches.",
    starterJS:"function isMatch(s, p) {\n  // return boolean\n}",
    starterPY:"def isMatch(s, p):\n    # return boolean\n    pass",
    testCases:[
      {args:["aa","a"], expected:false},
      {args:["aa","a*"], expected:true},
      {args:["ab",".*"], expected:true},
      {args:["mississippi","mis*is*p*."], expected:false}
    ],
    fnName:"isMatch", points:30
  },
  {
    id:58, title:"Longest Valid Parentheses", difficulty:"hard", category:"stack", acceptance:"32.7%",
    description:"Given a string containing just '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
    constraints:"0 ≤ s.length ≤ 3×10⁴",
    examples:[
      {input:'s = "(()"', output:"2"},
      {input:'s = ")()())"', output:"4"}
    ],
    hint:"Use a stack to track indices. Push -1 as base. When stack has only base, push current index.",
    starterJS:"function longestValidParentheses(s) {\n  // return number\n}",
    starterPY:"def longestValidParentheses(s):\n    # return number\n    pass",
    testCases:[
      {args:["(()"], expected:2},
      {args:[")()())"], expected:4},
      {args:[""], expected:0},
      {args:["()(()"], expected:2}
    ],
    fnName:"longestValidParentheses", points:30
  },
  {
    id:59, title:"Jump Game II", difficulty:"hard", category:"greedy", acceptance:"39.7%",
    description:"Given a 0-indexed array of integers <code>nums</code>, where nums[i] represents the maximum jump length from position i. Return the minimum number of jumps to reach the last index. You can always reach the last index.",
    constraints:"1 ≤ nums.length ≤ 10⁴",
    examples:[
      {input:"nums = [2,3,1,1,4]", output:"2", explain:"Jump 1 step from index 0 to 1, then 3 steps to the last index."},
      {input:"nums = [2,3,0,1,4]", output:"2"}
    ],
    hint:"Greedy BFS: track the farthest you can reach in each 'level' of jumps.",
    starterJS:"function jump(nums) {\n  // return number\n}",
    starterPY:"def jump(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[2,3,1,1,4]], expected:2},
      {args:[[2,3,0,1,4]], expected:2},
      {args:[[1]], expected:0}
    ],
    fnName:"jump", points:30
  },
  {
    id:60, title:"First Missing Positive", difficulty:"hard", category:"array", acceptance:"36.6%",
    description:"Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.",
    constraints:"1 ≤ nums.length ≤ 10⁵",
    examples:[
      {input:"nums = [1,2,0]", output:"3"},
      {input:"nums = [3,4,-1,1]", output:"2"},
      {input:"nums = [7,8,9,11,12]", output:"1"}
    ],
    hint:"Cyclic sort: place each positive number at its correct index (nums[i] should be i+1), then find the first mismatch.",
    starterJS:"function firstMissingPositive(nums) {\n  // return number\n}",
    starterPY:"def firstMissingPositive(nums):\n    # return number\n    pass",
    testCases:[
      {args:[[1,2,0]], expected:3},
      {args:[[3,4,-1,1]], expected:2},
      {args:[[7,8,9,11,12]], expected:1},
      {args:[[1]], expected:2}
    ],
    fnName:"firstMissingPositive", points:30
  }
];

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════
let currentProblem = null;
let timerInterval = null;
let seconds = 0;
let currentFilter = 'all';
let currentCategory = 'all';

// DOM refs
const $  = id => document.getElementById(id);
const solvedCountEl = $('solvedCount');
const streakCountEl = $('streakCount');
const pointsCountEl = $('pointsCount');
const progressFill  = $('progressFill');
const progressText  = $('progressText');
const codeEditor    = $('codeEditor');
const lineNums      = $('lineNums');
const timerEl       = $('timer');
const runBtn        = $('runBtn');
const submitBtn     = $('submitBtn');
const resetBtn      = $('resetBtn');
const resultsFrame  = $('resultsFrame');
const resultsBody   = $('resultsBody');
const problemList   = $('problemList');
const detailBody    = $('detailBody');
const detailTab     = $('detailTab');
const langSelect    = $('langSelect');

// ═══════════════════════════════════════════════════════════
// PERSISTENCE (localStorage)
// ═══════════════════════════════════════════════════════════
function loadData() {
  const raw = localStorage.getItem('hunter_codelab_v2');
  return raw ? JSON.parse(raw) : { solved:{}, count:0, streak:0, xp:0, codes:{}, lastDate:null };
}

let data = loadData();

function persist() {
  localStorage.setItem('hunter_codelab_v2', JSON.stringify(data));
}

function syncSolvedFlags() {
  problems.forEach(p => { p.solved = !!data.solved[p.id]; });
}

function updateStats() {
  const total = problems.length;
  data.count = Object.keys(data.solved).length;
  solvedCountEl.textContent = data.count;
  streakCountEl.textContent = data.streak;
  pointsCountEl.textContent = data.xp;
  const pct = Math.round((data.count / total) * 100);
  progressFill.style.width = pct + '%';
  progressText.textContent = data.count + '/' + total;
}

// ═══════════════════════════════════════════════════════════
// TIMER
// ═══════════════════════════════════════════════════════════
function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
}

function startTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  timerEl.textContent = fmtTime(0);
  timerEl.className = 'timer-display';
  timerInterval = setInterval(() => {
    seconds++;
    timerEl.textContent = fmtTime(seconds);
    if (seconds > 600) timerEl.className = 'timer-display danger';
    else if (seconds > 300) timerEl.className = 'timer-display warning';
  }, 1000);
}

function stopTimer() { clearInterval(timerInterval); }

// ═══════════════════════════════════════════════════════════
// LINE NUMBERS
// ═══════════════════════════════════════════════════════════
function updateLineNumbers() {
  const lines = codeEditor.value.split('\n').length;
  lineNums.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');
}

// ═══════════════════════════════════════════════════════════
// SYNTAX HIGHLIGHTING (powered by Highlight.js)
// ═══════════════════════════════════════════════════════════
function applySyntaxHighlighting(code, language) {
  const langMap = {
    'javascript': 'javascript',
    'python': 'python',
    'cpp': 'cpp'
  };
  const hljsLang = langMap[language] || 'javascript';
  
  try {
    const result = hljs.highlight(code, { language: hljsLang });
    return result.value;
  } catch (e) {
    // Fallback: just escape HTML and return plain text
    return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

function updateSyntaxHighlighting() {
  let code = codeEditor.value;
  
  // Clean up any accidental HTML content that might have been pasted in
  code = code.replace(/<[^>]*>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  
  // Update textarea if cleaned
  if (code !== codeEditor.value) {
    codeEditor.value = code;
  }
  
  const language = langSelect.value;
  const highlighted = applySyntaxHighlighting(code, language);
  $('syntaxHighlight').innerHTML = highlighted;
  
  // Sync scroll position
  const syntaxElement = $('syntaxHighlight');
  syntaxElement.scrollTop = codeEditor.scrollTop;
  syntaxElement.scrollLeft = codeEditor.scrollLeft;
}

codeEditor.addEventListener('input', () => {
  updateLineNumbers();
  updateSyntaxHighlighting();
  saveCode();
});

codeEditor.addEventListener('scroll', () => {
  lineNums.scrollTop = codeEditor.scrollTop;
  const syntaxElement = $('syntaxHighlight');
  syntaxElement.scrollTop = codeEditor.scrollTop;
  syntaxElement.scrollLeft = codeEditor.scrollLeft;
});

// Tab key support
codeEditor.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = codeEditor.selectionStart;
    const end = codeEditor.selectionEnd;
    codeEditor.value = codeEditor.value.substring(0, start) + '  ' + codeEditor.value.substring(end);
    codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
    updateLineNumbers();
  updateSyntaxHighlighting();
  }
});

// ═══════════════════════════════════════════════════════════
// RENDER PROBLEM LIST
// ═══════════════════════════════════════════════════════════
function renderList() {
  const q = $('searchBar').value.toLowerCase();

  const filtered = problems.filter(p => {
    if (currentFilter === 'solved') return p.solved;
    if (currentFilter === 'unsolved') return !p.solved;
    const diffOk = currentFilter === 'all' || p.difficulty === currentFilter;
    const catOk = currentCategory === 'all' || p.category === currentCategory;
    const searchOk = !q || p.title.toLowerCase().includes(q) || p.category.includes(q);
    return diffOk && catOk && searchOk;
  });

  problemList.innerHTML = filtered.map(p => `
    <div class="p-card ${currentProblem?.id === p.id ? 'active' : ''}" data-id="${p.id}">
      <div class="p-left">
        <span class="p-num">${p.id}.</span>
        <span class="p-name">${p.title}</span>
        ${p.solved ? '<span class="p-solved">✓</span>' : ''}
      </div>
      <span class="diff-badge diff-${p.difficulty}">${p.difficulty}</span>
    </div>
  `).join('');

  problemList.querySelectorAll('.p-card').forEach(card => {
    card.addEventListener('click', () => loadProblem(+card.dataset.id));
  });
}

// ═══════════════════════════════════════════════════════════
// LOAD PROBLEM
// ═══════════════════════════════════════════════════════════
function loadProblem(id) {
  stopTimer();
  currentProblem = problems.find(p => p.id === id);
  if (!currentProblem) return;

  detailTab.textContent = `problem_${id}.md`;

  const exHTML = currentProblem.examples.map((ex, i) => `
    <div class="ex-item">
      <div class="ex-label">Example ${i + 1}</div>
      <div><strong>Input:</strong> <code>${ex.input}</code></div>
      <div class="ex-output"><strong>Output:</strong> <code>${ex.output}</code></div>
      ${ex.explain ? `<div class="ex-explain">${ex.explain}</div>` : ''}
    </div>
  `).join('');

  detailBody.innerHTML = `
    <h2><span class="diff-badge diff-${currentProblem.difficulty}">${currentProblem.difficulty}</span> ${currentProblem.id}. ${currentProblem.title}</h2>
    <p class="desc">${currentProblem.description}</p>
    <div class="constraint"><strong>Constraints:</strong> ${currentProblem.constraints}</div>
    <div class="examples-block">
      <h4>Examples</h4>
      ${exHTML}
    </div>
    <button class="hint-toggle" onclick="toggleHint()">💡 Show Hint</button>
    <div class="hint-text" id="hintText">${currentProblem.hint}</div>
  `;

  // Load code
  const lang = langSelect.value;
  const savedCode = data.codes[id + '_' + lang];
  if (savedCode) {
    codeEditor.value = savedCode;
  } else {
    codeEditor.value = lang === 'python' ? currentProblem.starterPY : currentProblem.starterJS;
  }

  updateLineNumbers();
  updateSyntaxHighlighting();
  runBtn.disabled = false;
  submitBtn.disabled = false;
  resetBtn.disabled = false;
  resultsFrame.classList.remove('show');
  renderList();
  startTimer();
}

function toggleHint() {
  const el = $('hintText');
  el.classList.toggle('show');
}

// Persist code on language change
langSelect.addEventListener('change', () => {
  if (!currentProblem) return;
  const lang = langSelect.value;
  const savedCode = data.codes[currentProblem.id + '_' + lang];
  if (savedCode) {
    codeEditor.value = savedCode;
  } else {
    codeEditor.value = lang === 'python' ? currentProblem.starterPY : currentProblem.starterJS;
  }
  updateLineNumbers();
  updateSyntaxHighlighting();
});

function saveCode() {
  if (!currentProblem) return;
  const lang = langSelect.value;
  data.codes[currentProblem.id + '_' + lang] = codeEditor.value;
  persist();
}

// ═══════════════════════════════════════════════════════════
// CODE EXECUTION ENGINE (JavaScript only — real eval)
// Python mode shows a simulated message
// ═══════════════════════════════════════════════════════════
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return a == b;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  if (typeof a === 'object') {
    const ka = Object.keys(a), kb = Object.keys(b);
    if (ka.length !== kb.length) return false;
    return ka.every(k => deepEqual(a[k], b[k]));
  }
  return false;
}

function arraysEqualUnordered(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return deepEqual(a, b);
  if (a.length !== b.length) return false;
  const sortA = [...a].sort();
  const sortB = [...b].sort();
  return deepEqual(sortA, sortB);
}

function subsetsEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return deepEqual(a, b);
  if (a.length !== b.length) return false;
  const sA = a.map(x => JSON.stringify(Array.isArray(x) ? [...x].sort() : x)).sort();
  const sB = b.map(x => JSON.stringify(Array.isArray(x) ? [...x].sort() : x)).sort();
  return deepEqual(sA, sB);
}

function groupsEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  const norm = g => g.map(arr => [...arr].sort().join(',')).sort();
  return deepEqual(norm(a), norm(b));
}

function executeTests(code, problem) {
  const results = [];

  if (langSelect.value === 'python') {
    return { results: [], pythonMode: true };
  }

  for (let i = 0; i < problem.testCases.length; i++) {
    const tc = problem.testCases[i];
    const argsCopy = JSON.parse(JSON.stringify(tc.args));
    try {
      // Build function from code
      const fn = new Function(code + `\nreturn ${problem.fnName};`)();

      // Handle serialization special case
      if (problem.customValidator && problem.fnName === '_serdeTest') {
        const customFn = new Function(code + `\nreturn function(arr) { return deserialize(serialize(arr)); };`)();
        const got = customFn(...argsCopy);
        const pass = deepEqual(got, tc.expected);
        results.push({ index: i, pass, input: JSON.stringify(tc.args), expected: JSON.stringify(tc.expected), got: JSON.stringify(got) });
        continue;
      }

      let got;
      if (problem.inPlace) {
        fn(...argsCopy);
        got = argsCopy[problem.inPlaceArg];
      } else {
        got = fn(...argsCopy);
      }

      let pass = false;
      if (problem.multiAnswer) {
        // multiple valid answers
        pass = Array.isArray(tc.expected) ? tc.expected.some(e => deepEqual(got, e) || got === e) : deepEqual(got, tc.expected);
      } else if (problem.subsetCompare) {
        pass = subsetsEqual(got, tc.expected);
      } else if (problem.groupCompare) {
        pass = groupsEqual(got, tc.expected);
      } else if (problem.unordered) {
        pass = arraysEqualUnordered(got, tc.expected);
      } else if (problem.deepEqual) {
        pass = deepEqual(got, tc.expected);
      } else {
        pass = deepEqual(got, tc.expected);
      }

      results.push({ index: i, pass, input: JSON.stringify(tc.args), expected: JSON.stringify(tc.expected), got: JSON.stringify(got) });
    } catch (err) {
      results.push({ index: i, pass: false, input: JSON.stringify(tc.args), expected: JSON.stringify(tc.expected), got: 'Error: ' + err.message, error: true });
    }
  }

  return { results, pythonMode: false };
}

// ═══════════════════════════════════════════════════════════
// RUN / SUBMIT
// ═══════════════════════════════════════════════════════════
function showResults(title, resultData, isSubmit) {
  resultsFrame.classList.add('show');
  const { results, pythonMode } = resultData;

  if (pythonMode) {
    resultsBody.innerHTML = `
      <div class="result-msg pass">
        <strong>🐍 Python Mode</strong>
        Python execution requires a backend runtime. Switch to JavaScript for real-time code execution and test validation.
      </div>`;
    return false;
  }

  const passed = results.filter(r => r.pass).length;
  const total = results.length;
  const allPass = passed === total;

  const rowsHTML = results.map(r => `
    <div class="test-case-row">
      <span class="${r.pass ? 'tc-pass' : 'tc-fail'}">${r.pass ? '✓' : '✗'}</span>
      <span class="tc-info">
        Case ${r.index + 1}: Input ${r.input.substring(0, 60)}${r.input.length > 60 ? '...' : ''}
        → Expected <code>${r.expected.substring(0, 40)}</code>
        ${!r.pass ? ` Got <code style="color:var(--red)">${r.got.substring(0, 40)}</code>` : ''}
      </span>
    </div>
  `).join('');

  const verdict = allPass
    ? `<div class="result-msg pass"><strong>✅ ${isSubmit ? 'Accepted!' : 'All Tests Passed'}</strong>Passed ${passed}/${total} test cases${isSubmit ? ' — Time: ' + fmtTime(seconds) : ''}</div>`
    : `<div class="result-msg fail"><strong>❌ ${isSubmit ? 'Wrong Answer' : 'Some Tests Failed'}</strong>Passed ${passed}/${total} test cases</div>`;

  resultsBody.innerHTML = verdict + rowsHTML;
  return allPass;
}

function runCode() {
  if (!currentProblem) return;
  const result = executeTests(codeEditor.value, currentProblem);
  showResults('Run Results', result, false);
}

function submitCode() {
  if (!currentProblem) return;
  const result = executeTests(codeEditor.value, currentProblem);
  const allPass = showResults('Submission', result, true);

  if (allPass && !result.pythonMode && !currentProblem.solved) {
    currentProblem.solved = true;
    data.solved[currentProblem.id] = true;
    data.xp += currentProblem.points;

    // Streak logic (by date)
    const today = new Date().toDateString();
    if (data.lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      data.streak = (data.lastDate === yesterday) ? data.streak + 1 : 1;
      data.lastDate = today;
    }

    persist();
    updateStats();
    renderList();
    stopTimer();
  }
}

function resetCode() {
  if (!currentProblem) return;
  const lang = langSelect.value;
  codeEditor.value = lang === 'python' ? currentProblem.starterPY : currentProblem.starterJS;
  updateLineNumbers();
  updateSyntaxHighlighting();
  saveCode();
  resultsFrame.classList.remove('show');
}

// ═══════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════
$('terminalMenuBtn').addEventListener('click', () => {
  $('terminalNavLinks').classList.toggle('open');
});

$('searchBar').addEventListener('input', renderList);

document.querySelectorAll('.fbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.f;
    renderList();
  });
});

$('catSelect').addEventListener('change', (e) => {
  currentCategory = e.target.value;
  renderList();
});

runBtn.addEventListener('click', runCode);
submitBtn.addEventListener('click', submitCode);
resetBtn.addEventListener('click', resetCode);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    runCode();
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Enter') {
    e.preventDefault();
    submitCode();
  }
});

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
function init() {
  syncSolvedFlags();
  updateStats();
  renderList();
  updateLineNumbers();
  updateSyntaxHighlighting();
}

init();
