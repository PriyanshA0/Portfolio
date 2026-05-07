// ═══════════════════════════════════════════════════════════════════════════════
// 60 BASIC PROGRAMMING PROBLEMS
// Categories: Operators, Loops, Functions, Conditions, Arrays, Strings, OOP
// ═══════════════════════════════════════════════════════════════════════════════

const problems = [
  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║                        OPERATORS (10 problems)                        ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    id: 1, title: "Add Two Numbers", category: "operators", difficulty: "easy",
    description: "Write a function that takes two numbers and returns their sum.",
    examples: [
      { input: "a = 5, b = 3", output: "8" },
      { input: "a = -2, b = 7", output: "5" }
    ],
    hint: "Use the + operator to add two numbers.",
    starterJS: "function add(a, b) {\n  // Write your code here\n  \n}",
    starterPY: "def add(a, b):\n    # Write your code here\n    pass",
    starterCPP: "#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5, 3], expected: 8 },
      { args: [-2, 7], expected: 5 },
      { args: [0, 0], expected: 0 },
      { args: [100, 200], expected: 300 }
    ],
    fnName: "add", points: 5
  },
  {
    id: 2, title: "Multiply Two Numbers", category: "operators", difficulty: "easy",
    description: "Write a function that multiplies two numbers and returns the result.",
    examples: [
      { input: "a = 4, b = 7", output: "28" },
      { input: "a = -3, b = 5", output: "-15" }
    ],
    hint: "Use the * operator for multiplication.",
    starterJS: "function multiply(a, b) {\n  // Write your code here\n  \n}",
    starterPY: "def multiply(a, b):\n    # Write your code here\n    pass",
    starterCPP: "int multiply(int a, int b) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [4, 7], expected: 28 },
      { args: [-3, 5], expected: -15 },
      { args: [0, 100], expected: 0 },
      { args: [12, 12], expected: 144 }
    ],
    fnName: "multiply", points: 5
  },
  {
    id: 3, title: "Check Even or Odd", category: "operators", difficulty: "easy",
    description: "Write a function that returns true if a number is even, false if odd.",
    examples: [
      { input: "n = 4", output: "true" },
      { input: "n = 7", output: "false" }
    ],
    hint: "Use the modulo operator (%) to check if a number divides evenly by 2.",
    starterJS: "function isEven(n) {\n  // Write your code here\n  \n}",
    starterPY: "def isEven(n):\n    # Write your code here\n    pass",
    starterCPP: "bool isEven(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [4], expected: true },
      { args: [7], expected: false },
      { args: [0], expected: true },
      { args: [-6], expected: true }
    ],
    fnName: "isEven", points: 5
  },
  {
    id: 4, title: "Calculate Average", category: "operators", difficulty: "easy",
    description: "Write a function that calculates the average of three numbers.",
    examples: [
      { input: "a = 10, b = 20, c = 30", output: "20" },
      { input: "a = 5, b = 10, c = 15", output: "10" }
    ],
    hint: "Add all three numbers and divide by 3.",
    starterJS: "function average(a, b, c) {\n  // Write your code here\n  \n}",
    starterPY: "def average(a, b, c):\n    # Write your code here\n    pass",
    starterCPP: "double average(int a, int b, int c) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [10, 20, 30], expected: 20 },
      { args: [5, 10, 15], expected: 10 },
      { args: [0, 0, 6], expected: 2 },
      { args: [7, 7, 7], expected: 7 }
    ],
    fnName: "average", points: 5
  },
  {
    id: 5, title: "Find Remainder", category: "operators", difficulty: "easy",
    description: "Write a function that returns the remainder when dividing two numbers.",
    examples: [
      { input: "a = 17, b = 5", output: "2" },
      { input: "a = 20, b = 4", output: "0" }
    ],
    hint: "Use the modulo operator (%).",
    starterJS: "function remainder(a, b) {\n  // Write your code here\n  \n}",
    starterPY: "def remainder(a, b):\n    # Write your code here\n    pass",
    starterCPP: "int remainder(int a, int b) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [17, 5], expected: 2 },
      { args: [20, 4], expected: 0 },
      { args: [15, 7], expected: 1 },
      { args: [100, 9], expected: 1 }
    ],
    fnName: "remainder", points: 5
  },
  {
    id: 6, title: "Swap Two Numbers", category: "operators", difficulty: "easy",
    description: "Write a function that swaps two numbers and returns them as an array [b, a].",
    examples: [
      { input: "a = 5, b = 10", output: "[10, 5]" },
      { input: "a = 1, b = 2", output: "[2, 1]" }
    ],
    hint: "Return an array with b first, then a.",
    starterJS: "function swap(a, b) {\n  // Write your code here\n  \n}",
    starterPY: "def swap(a, b):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> swap(int a, int b) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5, 10], expected: [10, 5] },
      { args: [1, 2], expected: [2, 1] },
      { args: [0, 100], expected: [100, 0] },
      { args: [-5, 5], expected: [5, -5] }
    ],
    fnName: "swap", points: 5
  },
  {
    id: 7, title: "Absolute Value", category: "operators", difficulty: "easy",
    description: "Write a function that returns the absolute value of a number (always positive).",
    examples: [
      { input: "n = -15", output: "15" },
      { input: "n = 42", output: "42" }
    ],
    hint: "If the number is negative, multiply by -1.",
    starterJS: "function absolute(n) {\n  // Write your code here\n  \n}",
    starterPY: "def absolute(n):\n    # Write your code here\n    pass",
    starterCPP: "int absolute(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [-15], expected: 15 },
      { args: [42], expected: 42 },
      { args: [0], expected: 0 },
      { args: [-100], expected: 100 }
    ],
    fnName: "absolute", points: 5
  },
  {
    id: 8, title: "Power of Two", category: "operators", difficulty: "easy",
    description: "Write a function that returns 2 raised to the power of n.",
    examples: [
      { input: "n = 3", output: "8" },
      { input: "n = 5", output: "32" }
    ],
    hint: "Use the ** operator (or Math.pow in JS).",
    starterJS: "function powerOfTwo(n) {\n  // Write your code here\n  \n}",
    starterPY: "def powerOfTwo(n):\n    # Write your code here\n    pass",
    starterCPP: "#include <cmath>\nint powerOfTwo(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [3], expected: 8 },
      { args: [5], expected: 32 },
      { args: [0], expected: 1 },
      { args: [10], expected: 1024 }
    ],
    fnName: "powerOfTwo", points: 5
  },
  {
    id: 9, title: "Compare Two Numbers", category: "operators", difficulty: "easy",
    description: "Write a function that returns 'greater', 'less', or 'equal' comparing two numbers.",
    examples: [
      { input: "a = 10, b = 5", output: "'greater'" },
      { input: "a = 3, b = 7", output: "'less'" }
    ],
    hint: "Use if/else with comparison operators.",
    starterJS: "function compare(a, b) {\n  // Write your code here\n  \n}",
    starterPY: "def compare(a, b):\n    # Write your code here\n    pass",
    starterCPP: "string compare(int a, int b) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [10, 5], expected: 'greater' },
      { args: [3, 7], expected: 'less' },
      { args: [5, 5], expected: 'equal' },
      { args: [-1, 0], expected: 'less' }
    ],
    fnName: "compare", points: 5
  },
  {
    id: 10, title: "Increment and Decrement", category: "operators", difficulty: "easy",
    description: "Write a function that returns an array [n+1, n-1] (increment and decrement).",
    examples: [
      { input: "n = 5", output: "[6, 4]" },
      { input: "n = 0", output: "[1, -1]" }
    ],
    hint: "Add 1 for increment, subtract 1 for decrement.",
    starterJS: "function incDec(n) {\n  // Write your code here\n  \n}",
    starterPY: "def incDec(n):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> incDec(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5], expected: [6, 4] },
      { args: [0], expected: [1, -1] },
      { args: [10], expected: [11, 9] },
      { args: [-5], expected: [-4, -6] }
    ],
    fnName: "incDec", points: 5
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║                        CONDITIONS (10 problems)                       ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    id: 11, title: "Maximum of Two", category: "conditions", difficulty: "easy",
    description: "Write a function that returns the larger of two numbers.",
    examples: [
      { input: "a = 10, b = 20", output: "20" },
      { input: "a = 50, b = 30", output: "50" }
    ],
    hint: "Use an if statement to compare the two numbers.",
    starterJS: "function max(a, b) {\n  // Write your code here\n  \n}",
    starterPY: "def max(a, b):\n    # Write your code here\n    pass",
    starterCPP: "int max(int a, int b) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [10, 20], expected: 20 },
      { args: [50, 30], expected: 50 },
      { args: [5, 5], expected: 5 },
      { args: [-10, -5], expected: -5 }
    ],
    fnName: "max", points: 5
  },
  {
    id: 12, title: "Grade Calculator", category: "conditions", difficulty: "easy",
    description: "Return grade: 'A' (>=90), 'B' (>=80), 'C' (>=70), 'D' (>=60), else 'F'.",
    examples: [
      { input: "score = 95", output: "'A'" },
      { input: "score = 72", output: "'C'" }
    ],
    hint: "Use if/else if chains to check score ranges.",
    starterJS: "function getGrade(score) {\n  // Write your code here\n  \n}",
    starterPY: "def getGrade(score):\n    # Write your code here\n    pass",
    starterCPP: "string getGrade(int score) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [95], expected: 'A' },
      { args: [85], expected: 'B' },
      { args: [72], expected: 'C' },
      { args: [65], expected: 'D' },
      { args: [50], expected: 'F' }
    ],
    fnName: "getGrade", points: 5
  },
  {
    id: 13, title: "Positive, Negative, or Zero", category: "conditions", difficulty: "easy",
    description: "Return 'positive', 'negative', or 'zero' based on the number.",
    examples: [
      { input: "n = 5", output: "'positive'" },
      { input: "n = -3", output: "'negative'" }
    ],
    hint: "Check if n > 0, n < 0, or n === 0.",
    starterJS: "function checkSign(n) {\n  // Write your code here\n  \n}",
    starterPY: "def checkSign(n):\n    # Write your code here\n    pass",
    starterCPP: "string checkSign(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5], expected: 'positive' },
      { args: [-3], expected: 'negative' },
      { args: [0], expected: 'zero' },
      { args: [100], expected: 'positive' }
    ],
    fnName: "checkSign", points: 5
  },
  {
    id: 14, title: "Leap Year Checker", category: "conditions", difficulty: "easy",
    description: "Return true if year is a leap year: divisible by 4, except century years must be divisible by 400.",
    examples: [
      { input: "year = 2020", output: "true" },
      { input: "year = 1900", output: "false" }
    ],
    hint: "Check (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0).",
    starterJS: "function isLeapYear(year) {\n  // Write your code here\n  \n}",
    starterPY: "def isLeapYear(year):\n    # Write your code here\n    pass",
    starterCPP: "bool isLeapYear(int year) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [2020], expected: true },
      { args: [1900], expected: false },
      { args: [2000], expected: true },
      { args: [2021], expected: false }
    ],
    fnName: "isLeapYear", points: 5
  },
  {
    id: 15, title: "Age Category", category: "conditions", difficulty: "easy",
    description: "Return 'child' (<13), 'teen' (13-19), 'adult' (20-59), or 'senior' (60+).",
    examples: [
      { input: "age = 10", output: "'child'" },
      { input: "age = 65", output: "'senior'" }
    ],
    hint: "Use if/else if to check age ranges.",
    starterJS: "function ageCategory(age) {\n  // Write your code here\n  \n}",
    starterPY: "def ageCategory(age):\n    # Write your code here\n    pass",
    starterCPP: "string ageCategory(int age) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [10], expected: 'child' },
      { args: [15], expected: 'teen' },
      { args: [30], expected: 'adult' },
      { args: [65], expected: 'senior' }
    ],
    fnName: "ageCategory", points: 5
  },
  {
    id: 16, title: "Triangle Type", category: "conditions", difficulty: "medium",
    description: "Given three sides, return 'equilateral' (all equal), 'isosceles' (two equal), or 'scalene' (all different).",
    examples: [
      { input: "a=5, b=5, c=5", output: "'equilateral'" },
      { input: "a=5, b=5, c=7", output: "'isosceles'" }
    ],
    hint: "Check if all three are equal, or if any two are equal.",
    starterJS: "function triangleType(a, b, c) {\n  // Write your code here\n  \n}",
    starterPY: "def triangleType(a, b, c):\n    # Write your code here\n    pass",
    starterCPP: "string triangleType(int a, int b, int c) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5, 5, 5], expected: 'equilateral' },
      { args: [5, 5, 7], expected: 'isosceles' },
      { args: [3, 4, 5], expected: 'scalene' }
    ],
    fnName: "triangleType", points: 10
  },
  {
    id: 17, title: "Divisibility Check", category: "conditions", difficulty: "easy",
    description: "Return true if n is divisible by both 3 and 5, else false.",
    examples: [
      { input: "n = 15", output: "true" },
      { input: "n = 10", output: "false" }
    ],
    hint: "Check if n % 3 === 0 and n % 5 === 0.",
    starterJS: "function divisibleBy3And5(n) {\n  // Write your code here\n  \n}",
    starterPY: "def divisibleBy3And5(n):\n    # Write your code here\n    pass",
    starterCPP: "bool divisibleBy3And5(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [15], expected: true },
      { args: [10], expected: false },
      { args: [30], expected: true },
      { args: [9], expected: false }
    ],
    fnName: "divisibleBy3And5", points: 5
  },
  {
    id: 18, title: "Temperature Converter", category: "conditions", difficulty: "easy",
    description: "Convert Celsius to Fahrenheit if unit is 'C', or Fahrenheit to Celsius if 'F'. Formula: F = C*9/5+32.",
    examples: [
      { input: "temp=0, unit='C'", output: "32" },
      { input: "temp=32, unit='F'", output: "0" }
    ],
    hint: "Use an if statement to check the unit.",
    starterJS: "function convertTemp(temp, unit) {\n  // Write your code here\n  \n}",
    starterPY: "def convertTemp(temp, unit):\n    # Write your code here\n    pass",
    starterCPP: "double convertTemp(double temp, char unit) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [0, 'C'], expected: 32 },
      { args: [32, 'F'], expected: 0 },
      { args: [100, 'C'], expected: 212 },
      { args: [212, 'F'], expected: 100 }
    ],
    fnName: "convertTemp", points: 5
  },
  {
    id: 19, title: "Vowel or Consonant", category: "conditions", difficulty: "easy",
    description: "Given a character, return 'vowel' if it's a,e,i,o,u (case-insensitive), else 'consonant'.",
    examples: [
      { input: "ch = 'a'", output: "'vowel'" },
      { input: "ch = 'b'", output: "'consonant'" }
    ],
    hint: "Convert to lowercase and check if it's in ['a','e','i','o','u'].",
    starterJS: "function vowelOrConsonant(ch) {\n  // Write your code here\n  \n}",
    starterPY: "def vowelOrConsonant(ch):\n    # Write your code here\n    pass",
    starterCPP: "string vowelOrConsonant(char ch) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['a'], expected: 'vowel' },
      { args: ['E'], expected: 'vowel' },
      { args: ['b'], expected: 'consonant' },
      { args: ['Z'], expected: 'consonant' }
    ],
    fnName: "vowelOrConsonant", points: 5
  },
  {
    id: 20, title: "Valid Triangle", category: "conditions", difficulty: "easy",
    description: "Given three sides, return true if they can form a valid triangle (sum of any two > third).",
    examples: [
      { input: "a=3, b=4, c=5", output: "true" },
      { input: "a=1, b=2, c=10", output: "false" }
    ],
    hint: "Check a+b>c and b+c>a and a+c>b.",
    starterJS: "function isValidTriangle(a, b, c) {\n  // Write your code here\n  \n}",
    starterPY: "def isValidTriangle(a, b, c):\n    # Write your code here\n    pass",
    starterCPP: "bool isValidTriangle(int a, int b, int c) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [3, 4, 5], expected: true },
      { args: [1, 2, 10], expected: false },
      { args: [5, 5, 5], expected: true },
      { args: [1, 1, 3], expected: false }
    ],
    fnName: "isValidTriangle", points: 5
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║                          LOOPS (10 problems)                          ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    id: 21, title: "Sum of 1 to N", category: "loops", difficulty: "easy",
    description: "Return the sum of all integers from 1 to n.",
    examples: [
      { input: "n = 5", output: "15" },
      { input: "n = 10", output: "55" }
    ],
    hint: "Use a for loop to iterate from 1 to n and add each number.",
    starterJS: "function sumToN(n) {\n  // Write your code here\n  \n}",
    starterPY: "def sumToN(n):\n    # Write your code here\n    pass",
    starterCPP: "int sumToN(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5], expected: 15 },
      { args: [10], expected: 55 },
      { args: [1], expected: 1 },
      { args: [100], expected: 5050 }
    ],
    fnName: "sumToN", points: 5
  },
  {
    id: 22, title: "Factorial", category: "loops", difficulty: "easy",
    description: "Return the factorial of n (n! = n × (n-1) × ... × 1).",
    examples: [
      { input: "n = 5", output: "120" },
      { input: "n = 4", output: "24" }
    ],
    hint: "Start with result=1, multiply by each number from 1 to n.",
    starterJS: "function factorial(n) {\n  // Write your code here\n  \n}",
    starterPY: "def factorial(n):\n    # Write your code here\n    pass",
    starterCPP: "int factorial(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5], expected: 120 },
      { args: [4], expected: 24 },
      { args: [0], expected: 1 },
      { args: [6], expected: 720 }
    ],
    fnName: "factorial", points: 5
  },
  {
    id: 23, title: "Count Digits", category: "loops", difficulty: "easy",
    description: "Return the number of digits in a positive integer n.",
    examples: [
      { input: "n = 12345", output: "5" },
      { input: "n = 100", output: "3" }
    ],
    hint: "Keep dividing n by 10 until it becomes 0, count iterations.",
    starterJS: "function countDigits(n) {\n  // Write your code here\n  \n}",
    starterPY: "def countDigits(n):\n    # Write your code here\n    pass",
    starterCPP: "int countDigits(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [12345], expected: 5 },
      { args: [100], expected: 3 },
      { args: [7], expected: 1 },
      { args: [999999], expected: 6 }
    ],
    fnName: "countDigits", points: 5
  },
  {
    id: 24, title: "Reverse a Number", category: "loops", difficulty: "easy",
    description: "Return the reverse of a number (e.g., 123 → 321).",
    examples: [
      { input: "n = 123", output: "321" },
      { input: "n = 5040", output: "405" }
    ],
    hint: "Extract last digit with n%10, build reversed number, then do n/=10.",
    starterJS: "function reverseNumber(n) {\n  // Write your code here\n  \n}",
    starterPY: "def reverseNumber(n):\n    # Write your code here\n    pass",
    starterCPP: "int reverseNumber(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [123], expected: 321 },
      { args: [5040], expected: 405 },
      { args: [100], expected: 1 },
      { args: [789], expected: 987 }
    ],
    fnName: "reverseNumber", points: 5
  },
  {
    id: 25, title: "Multiplication Table", category: "loops", difficulty: "easy",
    description: "Return an array of n × 1, n × 2, ..., n × 10.",
    examples: [
      { input: "n = 3", output: "[3,6,9,12,15,18,21,24,27,30]" },
      { input: "n = 5", output: "[5,10,15,20,25,30,35,40,45,50]" }
    ],
    hint: "Use a for loop from 1 to 10 and multiply n by each.",
    starterJS: "function multiplicationTable(n) {\n  // Write your code here\n  \n}",
    starterPY: "def multiplicationTable(n):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> multiplicationTable(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [3], expected: [3,6,9,12,15,18,21,24,27,30] },
      { args: [5], expected: [5,10,15,20,25,30,35,40,45,50] },
      { args: [1], expected: [1,2,3,4,5,6,7,8,9,10] }
    ],
    fnName: "multiplicationTable", points: 5
  },
  {
    id: 26, title: "Sum of Even Numbers", category: "loops", difficulty: "easy",
    description: "Return the sum of all even numbers from 1 to n.",
    examples: [
      { input: "n = 10", output: "30" },
      { input: "n = 6", output: "12" }
    ],
    hint: "Loop from 2 to n, increment by 2, and sum.",
    starterJS: "function sumOfEvens(n) {\n  // Write your code here\n  \n}",
    starterPY: "def sumOfEvens(n):\n    # Write your code here\n    pass",
    starterCPP: "int sumOfEvens(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [10], expected: 30 },
      { args: [6], expected: 12 },
      { args: [1], expected: 0 },
      { args: [20], expected: 110 }
    ],
    fnName: "sumOfEvens", points: 5
  },
  {
    id: 27, title: "Print Pattern", category: "loops", difficulty: "medium",
    description: "Return an array where each element is a string of asterisks: ['*', '**', '***', ..., n stars].",
    examples: [
      { input: "n = 3", output: "['*', '**', '***']" },
      { input: "n = 5", output: "['*', '**', '***', '****', '*****']" }
    ],
    hint: "Use nested loops or string repetition.",
    starterJS: "function printPattern(n) {\n  // Write your code here\n  \n}",
    starterPY: "def printPattern(n):\n    # Write your code here\n    pass",
    starterCPP: "vector<string> printPattern(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [3], expected: ['*', '**', '***'] },
      { args: [5], expected: ['*', '**', '***', '****', '*****'] },
      { args: [1], expected: ['*'] }
    ],
    fnName: "printPattern", points: 10
  },
  {
    id: 28, title: "Fibonacci Sequence", category: "loops", difficulty: "medium",
    description: "Return an array of the first n Fibonacci numbers [0,1,1,2,3,5,8,...].",
    examples: [
      { input: "n = 5", output: "[0,1,1,2,3]" },
      { input: "n = 7", output: "[0,1,1,2,3,5,8]" }
    ],
    hint: "Start with [0,1], then each next number is sum of previous two.",
    starterJS: "function fibonacci(n) {\n  // Write your code here\n  \n}",
    starterPY: "def fibonacci(n):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> fibonacci(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5], expected: [0,1,1,2,3] },
      { args: [7], expected: [0,1,1,2,3,5,8] },
      { args: [1], expected: [0] },
      { args: [2], expected: [0,1] }
    ],
    fnName: "fibonacci", points: 10
  },
  {
    id: 29, title: "Check Prime Number", category: "loops", difficulty: "medium",
    description: "Return true if n is a prime number (only divisible by 1 and itself).",
    examples: [
      { input: "n = 7", output: "true" },
      { input: "n = 10", output: "false" }
    ],
    hint: "Loop from 2 to sqrt(n), check if n is divisible by any number.",
    starterJS: "function isPrime(n) {\n  // Write your code here\n  \n}",
    starterPY: "def isPrime(n):\n    # Write your code here\n    pass",
    starterCPP: "bool isPrime(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [7], expected: true },
      { args: [10], expected: false },
      { args: [2], expected: true },
      { args: [1], expected: false },
      { args: [29], expected: true }
    ],
    fnName: "isPrime", points: 10
  },
  {
    id: 30, title: "GCD (Greatest Common Divisor)", category: "loops", difficulty: "medium",
    description: "Return the GCD of two numbers using the Euclidean algorithm.",
    examples: [
      { input: "a = 48, b = 18", output: "6" },
      { input: "a = 100, b = 50", output: "50" }
    ],
    hint: "Use a while loop: while b != 0, set temp=b, b=a%b, a=temp.",
    starterJS: "function gcd(a, b) {\n  // Write your code here\n  \n}",
    starterPY: "def gcd(a, b):\n    # Write your code here\n    pass",
    starterCPP: "int gcd(int a, int b) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [48, 18], expected: 6 },
      { args: [100, 50], expected: 50 },
      { args: [17, 19], expected: 1 },
      { args: [24, 36], expected: 12 }
    ],
    fnName: "gcd", points: 10
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║                       FUNCTIONS (10 problems)                         ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    id: 31, title: "Square a Number", category: "functions", difficulty: "easy",
    description: "Write a function that returns the square of a number.",
    examples: [
      { input: "n = 5", output: "25" },
      { input: "n = -3", output: "9" }
    ],
    hint: "Multiply n by itself.",
    starterJS: "function square(n) {\n  // Write your code here\n  \n}",
    starterPY: "def square(n):\n    # Write your code here\n    pass",
    starterCPP: "int square(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5], expected: 25 },
      { args: [-3], expected: 9 },
      { args: [0], expected: 0 },
      { args: [10], expected: 100 }
    ],
    fnName: "square", points: 5
  },
  {
    id: 32, title: "Cube a Number", category: "functions", difficulty: "easy",
    description: "Write a function that returns the cube of a number.",
    examples: [
      { input: "n = 3", output: "27" },
      { input: "n = 2", output: "8" }
    ],
    hint: "Multiply n × n × n.",
    starterJS: "function cube(n) {\n  // Write your code here\n  \n}",
    starterPY: "def cube(n):\n    # Write your code here\n    pass",
    starterCPP: "int cube(int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [3], expected: 27 },
      { args: [2], expected: 8 },
      { args: [-2], expected: -8 },
      { args: [5], expected: 125 }
    ],
    fnName: "cube", points: 5
  },
  {
    id: 33, title: "Calculate Circle Area", category: "functions", difficulty: "easy",
    description: "Return the area of a circle given radius (π × r²). Use π ≈ 3.14159.",
    examples: [
      { input: "r = 5", output: "78.53975" },
      { input: "r = 10", output: "314.159" }
    ],
    hint: "Area = 3.14159 * r * r.",
    starterJS: "function circleArea(r) {\n  // Write your code here\n  \n}",
    starterPY: "def circleArea(r):\n    # Write your code here\n    pass",
    starterCPP: "double circleArea(double r) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [5], expected: 78.53975 },
      { args: [10], expected: 314.159 },
      { args: [1], expected: 3.14159 }
    ],
    fnName: "circleArea", points: 5
  },
  {
    id: 34, title: "Hypotenuse Calculator", category: "functions", difficulty: "easy",
    description: "Given two sides of a right triangle, return the hypotenuse (sqrt(a² + b²)).",
    examples: [
      { input: "a = 3, b = 4", output: "5" },
      { input: "a = 5, b = 12", output: "13" }
    ],
    hint: "Use Math.sqrt(a*a + b*b) in JS, or sqrt() in C++/Python.",
    starterJS: "function hypotenuse(a, b) {\n  // Write your code here\n  \n}",
    starterPY: "def hypotenuse(a, b):\n    # Write your code here\n    pass",
    starterCPP: "#include <cmath>\ndouble hypotenuse(double a, double b) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [3, 4], expected: 5 },
      { args: [5, 12], expected: 13 },
      { args: [6, 8], expected: 10 }
    ],
    fnName: "hypotenuse", points: 5
  },
  {
    id: 35, title: "Simple Interest", category: "functions", difficulty: "easy",
    description: "Calculate simple interest: (principal × rate × time) / 100.",
    examples: [
      { input: "p=1000, r=5, t=2", output: "100" },
      { input: "p=5000, r=10, t=1", output: "500" }
    ],
    hint: "SI = (p * r * t) / 100.",
    starterJS: "function simpleInterest(p, r, t) {\n  // Write your code here\n  \n}",
    starterPY: "def simpleInterest(p, r, t):\n    # Write your code here\n    pass",
    starterCPP: "double simpleInterest(double p, double r, double t) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [1000, 5, 2], expected: 100 },
      { args: [5000, 10, 1], expected: 500 },
      { args: [2000, 8, 3], expected: 480 }
    ],
    fnName: "simpleInterest", points: 5
  },
  {
    id: 36, title: "Convert Minutes to Hours", category: "functions", difficulty: "easy",
    description: "Return [hours, minutes] from total minutes. E.g., 125 → [2, 5].",
    examples: [
      { input: "min = 125", output: "[2, 5]" },
      { input: "min = 90", output: "[1, 30]" }
    ],
    hint: "hours = Math.floor(min / 60), remaining = min % 60.",
    starterJS: "function convertMinutes(min) {\n  // Write your code here\n  \n}",
    starterPY: "def convertMinutes(min):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> convertMinutes(int min) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [125], expected: [2, 5] },
      { args: [90], expected: [1, 30] },
      { args: [60], expected: [1, 0] },
      { args: [45], expected: [0, 45] }
    ],
    fnName: "convertMinutes", points: 5
  },
  {
    id: 37, title: "Capitalize First Letter", category: "functions", difficulty: "easy",
    description: "Return the string with the first letter capitalized.",
    examples: [
      { input: "str = 'hello'", output: "'Hello'" },
      { input: "str = 'world'", output: "'World'" }
    ],
    hint: "str[0].toUpperCase() + str.slice(1) in JS.",
    starterJS: "function capitalize(str) {\n  // Write your code here\n  \n}",
    starterPY: "def capitalize(s):\n    # Write your code here\n    pass",
    starterCPP: "string capitalize(string str) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['hello'], expected: 'Hello' },
      { args: ['world'], expected: 'World' },
      { args: ['a'], expected: 'A' },
      { args: ['test'], expected: 'Test' }
    ],
    fnName: "capitalize", points: 5
  },
  {
    id: 38, title: "Count Vowels", category: "functions", difficulty: "easy",
    description: "Return the count of vowels (a,e,i,o,u) in a string (case-insensitive).",
    examples: [
      { input: "str = 'hello'", output: "2" },
      { input: "str = 'world'", output: "1" }
    ],
    hint: "Loop through string, check if char is a vowel.",
    starterJS: "function countVowels(str) {\n  // Write your code here\n  \n}",
    starterPY: "def countVowels(s):\n    # Write your code here\n    pass",
    starterCPP: "int countVowels(string str) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['hello'], expected: 2 },
      { args: ['world'], expected: 1 },
      { args: ['aeiou'], expected: 5 },
      { args: ['xyz'], expected: 0 }
    ],
    fnName: "countVowels", points: 5
  },
  {
    id: 39, title: "Check Palindrome", category: "functions", difficulty: "medium",
    description: "Return true if the string is a palindrome (reads same forwards and backwards).",
    examples: [
      { input: "str = 'madam'", output: "true" },
      { input: "str = 'hello'", output: "false" }
    ],
    hint: "Reverse the string and compare with original.",
    starterJS: "function isPalindrome(str) {\n  // Write your code here\n  \n}",
    starterPY: "def isPalindrome(s):\n    # Write your code here\n    pass",
    starterCPP: "bool isPalindrome(string str) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['madam'], expected: true },
      { args: ['hello'], expected: false },
      { args: ['racecar'], expected: true },
      { args: ['noon'], expected: true }
    ],
    fnName: "isPalindrome", points: 10
  },
  {
    id: 40, title: "Repeat String", category: "functions", difficulty: "easy",
    description: "Return the string repeated n times.",
    examples: [
      { input: "str = 'ab', n = 3", output: "'ababab'" },
      { input: "str = 'x', n = 5", output: "'xxxxx'" }
    ],
    hint: "Use str.repeat(n) in JS, or loop n times.",
    starterJS: "function repeatString(str, n) {\n  // Write your code here\n  \n}",
    starterPY: "def repeatString(s, n):\n    # Write your code here\n    pass",
    starterCPP: "string repeatString(string str, int n) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['ab', 3], expected: 'ababab' },
      { args: ['x', 5], expected: 'xxxxx' },
      { args: ['ha', 2], expected: 'haha' }
    ],
    fnName: "repeatString", points: 5
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║                         ARRAYS (10 problems)                          ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    id: 41, title: "Sum of Array", category: "arrays", difficulty: "easy",
    description: "Return the sum of all elements in an array.",
    examples: [
      { input: "arr = [1,2,3,4,5]", output: "15" },
      { input: "arr = [10,20,30]", output: "60" }
    ],
    hint: "Loop through array and add each element.",
    starterJS: "function sumArray(arr) {\n  // Write your code here\n  \n}",
    starterPY: "def sumArray(arr):\n    # Write your code here\n    pass",
    starterCPP: "int sumArray(vector<int> arr) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[1,2,3,4,5]], expected: 15 },
      { args: [[10,20,30]], expected: 60 },
      { args: [[0,0,0]], expected: 0 },
      { args: [[-1,1]], expected: 0 }
    ],
    fnName: "sumArray", points: 5
  },
  {
    id: 42, title: "Find Maximum in Array", category: "arrays", difficulty: "easy",
    description: "Return the largest element in an array.",
    examples: [
      { input: "arr = [3,7,2,9,1]", output: "9" },
      { input: "arr = [5,5,5]", output: "5" }
    ],
    hint: "Start with max = arr[0], loop and update if arr[i] > max.",
    starterJS: "function findMax(arr) {\n  // Write your code here\n  \n}",
    starterPY: "def findMax(arr):\n    # Write your code here\n    pass",
    starterCPP: "int findMax(vector<int> arr) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[3,7,2,9,1]], expected: 9 },
      { args: [[5,5,5]], expected: 5 },
      { args: [[-10,-5,-20]], expected: -5 },
      { args: [[100]], expected: 100 }
    ],
    fnName: "findMax", points: 5
  },
  {
    id: 43, title: "Reverse Array", category: "arrays", difficulty: "easy",
    description: "Return a new array with elements in reverse order.",
    examples: [
      { input: "arr = [1,2,3,4]", output: "[4,3,2,1]" },
      { input: "arr = [5,10]", output: "[10,5]" }
    ],
    hint: "Use arr.reverse() or loop from end to start.",
    starterJS: "function reverseArray(arr) {\n  // Write your code here\n  \n}",
    starterPY: "def reverseArray(arr):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> reverseArray(vector<int> arr) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[1,2,3,4]], expected: [4,3,2,1] },
      { args: [[5,10]], expected: [10,5] },
      { args: [[7]], expected: [7] }
    ],
    fnName: "reverseArray", points: 5
  },
  {
    id: 44, title: "Count Even Numbers", category: "arrays", difficulty: "easy",
    description: "Return the count of even numbers in an array.",
    examples: [
      { input: "arr = [1,2,3,4,5,6]", output: "3" },
      { input: "arr = [1,3,5]", output: "0" }
    ],
    hint: "Loop and check if arr[i] % 2 === 0.",
    starterJS: "function countEvens(arr) {\n  // Write your code here\n  \n}",
    starterPY: "def countEvens(arr):\n    # Write your code here\n    pass",
    starterCPP: "int countEvens(vector<int> arr) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[1,2,3,4,5,6]], expected: 3 },
      { args: [[1,3,5]], expected: 0 },
      { args: [[2,4,6,8]], expected: 4 }
    ],
    fnName: "countEvens", points: 5
  },
  {
    id: 45, title: "Filter Positive Numbers", category: "arrays", difficulty: "easy",
    description: "Return a new array containing only positive numbers from the input array.",
    examples: [
      { input: "arr = [-1,2,-3,4,0]", output: "[2,4]" },
      { input: "arr = [5,10,15]", output: "[5,10,15]" }
    ],
    hint: "Use arr.filter(x => x > 0) or loop.",
    starterJS: "function filterPositive(arr) {\n  // Write your code here\n  \n}",
    starterPY: "def filterPositive(arr):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> filterPositive(vector<int> arr) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[-1,2,-3,4,0]], expected: [2,4] },
      { args: [[5,10,15]], expected: [5,10,15] },
      { args: [[-5,-10]], expected: [] }
    ],
    fnName: "filterPositive", points: 5
  },
  {
    id: 46, title: "Find Index of Element", category: "arrays", difficulty: "easy",
    description: "Return the index of target in array, or -1 if not found.",
    examples: [
      { input: "arr = [10,20,30,40], target = 30", output: "2" },
      { input: "arr = [1,2,3], target = 5", output: "-1" }
    ],
    hint: "Loop through array, return index when arr[i] === target.",
    starterJS: "function findIndex(arr, target) {\n  // Write your code here\n  \n}",
    starterPY: "def findIndex(arr, target):\n    # Write your code here\n    pass",
    starterCPP: "int findIndex(vector<int> arr, int target) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[10,20,30,40], 30], expected: 2 },
      { args: [[1,2,3], 5], expected: -1 },
      { args: [[5,5,5], 5], expected: 0 }
    ],
    fnName: "findIndex", points: 5
  },
  {
    id: 47, title: "Remove Duplicates", category: "arrays", difficulty: "medium",
    description: "Return a new array with duplicate values removed.",
    examples: [
      { input: "arr = [1,2,2,3,4,4,5]", output: "[1,2,3,4,5]" },
      { input: "arr = [5,5,5]", output: "[5]" }
    ],
    hint: "Use a Set or loop checking if element is already in result.",
    starterJS: "function removeDuplicates(arr) {\n  // Write your code here\n  \n}",
    starterPY: "def removeDuplicates(arr):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> removeDuplicates(vector<int> arr) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[1,2,2,3,4,4,5]], expected: [1,2,3,4,5] },
      { args: [[5,5,5]], expected: [5] },
      { args: [[1,2,3]], expected: [1,2,3] }
    ],
    fnName: "removeDuplicates", points: 10
  },
  {
    id: 48, title: "Merge Two Arrays", category: "arrays", difficulty: "easy",
    description: "Return a new array that merges two arrays into one.",
    examples: [
      { input: "arr1 = [1,2], arr2 = [3,4]", output: "[1,2,3,4]" },
      { input: "arr1 = [5], arr2 = [10,15]", output: "[5,10,15]" }
    ],
    hint: "Use [...arr1, ...arr2] or concat().",
    starterJS: "function mergeArrays(arr1, arr2) {\n  // Write your code here\n  \n}",
    starterPY: "def mergeArrays(arr1, arr2):\n    # Write your code here\n    pass",
    starterCPP: "vector<int> mergeArrays(vector<int> arr1, vector<int> arr2) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[1,2], [3,4]], expected: [1,2,3,4] },
      { args: [[5], [10,15]], expected: [5,10,15] },
      { args: [[], [1,2]], expected: [1,2] }
    ],
    fnName: "mergeArrays", points: 5
  },
  {
    id: 49, title: "Second Largest Number", category: "arrays", difficulty: "medium",
    description: "Return the second largest number in the array.",
    examples: [
      { input: "arr = [10,20,30,40]", output: "30" },
      { input: "arr = [5,5,4,4,3]", output: "4" }
    ],
    hint: "Sort array or track first and second max in a loop.",
    starterJS: "function secondLargest(arr) {\n  // Write your code here\n  \n}",
    starterPY: "def secondLargest(arr):\n    # Write your code here\n    pass",
    starterCPP: "int secondLargest(vector<int> arr) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[10,20,30,40]], expected: 30 },
      { args: [[5,5,4,4,3]], expected: 4 },
      { args: [[100,50,75]], expected: 75 }
    ],
    fnName: "secondLargest", points: 10
  },
  {
    id: 50, title: "Check if Array is Sorted", category: "arrays", difficulty: "easy",
    description: "Return true if array is sorted in ascending order, else false.",
    examples: [
      { input: "arr = [1,2,3,4,5]", output: "true" },
      { input: "arr = [1,3,2,4]", output: "false" }
    ],
    hint: "Loop and check if arr[i] <= arr[i+1] for all i.",
    starterJS: "function isSorted(arr) {\n  // Write your code here\n  \n}",
    starterPY: "def isSorted(arr):\n    # Write your code here\n    pass",
    starterCPP: "bool isSorted(vector<int> arr) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: [[1,2,3,4,5]], expected: true },
      { args: [[1,3,2,4]], expected: false },
      { args: [[5,5,5]], expected: true },
      { args: [[10,20,15]], expected: false }
    ],
    fnName: "isSorted", points: 5
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║                        STRINGS (5 problems)                           ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    id: 51, title: "String Length", category: "strings", difficulty: "easy",
    description: "Return the length of a string.",
    examples: [
      { input: "str = 'hello'", output: "5" },
      { input: "str = 'world'", output: "5" }
    ],
    hint: "Use str.length property.",
    starterJS: "function stringLength(str) {\n  // Write your code here\n  \n}",
    starterPY: "def stringLength(s):\n    # Write your code here\n    pass",
    starterCPP: "int stringLength(string str) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['hello'], expected: 5 },
      { args: ['world'], expected: 5 },
      { args: [''], expected: 0 },
      { args: ['test'], expected: 4 }
    ],
    fnName: "stringLength", points: 5
  },
  {
    id: 52, title: "Concatenate Strings", category: "strings", difficulty: "easy",
    description: "Return the concatenation of two strings.",
    examples: [
      { input: "s1 = 'Hello', s2 = 'World'", output: "'HelloWorld'" },
      { input: "s1 = 'foo', s2 = 'bar'", output: "'foobar'" }
    ],
    hint: "Use s1 + s2.",
    starterJS: "function concatenate(s1, s2) {\n  // Write your code here\n  \n}",
    starterPY: "def concatenate(s1, s2):\n    # Write your code here\n    pass",
    starterCPP: "string concatenate(string s1, string s2) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['Hello', 'World'], expected: 'HelloWorld' },
      { args: ['foo', 'bar'], expected: 'foobar' },
      { args: ['', 'test'], expected: 'test' }
    ],
    fnName: "concatenate", points: 5
  },
  {
    id: 53, title: "Convert to Uppercase", category: "strings", difficulty: "easy",
    description: "Return the string converted to uppercase.",
    examples: [
      { input: "str = 'hello'", output: "'HELLO'" },
      { input: "str = 'WoRLd'", output: "'WORLD'" }
    ],
    hint: "Use str.toUpperCase() or str.upper().",
    starterJS: "function toUpperCase(str) {\n  // Write your code here\n  \n}",
    starterPY: "def toUpperCase(s):\n    # Write your code here\n    pass",
    starterCPP: "#include <algorithm>\nstring toUpperCase(string str) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['hello'], expected: 'HELLO' },
      { args: ['WoRLd'], expected: 'WORLD' },
      { args: ['test'], expected: 'TEST' }
    ],
    fnName: "toUpperCase", points: 5
  },
  {
    id: 54, title: "Count Occurrences of Character", category: "strings", difficulty: "easy",
    description: "Return the number of times a character appears in a string.",
    examples: [
      { input: "str = 'hello', ch = 'l'", output: "2" },
      { input: "str = 'banana', ch = 'a'", output: "3" }
    ],
    hint: "Loop through string and count matches.",
    starterJS: "function countChar(str, ch) {\n  // Write your code here\n  \n}",
    starterPY: "def countChar(s, ch):\n    # Write your code here\n    pass",
    starterCPP: "int countChar(string str, char ch) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['hello', 'l'], expected: 2 },
      { args: ['banana', 'a'], expected: 3 },
      { args: ['test', 'x'], expected: 0 }
    ],
    fnName: "countChar", points: 5
  },
  {
    id: 55, title: "Replace Character", category: "strings", difficulty: "easy",
    description: "Replace all occurrences of oldChar with newChar in a string.",
    examples: [
      { input: "str = 'hello', oldChar = 'l', newChar = 'p'", output: "'heppo'" },
      { input: "str = 'banana', oldChar = 'a', newChar = 'o'", output: "'bonono'" }
    ],
    hint: "Use str.replaceAll() or loop.",
    starterJS: "function replaceChar(str, oldChar, newChar) {\n  // Write your code here\n  \n}",
    starterPY: "def replaceChar(s, oldChar, newChar):\n    # Write your code here\n    pass",
    starterCPP: "string replaceChar(string str, char oldChar, char newChar) {\n    // Write your code here\n    \n}",
    testCases: [
      { args: ['hello', 'l', 'p'], expected: 'heppo' },
      { args: ['banana', 'a', 'o'], expected: 'bonono' },
      { args: ['test', 'x', 'y'], expected: 'test' }
    ],
    fnName: "replaceChar", points: 5
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║                           OOP (5 problems)                            ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    id: 56, title: "Create Simple Object", category: "oop", difficulty: "easy",
    description: "Return an object with properties name and age from given values.",
    examples: [
      { input: "name='John', age=25", output:"{name:'John',age:25}" },
      { input: "name='Alice', age=30", output:"{name:'Alice',age:30}" }
    ],
    hint: "Return {name: name, age: age}.",
    starterJS: "function createPerson(name, age) {\n  // Write your code here\n  \n}",
    starterPY: "def createPerson(name, age):\n    # Write your code here\n    pass",
    starterCPP: "// JavaScript/Python only for this problem",
    testCases: [
      { args: ['John', 25], expected: {name:'John',age:25} },
      { args: ['Alice', 30], expected: {name:'Alice',age:30} }
    ],
    fnName: "createPerson", points: 5, jsOnly: true
  },
  {
    id: 57, title: "Get Object Property", category: "oop", difficulty: "easy",
    description: "Return the value of a property from an object. obj = {x:10, y:20}, prop = 'x' → 10.",
    examples: [
      { input: "obj={x:10,y:20}, prop='x'", output: "10" },
      { input: "obj={a:5,b:7}, prop='b'", output: "7" }
    ],
    hint: "Return obj[prop].",
    starterJS: "function getProperty(obj, prop) {\n  // Write your code here\n  \n}",
    starterPY: "def getProperty(obj, prop):\n    # Write your code here\n    pass",
    starterCPP: "// JavaScript/Python only",
    testCases: [
      { args: [{x:10,y:20}, 'x'], expected: 10 },
      { args: [{a:5,b:7}, 'b'], expected: 7 }
    ],
    fnName: "getProperty", points: 5, jsOnly: true
  },
  {
    id: 58, title: "Count Object Keys", category: "oop", difficulty: "easy",
    description: "Return the number of keys in an object.",
    examples: [
      { input: "obj = {a:1, b:2, c:3}", output: "3" },
      { input: "obj = {x:10}", output: "1" }
    ],
    hint: "Use Object.keys(obj).length.",
    starterJS: "function countKeys(obj) {\n  // Write your code here\n  \n}",
    starterPY: "def countKeys(obj):\n    # Write your code here\n    pass",
    starterCPP: "// JavaScript/Python only",
    testCases: [
      { args: [{a:1,b:2,c:3}], expected: 3 },
      { args: [{x:10}], expected: 1 },
      { args: [{}], expected: 0 }
    ],
    fnName: "countKeys", points: 5, jsOnly: true
  },
  {
    id: 59, title: "Merge Two Objects", category: "oop", difficulty: "medium",
    description: "Return a new object that merges two objects (properties from obj2 overwrite obj1).",
    examples: [
      { input: "obj1={a:1,b:2}, obj2={b:3,c:4}", output: "{a:1,b:3,c:4}" },
      { input: "obj1={x:10}, obj2={y:20}", output: "{x:10,y:20}" }
    ],
    hint: "Use {...obj1, ...obj2} or Object.assign().",
    starterJS: "function mergeObjects(obj1, obj2) {\n  // Write your code here\n  \n}",
    starterPY: "def mergeObjects(obj1, obj2):\n    # Write your code here\n    pass",
    starterCPP: "// JavaScript/Python only",
    testCases: [
      { args: [{a:1,b:2}, {b:3,c:4}], expected: {a:1,b:3,c:4} },
      { args: [{x:10}, {y:20}], expected: {x:10,y:20} }
    ],
    fnName: "mergeObjects", points: 10, jsOnly: true
  },
  {
    id: 60, title: "Create Class Instance", category: "oop", difficulty: "medium",
    description: "Create a class 'Rectangle' with width and height, and a method area() that returns width*height. Return an instance with given width and height.",
    examples: [
      { input: "width=5, height=10", output: "Rectangle{width:5, height:10, area:50}" }
    ],
    hint: "Define a class with constructor and method.",
    starterJS: "function createRectangle(width, height) {\n  // Define Rectangle class and return instance\n  class Rectangle {\n    // your code here\n  }\n  return new Rectangle(width, height);\n}",
    starterPY: "def createRectangle(width, height):\n    # Define Rectangle class and return instance\n    class Rectangle:\n        pass\n    return Rectangle(width, height)",
    starterCPP: "// JavaScript/Python only",
    testCases: [
      { args: [5, 10], expected: {width:5, height:10}, customCheck: (result) => result.width===5 && result.height===10 && result.area()===50 },
      { args: [3, 7], expected: {width:3, height:7}, customCheck: (result) => result.width===3 && result.height===7 && result.area()===21 }
    ],
    fnName: "createRectangle", points: 10, jsOnly: true, customValidator: true
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// STATE & DOM
// ═══════════════════════════════════════════════════════════════════════════════
let currentProblem = null;
let currentLang = 'javascript';
let currentFilter = 'all';
let timerInterval = null;
let seconds = 0;

const $ = id => document.getElementById(id);
const problemList = $('problemList');
const problemView = $('problemView');
const codeEditor = $('codeEditor');
const syntaxHighlight = $('syntaxHighlight');
const lineNumbers = $('lineNumbers');
const outputPanel = $('outputPanel');
const outputContent = $('outputContent');
const runBtn = $('runBtn');
const submitBtn = $('submitBtn');
const resetBtn = $('resetBtn');
const timerEl = $('timer');
const solvedCountEl = $('solvedCount');
const xpCountEl = $('xpCount');
const langStatusEl = $('langStatus');
const lineColEl = $('lineCol');
const tabNameEl = $('tabName');

// ═══════════════════════════════════════════════════════════════════════════════
// PERSISTENCE
// ═══════════════════════════════════════════════════════════════════════════════
function loadData() {
  const raw = localStorage.getItem('hunter_basics_v1');
  return raw ? JSON.parse(raw) : { solved:{}, xp:0, codes:{} };
}

let data = loadData();

function persist() {
  localStorage.setItem('hunter_basics_v1', JSON.stringify(data));
}

function syncSolved() {
  problems.forEach(p => { p.solved = !!data.solved[p.id]; });
}

function updateStats() {
  const count = Object.keys(data.solved).length;
  solvedCountEl.textContent = count;
  xpCountEl.textContent = data.xp;
}

// ═══════════════════════════════════════════════════════════════════════════════
// TIMER
// ═══════════════════════════════════════════════════════════════════════════════
function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `⏱ ${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

function startTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  timerEl.textContent = fmtTime(0);
  timerInterval = setInterval(() => {
    seconds++;
    timerEl.textContent = fmtTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}



// Clean up any HTML content that might have been accidentally saved or pasted
function cleanCode(code) {
  return code
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&lt;/g, '<')   // Convert HTML entities
    .replace(/&gt;/g, '>')   
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// ═══════════════════════════════════════════════════════════════════════════════
// SYNTAX HIGHLIGHTING (powered by Highlight.js)
// ═══════════════════════════════════════════════════════════════════════════════
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
    return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

function updateSyntaxHighlighting() {
  let code = codeEditor.value;
  code = cleanCode(code);
  if (code !== codeEditor.value) {
    codeEditor.value = code;
  }
  const highlighted = applySyntaxHighlighting(code, currentLang);
  syntaxHighlight.innerHTML = highlighted;
  syntaxHighlight.scrollTop = codeEditor.scrollTop;
  syntaxHighlight.scrollLeft = codeEditor.scrollLeft;
}

// ═══════════════════════════════════════════════════════════════════════════════
// LINE NUMBERS & EDITOR UPDATES
// ═══════════════════════════════════════════════════════════════════════════════
function updateLineNumbers() {
  const lines = codeEditor.value.split('\n').length;
  lineNumbers.innerHTML = Array.from({length: lines}, (_,i) => i+1).join('<br>');
}

codeEditor.addEventListener('input', () => {
  updateLineNumbers();
  updateSyntaxHighlighting();
  saveCode();
  updateCursorPosition();
});

codeEditor.addEventListener('scroll', () => {
  lineNumbers.scrollTop = codeEditor.scrollTop;
  syntaxHighlight.scrollTop = codeEditor.scrollTop;
  syntaxHighlight.scrollLeft = codeEditor.scrollLeft;
});

codeEditor.addEventListener('click', updateCursorPosition);
codeEditor.addEventListener('keyup', updateCursorPosition);

function updateCursorPosition() {
  const pos = codeEditor.selectionStart;
  const textBefore = codeEditor.value.substring(0, pos);
  const lines = textBefore.split('\n');
  const line = lines.length;
  const col = lines[lines.length - 1].length + 1;
  lineColEl.textContent = `Ln ${line}, Col ${col}`;
}

// Tab support
codeEditor.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = codeEditor.selectionStart;
    const end = codeEditor.selectionEnd;
    codeEditor.value = codeEditor.value.substring(0, start) + '  ' + codeEditor.value.substring(end);
    codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
    updateLineNumbers();
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// RENDER PROBLEM LIST
// ═══════════════════════════════════════════════════════════════════════════════
function renderList() {
  const q = $('searchInput').value.toLowerCase();
  
  let filtered = problems.filter(p => {
    if (currentFilter === 'solved') return p.solved;
    if (currentFilter === 'easy' || currentFilter === 'medium') return p.difficulty === currentFilter;
    if (currentFilter !== 'all') return p.category === currentFilter;
    
    const match = !q || p.title.toLowerCase().includes(q) || p.category.includes(q);
    return match;
  });

  problemList.innerHTML = filtered.map(p => `
    <div class="problem-item ${currentProblem?.id === p.id ? 'active' : ''} ${p.solved ? 'solved' : ''}" data-id="${p.id}">
      <span class="icon">${p.solved ? '✅' : '📝'}</span>
      <span class="name">${p.id}. ${p.title}</span>
      <span class="difficulty ${p.difficulty}">${p.difficulty}</span>
    </div>
  `).join('');

  problemList.querySelectorAll('.problem-item').forEach(item => {
    item.addEventListener('click', () => loadProblem(+item.dataset.id));
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// LOAD PROBLEM
// ═══════════════════════════════════════════════════════════════════════════════
function loadProblem(id) {
  stopTimer();
  currentProblem = problems.find(p => p.id === id);
  if (!currentProblem) return;

  tabNameEl.textContent = `problem_${id}.${currentLang === 'javascript' ? 'js' : currentLang === 'python' ? 'py' : 'cpp'}`;

  const exHTML = currentProblem.examples.map((ex, i) => `
    <div class="example-box">
      <div class="label">Example ${i+1}</div>
      <div><strong>Input:</strong> <code>${ex.input}</code></div>
      <div><strong>Output:</strong> <code>${ex.output}</code></div>
    </div>
  `).join('');

  problemView.innerHTML = `
    <h2>
      <span class="difficulty ${currentProblem.difficulty}">${currentProblem.difficulty}</span>
      ${currentProblem.id}. ${currentProblem.title}
    </h2>
    <p class="desc">${currentProblem.description}</p>
    <div class="section-title">📌 Examples</div>
    ${exHTML}
    <button class="hint-toggle" onclick="toggleHint()">💡 Show Hint</button>
    <div class="hint-box" id="hintBox">${currentProblem.hint}</div>
  `;

  // Load code
  const codeKey = `${id}_${currentLang}`;
  const savedCode = data.codes[codeKey];
  if (savedCode) {
    codeEditor.value = cleanCode(savedCode);
  } else {
    if (currentLang === 'javascript') codeEditor.value = cleanCode(currentProblem.starterJS);
    else if (currentLang === 'python') codeEditor.value = cleanCode(currentProblem.starterPY);
    else codeEditor.value = cleanCode(currentProblem.starterCPP);
  }

  updateLineNumbers();
  updateSyntaxHighlighting();
  updateCursorPosition();
  runBtn.disabled = false;
  submitBtn.disabled = false;
  resetBtn.disabled = false;
  outputPanel.classList.remove('show');
  renderList();
  startTimer();
}

function toggleHint() {
  $('hintBox').classList.toggle('show');
}

function saveCode() {
  if (!currentProblem) return;
  const codeKey = `${currentProblem.id}_${currentLang}`;
  // Clean the code before saving to prevent HTML tags from being stored
  data.codes[codeKey] = cleanCode(codeEditor.value);
  persist();
}

// ═══════════════════════════════════════════════════════════════════════════════
// LANGUAGE SWITCHING
// ═══════════════════════════════════════════════════════════════════════════════
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    langStatusEl.textContent = currentLang === 'javascript' ? 'JavaScript' : currentLang === 'python' ? 'Python' : 'C++';
    
    if (currentProblem) {
      const codeKey = `${currentProblem.id}_${currentLang}`;
      const savedCode = data.codes[codeKey];
      if (savedCode) {
        codeEditor.value = cleanCode(savedCode);
      } else {
        if (currentLang === 'javascript') codeEditor.value = cleanCode(currentProblem.starterJS);
        else if (currentLang === 'python') codeEditor.value = cleanCode(currentProblem.starterPY);
        else codeEditor.value = cleanCode(currentProblem.starterCPP);
      }
      updateLineNumbers();
      updateSyntaxHighlighting();
      tabNameEl.textContent = `problem_${currentProblem.id}.${currentLang === 'javascript' ? 'js' : currentLang === 'python' ? 'py' : 'cpp'}`;
    }
  });
});

// ═══════════════════════════════════════════════════════════════════════════════
// CODE EXECUTION (JavaScript only — real execution)
// Python and C++ show simulation message
// ═══════════════════════════════════════════════════════════════════════════════
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

function executeTests(code, problem) {
  if (currentLang !== 'javascript') {
    return { nonJS: true, lang: currentLang };
  }

  if (problem.jsOnly && currentLang !== 'javascript') {
    return { jsOnlyError: true };
  }

  const results = [];
  for (let i = 0; i < problem.testCases.length; i++) {
    const tc = problem.testCases[i];
    const argsCopy = JSON.parse(JSON.stringify(tc.args));
    
    try {
      const fn = new Function(code + `\nreturn ${problem.fnName};`)();
      const got = fn(...argsCopy);

      let pass = false;
      if (problem.customValidator && tc.customCheck) {
        pass = tc.customCheck(got);
      } else {
        pass = deepEqual(got, tc.expected);
      }

      results.push({
        index: i,
        pass,
        input: JSON.stringify(tc.args).substring(0, 80),
        expected: JSON.stringify(tc.expected).substring(0, 60),
        got: JSON.stringify(got).substring(0, 60)
      });
    } catch (err) {
      results.push({
        index: i,
        pass: false,
        input: JSON.stringify(tc.args).substring(0, 80),
        expected: JSON.stringify(tc.expected).substring(0, 60),
        got: 'Error: ' + err.message,
        error: true
      });
    }
  }

  return { results };
}

function showOutput(data, isSubmit) {
  outputPanel.classList.add('show');
  outputContent.innerHTML = '';

  if (data.nonJS) {
    outputContent.innerHTML = `
      <div class="output-line info">
        <strong>${data.lang === 'python' ? '🐍 Python' : '⚙️ C++'} Mode</strong><br>
        ${data.lang === 'python' ? 'Python' : 'C++'} execution requires a backend compiler. Switch to JavaScript for real-time code execution.
      </div>`;
    return false;
  }

  if (data.jsOnlyError) {
    outputContent.innerHTML = `<div class="output-line error">This problem is JavaScript/Python only and doesn't support C++.</div>`;
    return false;
  }

  const { results } = data;
  const passed = results.filter(r => r.pass).length;
  const total = results.length;
  const allPass = passed === total;

  const summary = allPass
    ? `<div class="output-line success"><strong>✅ ${isSubmit ? 'Accepted!' : 'All Tests Passed'}</strong><br>Passed ${passed}/${total} test cases</div>`
    : `<div class="output-line error"><strong>❌ ${isSubmit ? 'Wrong Answer' : 'Some Tests Failed'}</strong><br>Passed ${passed}/${total} test cases</div>`;

  const details = results.map(r => `
    <div class="output-line ${r.pass ? 'success' : 'error'}">
      <strong>${r.pass ? '✓' : '✗'} Test ${r.index + 1}:</strong>
      Input: ${r.input}
      ${!r.pass ? `<br>Expected: ${r.expected}<br>Got: ${r.got}` : ''}
    </div>
  `).join('');

  outputContent.innerHTML = summary + details;
  return allPass;
}

function runCode() {
  if (!currentProblem) return;
  const result = executeTests(codeEditor.value, currentProblem);
  showOutput(result, false);
}

function submitCode() {
  if (!currentProblem) return;
  const result = executeTests(codeEditor.value, currentProblem);
  const allPass = showOutput(result, true);

  if (allPass && currentLang === 'javascript' && !currentProblem.solved) {
    currentProblem.solved = true;
    data.solved[currentProblem.id] = true;
    data.xp += currentProblem.points;
    persist();
    updateStats();
    renderList();
    stopTimer();
  }
}

function resetCode() {
  if (!currentProblem) return;
  if (currentLang === 'javascript') codeEditor.value = cleanCode(currentProblem.starterJS);
  else if (currentLang === 'python') codeEditor.value = cleanCode(currentProblem.starterPY);
  else codeEditor.value = cleanCode(currentProblem.starterCPP);
  updateLineNumbers();
  updateSyntaxHighlighting();
  saveCode();
  outputPanel.classList.remove('show');
}

// ═══════════════════════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════════════════════
$('searchInput').addEventListener('input', renderList);

document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    renderList();
  });
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

// Mobile menu
$('menuToggle').addEventListener('click', () => {
  $('sidebar').classList.toggle('open');
  $('sidebarOverlay').classList.toggle('show');
});

// Close sidebar when clicking overlay
$('sidebarOverlay').addEventListener('click', () => {
  $('sidebar').classList.remove('open');
  $('sidebarOverlay').classList.remove('show');
});

// Code editor enhancements
codeEditor.addEventListener('keydown', (e) => {
  // Auto-indentation on Enter
  if (e.key === 'Enter') {
    e.preventDefault();
    
    const cursorPos = codeEditor.selectionStart;
    const value = codeEditor.value;
    const lines = value.substring(0, cursorPos).split('\n');
    const currentLine = lines[lines.length - 1];
    
    // Get current indentation
    const indent = currentLine.match(/^\s*/)[0];
    
    // Check if we need extra indentation
    let extraIndent = '';
    const trimmedLine = currentLine.trim();
    
    // Add extra indentation for opening braces/brackets
    if (trimmedLine.endsWith('{') || trimmedLine.endsWith('(') || trimmedLine.endsWith('[')) {
      extraIndent = '  '; // 2 spaces
    }
    
    // Python-style indentation
    if (currentLang === 'python' && trimmedLine.endsWith(':')) {
      extraIndent = '    '; // 4 spaces for Python
    }
    
    const newText = '\n' + indent + extraIndent;
    const newCursorPos = cursorPos + newText.length;
    
    codeEditor.value = value.substring(0, cursorPos) + newText + value.substring(cursorPos);
    codeEditor.setSelectionRange(newCursorPos, newCursorPos);
    
    updateLineNumbers();
    updateSyntaxHighlighting();
    updateCursorPosition();
    saveCode();
  }
  
  // Tab handling
  if (e.key === 'Tab') {
    e.preventDefault();
    
    const cursorPos = codeEditor.selectionStart;
    const value = codeEditor.value;
    
    if (e.shiftKey) {
      // Shift+Tab - remove indentation
      const lines = value.split('\n');
      const lineStart = value.lastIndexOf('\n', cursorPos - 1) + 1;
      const currentLineIndex = value.substring(0, cursorPos).split('\n').length - 1;
      const currentLine = lines[currentLineIndex];
      
      if (currentLine.startsWith('  ')) {
        lines[currentLineIndex] = currentLine.substring(2);
        const newValue = lines.join('\n');
        const newCursorPos = cursorPos - 2;
        
        codeEditor.value = newValue;
        codeEditor.setSelectionRange(newCursorPos, newCursorPos);
      }
    } else {
      // Tab - add indentation
      const spaces = currentLang === 'python' ? '    ' : '  ';
      const newValue = value.substring(0, cursorPos) + spaces + value.substring(cursorPos);
      const newCursorPos = cursorPos + spaces.length;
      
      codeEditor.value = newValue;
      codeEditor.setSelectionRange(newCursorPos, newCursorPos);
    }
    
    updateLineNumbers();
    updateSyntaxHighlighting();
    updateCursorPosition();
    saveCode();
  }
  
  // Auto-complete brackets
  if (e.key === '{' || e.key === '(' || e.key === '[') {
    e.preventDefault();
    
    const cursorPos = codeEditor.selectionStart;
    const value = codeEditor.value;
    const closingBracket = e.key === '{' ? '}' : e.key === '(' ? ')' : ']';
    
    const newValue = value.substring(0, cursorPos) + e.key + closingBracket + value.substring(cursorPos);
    const newCursorPos = cursorPos + 1;
    
    codeEditor.value = newValue;
    codeEditor.setSelectionRange(newCursorPos, newCursorPos);
    
    updateLineNumbers();
    updateSyntaxHighlighting();
    updateCursorPosition();
    saveCode();
  }
});

// Update line numbers and cursor position on input
codeEditor.addEventListener('input', () => {
  updateLineNumbers();
  updateSyntaxHighlighting();
  updateCursorPosition();
  saveCode();
});

codeEditor.addEventListener('click', updateCursorPosition);
codeEditor.addEventListener('keyup', updateCursorPosition);

function updateCursorPosition() {
  const cursorPos = codeEditor.selectionStart;
  const value = codeEditor.value;
  const lines = value.substring(0, cursorPos).split('\n');
  const line = lines.length;
  const col = lines[lines.length - 1].length + 1;
  
  lineColEl.textContent = `Ln ${line}, Col ${col}`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════════
function init() {
  syncSolved();
  updateStats();
  renderList();
  updateLineNumbers();
  updateSyntaxHighlighting();
  updateCursorPosition();
}

init();
