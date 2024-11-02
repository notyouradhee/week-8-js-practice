
function sumEvenOdd(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of numbers) {
      if (num % 2 === 0) evenSum += num;
      else oddSum += num;
    }
    return [evenSum, oddSum];
  }
  console.log(sumEvenOdd([1, 2, 3, 4, 5]));  


  
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  console.log(fahrenheitToCelsius(32));  
  console.log(celsiusToFahrenheit(0));  


  
  
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("JavaScript"));  


  
  
  function averageAndMedian(numbers) {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const average = sum / numbers.length;
    
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    const median = numbers.length % 2 === 0 ? (numbers[mid - 1] + numbers[mid]) / 2 : numbers[mid];
    
    return { average, median };
  }
  console.log(averageAndMedian([10, 20, 30, 40, 50]));  


  
  function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let char of str) {
      if (vowels.includes(char)) vowelCount++;
    }
    return vowelCount;
  }
  console.log(countVowels("JavaScript is fun"));  
  
 
  function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();
    for (let num of arr) {
      if (seen.has(num) && !duplicates.includes(num)) duplicates.push(num);
      else seen.add(num);
    }
    return duplicates;
  }
  console.log(findDuplicates([1, 2, 3, 2, 4, 5, 4]));  


  
  const cart = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 2.0 },
  ];
  function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price, 0);
  }
  console.log(calculateTotal(cart)); 


  
  function fizzBuzzExtended() {
    for (let i = 1; i <= 50; i++) {
      let output = "";
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      if (i % 7 === 0) output += "Boom";
      console.log(output || i);
    }
  }
  fizzBuzzExtended();  


  
  
  function findLongestWord(sentence) {
    const words = sentence.split(" ");
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
  }
  console.log(findLongestWord("JavaScript is amazing and fun"));  



  
  
  function arrayManipulation(numbers) {
    const modifiedArray = numbers.filter(num => num >= 50).map(num => num * 2);
    const sum = modifiedArray.reduce((acc, val) => acc + val, 0);
    return { modifiedArray, sum };
  }
  console.log(arrayManipulation([10, 60, 25, 80, 45, 100]));  



  

  function isPalindrome(str) {
    const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = normalizedStr.split("").reverse().join("");
    return normalizedStr === reversedStr;
  }
  console.log(isPalindrome("A man a plan a canal Panama"));  


  
 
  function findPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
    return primes;
  }
  console.log(findPrimes(20));  




  
  
  function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
  }
  console.log(rotateArray([1, 2, 3, 4, 5], 2));  


  
 
  function flattenArray(arr) {
    return arr.flat(Infinity);
  }
  console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));  


  
  
  function wordFrequency(sentence) {
    const words = sentence.toLowerCase().split(/\W+/);
    const frequencies = {};
    for (let word of words) {
      if (word) frequencies[word] = (frequencies[word] || 0) + 1;
    }
    return frequencies;
  }
  console.log(wordFrequency("The cat in the hat"));  
  