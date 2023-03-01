//1st Question ~ Write a function that takes an array of numbers from 1 to n with one number missing, and returns the missing number. For example, given an array [1, 2, 3, 5], the function should return 4.

// function array(arr)
// {
//     let num = arr.length
//     var total = ((num + 2) * (num + 1)) / 2;

//     for(let i = 0; i<num;i++)
//     {
//         total -= arr[i];
//     }
//     return total

// }

// console.log(array([1,2,3,5]))


//2nd Question ~ Write a function that takes two arrays and returns true if the first array is a subsequence of the second array.


// function sequence(arr1, arr2) 
// {
//     let i = 0;
//     let j = 0;
  
//     while (j < arr2.length) 
//     {
//       if (arr1[i] === arr2[j]) 
//       {
//         i++
//       }
  
//       if (i === arr1.length) 
//       {
//         return true
//       }
  
//       j++
//     }
  
//     return false
//   }
// console.log(sequence([1,2,3,5], [1,2,3,6]))





//3rd Question ~ Implement a function that takes a string as an argument and returns the most frequent character in the string.

// var getMax = function (str) 
// {
//     var max = 0,
//     maxChar = ''
//     str.split('').forEach(function(char)
//         {
//             if(str.split(char).length > max) 
//             {
//                max = str.split(char).length;
//                maxChar = char;
//             }
//         })
//         return maxChar
// }
    
// console.log('The most repeated letter is : ')
// console.log(getMax(`hello`))







//4th Question ~ Implement a function that takes a string as an argument and returns a new string with the first letter of each word capitalized.

// function string(str)
// {
//     const words = str.split(" ")
//     for(let i=0; i<words.length; i++)
//     {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//     }
//     words.join(" ")
//     console.log(words);
// }
// string('hello hi')



//5th Question ~ Implement a function that takes a string as an argument and returns a new string with all the vowels removed.

// function string(str)
// {
//     var newString = str.replace(/[aeiou]/g, '');
//     console.log(newString);
// }
// string('zaeziobu')


//____________________________________________________________________________________________
//Pattern

//Q.1 ~ Write a javascript function that returns 1 for 1, 22 for 2, 333 for 3, 4444 for 4.

// let num = ""
// for(let i=1; i<5 ; i++)
// {
//     for(let j=1; j<=i; j++)
//     {
//         num += i
//     }
//     num += "\n"
// }
// console.log(num);


//Q.2 ~ Write a javascript function that returns 1 for 2, 23 for 2, 356 for 3, 4800 for 4, 60355 for 5.

// 2
// 23
// 356
// 4800
// 60355

let num = ""
for(let i=1; i<6 ; i++)
{
    for(let j=1; j<=i;j++)
    {
        num += i+j             
    }
    num += "\n"
}
console.log(num)