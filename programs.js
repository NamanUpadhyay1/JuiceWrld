//1st Question Write a function that takes a string as input and returns the longest substring that contains only unique characters.

// function findLongestWord(str) 
// {
//     var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; })
//     return longestWord[0]
// }
// console.log(findLongestWord("hi my name is naman"))

//2nd Question ~ Write a function that takes an array of num as input and returns the maximum subarray sum.


// function array(num) 
// {
//     let maxSum = num[0];
//     let currentSum = num[0];

//     for (let i = 1; i < num.length; i++) 
//     {
//         currentSum = Math.max(num[i], currentSum + num[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum;
// }
// console.log(array([1,2,3,4,-5]));


//3rd Question ~ Write a function that takes two arrays of integers as input and returns an array of their intersection.


// function intersection(array1, array2)
// {
//     const firstSet = new Set(array1)
//     const secondSet = new Set(array2)

//     let result = []
//     for(let i of secondSet)
//     {
//         if(firstSet.has(i))
//         {
//             result.push(i)
//         }
//     }
//     return result
// }
// const array1 = [1,2,3,4,7]
// const array2 = [1,2,5,6,7]
// const answer = intersection(array1,array2)
// console.log(answer);

// 4th Question ~ Write a function that takes a stringing as input and returns true if the stringing contains all the letters of the alphabet, and false otherwise.


// function input(stringing)
// {
//     let alphabets = 'abcdefghijklmnopqrstuvwxyz'
//     let result = stringing.includes(alphabets)
//     if(result)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// }
// console.log('The stringing 1 is '+input('abcdefghijklmnopqrstuvwxyz'))
// console.log('The stringing 2 is '+input('abcdefghijklmnopqrstuvwxy'))