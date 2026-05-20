//Easy Level: Warm-ups & Core Syntax

//1. Reverse a String : Write a function reverseString(str) that takes a string input and returns that exact string flipped backwards.

/*
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Elma"));
*/



//2. FizzBuzz Scenario : Write a function `fizzBuzz(n)` that prints or returns numbers from 1 up to `n`. 
//   For multiples of 3, use `"Fizz"` instead of the number. For multiples of 5, use `"Buzz"`. For multiples of both, use `"FizzBuzz"`.

/*
function fizzBuzz(n) {

    for(let i = 1; i <= n; i++) {

        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }

        else if(i % 3 === 0) {
            console.log("Fizz");
        }

        else if(i % 5 === 0) {
            console.log("Buzz");
        }

        else {
            console.log(i);
        }
    }
}

fizzBuzz(15);
*/



//3. Find the Largest Number : Write a function `findMax(arr)` that receives an array of numbers and extracts the highest single numerical value.

/*
function findMax(arr) {

    let max = arr[0];

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([1, 5, 8, 3]));
*/





//Basic to Intermediate Level: Data Structures & Logic

// 4. Count Vowels : Write a function `countVowels(str)` that scans a text string and outputs the combined occurrence count of vowels 
// (a, e, i, o, u), ignoring capitalization.

/*
function countVowels(str) {

    
    let count = 0;
    let vowels = "aeiou";

    for(let i = 0; i < str.length; i++) {

        let char = str[i].toLowerCase();

        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Sabrin Ahmed Elma"));
*/



// 5. Remove Duplicates from Array : Write a function `removeDuplicates(arr)` that takes an array and filters out any repeating values, 
// returning a clean array with unique values only.

/*
function removeDuplicates(arr) {

    //remove duplicate values
    let uniqueArray = arr.filter(function(value, index) {
        //Keep only first
        return arr.indexOf(value) === index;
    });
    //return
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
*/



// 6. Check for Palindrome : Write a function `isPalindrome(str)` that checks whether a phrase reads identically 
// both forwards and backwards, discounting external spaces, punctuation, or uneven casing.

/*
function isPalindrome(str) {

    str = str.toLowerCase();

    let reversed = str.split('').reverse().join('');

    if(str === reversed) {
        return true;
    }

    else {
        return false;
    }
}
console.log(isPalindrome("racecar"));
*/



// 7. Title Case a Sentence : Write a function `titleCase(str)` that modifies every word within a string sentence 
// to begin with an upper-case character while leaving following letters lowercased.

/*
function titleCase(str) {

    // Convert string into array of words
    let words = str.toLowerCase().split(" ");

    // Loop through each word
    for(let i = 0; i < words.length; i++) {

        // Capitalize first letter
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // Join words back into sentence
    return words.join(" ");
}

// Example Case
console.log(titleCase("i love coding"));
*/




//Advanced Level: Closures, Async, & Algorithms

// 8. Two Sum Algorithm : Given an array of integer elements `nums` along with a target sum integer `target`,
// look up and return the exact element indices of the pair that yields the target sum value.

/*
function twoSum(nums, target) {

    for(let i = 0; i < nums.length; i++) {

        for(let j = i + 1; j < nums.length; j++) {

            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));
*/



// 9. Memoized Function Decorator : Write a higher-order wrapper function `memoize(fn)` that accepts an expensive calculation sequence and 
// returns a optimized proxy. If execution matches previous parameters, return the saved cache reference instead of computing again.

/*
function memoize(fn) {

    let cache = {};

    return function(num) {
        if(cache[num] !== undefined) {
            return cache[num];
        }
        let result = fn(num);
        cache[num] = result;

        return result;
    };
}
function factorial(n) {

    if(n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
*/



// 10. Asynchronous Fetch Timeout wrapper : Construct a utility function `fetchWithTimeout(url, ms)` that executes 
// a traditional network request via `fetch()`. If the remote service fails to resolve before `ms` time passes, automatically 
// trigger a Promise failure statement throwing a `"Request Timed Out"` error.

/*
function fetchWithTimeout(url, ms) {

  const fetchPromise = fetch(url);

  const timeoutPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("Request Timed Out"));
    }, ms);
  });
  return Promise.race([fetchPromise, timeoutPromise]);
}
fetchWithTimeout("https://api.example.com", 3000)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err.message);
  });
  */