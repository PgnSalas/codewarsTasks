/* 
    THE TASK 1
*/
function isPrime(num) {

    let check = undefined;

    if (num > 1) {
        for(let i = 2; i <= num; i++) {
            if (num !== i && num % i == 0) {
                check = true
            }
       }
    }else if (num < -1) {
        for(let i = -2; i >= num; i--) {
            if ( num !== i && num % i == 0) {
                check = true
            } 
        }
    } else {
        check = true
    }

    let newCheck = check;
    console.log(!newCheck);
}

isPrime(73);

// ==========================================================================================================================================

/* 
    THE TASK 2
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
    Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solutionNum(number) {
    let sum = 0;
    for(let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }

    console.log(sum);
}

solution(100);

// ==========================================================================================================================================

/* 
    THE TASK 3
    Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
*/
function solutionStr(str) {
    let arr = [];
    let newStr = '';
    console.log(str.length);
    for (let i = 0; i < str.length; i++) {
        if (str.length % 2 === 0) {
            if (newStr.length <  2) {
                newStr += str[i];
            }
    
            if (newStr.length === 2) {
                arr.push(newStr);
                newStr = ''
            } 
        } else {
            if (newStr.length <  2) {
                newStr += str[i];
            }
    
            if (newStr.length === 2) {
                arr.push(newStr);
                newStr = ''
            } else  if (i == str.length - 1) {
                newStr += '_';
                arr.push(newStr);
            }
        }
    }

    console.log(arr);
}

solutionStr('afsdfsrasdf');

// ==========================================================================================================================================

/* 
    THE TASK 4
    Your task is to write a function which returns the sum of following series upto nth term(parameter).
*/

function SeriesSum(n) {
    let number = 1;
    let dunymicNum = 4
    let staticNum = 1/`${dunymicNum}`;
    if (n == 2) {
        number += staticNum
    }

    for (let i = 1; i <= n; i++) {
        console.log(dunymicNum);
        if (i == 2) {
            number += staticNum
        }

        if (i > 2) {
            dunymicNum += 3;
            number += staticNum;
            console.log(number);
        }
    }
    console.log(number);
}

SeriesSum(5);


/* 
    THE TASK 5
    The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word) {
    const arr = word.split('');
    const arrRepeatLetter = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j <= arr.length; j++) {
            if (arr[i] == arr[j]) {
                arrRepeatLetter.push(arr[j]);
            }
        }
    }

    // console.log(arrRepeatLetter);

    let str = '';
    for (let i = 0; i < arrRepeatLetter.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arrRepeatLetter[j] == arr[i]) {
                console.log(arr[i]);
            }
        }
    }

    console.log(str);
}

duplicateEncode('recede');
duplicateEncode('Success');