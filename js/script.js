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

    let str = '';
    for (let i = 0; i < arrRepeatLetter.length; i++) {
        gad:for (let j = 0; j < arr.length; j++) {
            if (arrRepeatLetter[i] == arr[j]) {
                console.log(arr[i]);
                continue gad;
            }
            continue gad;
        }
    }

    console.log(str);
}

duplicateEncode('recede');
duplicateEncode('Success');


/* 
    THE TASK 6
    Digital root is the recursive sum of all the digits in a number.
    Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function digitalRoot(n) {
    let newNum = 0;
    let str = '';
    str += n;
    if (n < 10) {
        console.log(n);
    } else {
        for(let i = 0; i < str.length; i++) {
            newNum += +str[i];
        };
        n = newNum;
        return digitalRoot(n);
    }
}

digitalRoot(7);


/* 
    THE TASK 7
     An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
    let arr = [];
    let newStr = str.split('');
    for(let i = 0; i < newStr.length; i++) {
        for(let j = i + 1; j < newStr.length; j++) {
            if (newStr[i].toLowerCase() == newStr[j].toLowerCase()) {
                arr.push(newStr[i]);
            }
        }
    }и

    if (arr.length > 0) {
        return false;
    } else {
        return true;
    }
}

isIsogram('moOse');





// ===============================================================VADIM========================================================
const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 },
];
  
const getPositiveIncomeAmount = (data) => {
    let num = 0;
    data.forEach(item => item.amount > 0 ? num += item.amount : null);
    console.log(num);
};
  
const getTotalIncomeAmount = (data) => {
    let condition;
    data.forEach((item, index) => item.amount < 0 ? condition = true : null);
    condition ? console.log(data.reduce((acc, items) => acc + items.amount, 0)) : getPositiveIncomeAmount(data);
};

getTotalIncomeAmount(funds);


//   2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

// Пример:

// getTotalIncomeAmount(funds) => -500



/* 
    THE TASK 8
    ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
    If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN (pin) {
    let final = (pin.length == 4 || pin.length == 6) && /^[0-9]+$/ig.test(pin) ? true : false;
    console.log(final);
}

validatePIN('fg');



// 1) - make a triangular
let ne = '';
for(let i = 0; i <= 7; i++) {
    for(let j = i + 1; j <= i + 1; j++) {
        ne += "#";
        console.log(ne);
    }
} 
