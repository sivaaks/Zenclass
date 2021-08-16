arr1 = [2, 5, 9, 8, 7, 4, 3, 2, 5];
arr2 = ['car', 'Bike', 'cat', 'plane', 'Bus', 'madam', 'malayalam'];
arr3 = [2, 5, 9, 7, 8, 1, 2, 0, 6];

//IIFE - Immediately Invoked Function Expression
//Print odd numbers in an array
(function (array) {
    for (let num in array) {
        if (!(num % 2 === 0)) console.log(num);
    }
})(arr1);

//Convert all the strings to title caps in a string array
(function (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
})(arr2);

console.log(arr2);

//Sum of all numbers in an array
(function (array) {
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });
    console.log(sum);
})(arr1);


//Return all the prime numbers in an array
(function (array) {
    let primeNumbers = [];
    let isPrime = false;
    array.forEach(values => {
        for (let i = 2; i < 10; i++) {
            if ((values % 2) === 0 && (values > 2)) isPrime = false;
            else {
                isPrime = true;
                break;
            }
        }
        if (isPrime) primeNumbers.push(values);
    });
    console.log(primeNumbers);
})(arr1);

//Return all the palindromes in an array
(function (array) {
    let palindromes = [];
    array.forEach(strings => {
        let reversedString = '';
        for (let i = strings.length - 1; i >= 0; i--) reversedString += strings[i];
        if (strings.toUpperCase() === reversedString.toUpperCase()) palindromes.push(strings);
    });
    console.log(palindromes);
})(arr2);

//Return median of two sorted arrays of same size
(function (array1, array2) {
    let median = [];
    array1 = array1.sort();
    array2 = array2.sort();
    if (array1.length % 2 === 0) {
        median.push(array1[(array1.length / 2).toFixed()]);
        median.push(array1[((array1.length / 2) + 1).toFixed()]);
    }
    else median.push(array1[(array1.length / 2).toFixed()]);

    if (array2.length % 2 === 0) {
        median.push(array2[(array2.length / 2).toFixed()]);
        median.push(array2[((array2.length / 2) + 1).toFixed()]);
    }
    else median.push(array2[(array2.length / 2).toFixed()]);

    console.log(median);
})(arr1, arr3);

//Remove duplicates from an array
(function (array) {
    let nonDuplicateArray = [];
    array.forEach(values => {
        if (!nonDuplicateArray.includes(values)) nonDuplicateArray.push(values);
    })
    console.log(nonDuplicateArray);
})(arr1);

//Rotate an array by k times
(function (array, times) {
    for (let i = 1; i <= times; i++) {
        let firstElement = array[0];
        array.splice(0, 1);
        array.push(firstElement);
    }
    console.log(array);
})(arr1, 2);

//Anonyms functions
//Print odd numbers in an array
let oddNumbers=function(array){
    for (let num in array) {
        if (!(num % 2 === 0)) console.log(num);
    }
}
oddNumbers(arr1);

//Convert all the strings to title caps in a string array
let capsString=function(array){
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    console.log(array);
}
capsString(arr2);

//Sum of all numbers in an array
let sumOfArray= function(array){
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });
    console.log(sum);
}
sumOfArray(arr1);

//Return all the prime numbers in an array
let primeNumbers= function(array){
    let primeNumbers = [];
    let isPrime = false;
    array.forEach(values => {
        for (let i = 2; i < 10; i++) {
            if ((values % 2) === 0 && (values > 2)) isPrime = false;
            else {
                isPrime = true;
                break;
            }
        }
        if (isPrime) primeNumbers.push(values);
    });
    console.log(primeNumbers);
}
primeNumbers(arr1);

//Return all the palindromes in an array
let palindromes=function(array){
    let palindromes = [];
    array.forEach(strings => {
        let reversedString = '';
        for (let i = strings.length - 1; i >= 0; i--) reversedString += strings[i];
        if (strings.toUpperCase() === reversedString.toUpperCase()) palindromes.push(strings);
    });
    console.log(palindromes);
}
palindromes(arr2);

//Return median of two sorted arrays of same size
let median= function(array1,array2){
    let median = [];
    array1 = array1.sort();
    array2 = array2.sort();
    if (array1.length % 2 === 0) {
        median.push(array1[(array1.length / 2).toFixed()]);
        median.push(array1[((array1.length / 2) + 1).toFixed()]);
    }
    else median.push(array1[(array1.length / 2).toFixed()]);

    if (array2.length % 2 === 0) {
        median.push(array2[(array2.length / 2).toFixed()]);
        median.push(array2[((array2.length / 2) + 1).toFixed()]);
    }
    else median.push(array2[(array2.length / 2).toFixed()]);

    console.log(median);
}
median(arr1,arr3);

//Remove duplicates from an array
let removeDuplicates= function(array){
    let nonDuplicateArray = [];
    array.forEach(values => {
        if (!nonDuplicateArray.includes(values)) nonDuplicateArray.push(values);
    })
    console.log(nonDuplicateArray);
}
removeDuplicates(arr1);

//Rotate an array by k times
let rotateArray= function(array,times){
    for (let i = 1; i <= times; i++) {
        let firstElement = array[0];
        array.splice(0, 1);
        array.push(firstElement);
    }
    console.log(array);
}
rotateArray(arr1,3);

//Arrow functions
//Print odd numbers in an array
let oddNumbersArrow=array=>{
    for (let num in array) {
        if (!(num % 2 === 0)) console.log(num);
    }
}
oddNumbersArrow(arr1);

//Convert all the strings to title caps in a string array
let capsStringArrow=array=>{
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    console.log(array);
}
capsString(arr2);

//Sum of all numbers in an array
let sumOfArrayArrow=array=>{
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });
    console.log(sum);
}
sumOfArrayArrow(arr1);

//Return all the prime numbers in an array
let primeNumbersArrow= array=>{
    let primeNumbers = [];
    let isPrime = false;
    array.forEach(values => {
        for (let i = 2; i < 10; i++) {
            if ((values % 2) === 0 && (values > 2)) isPrime = false;
            else {
                isPrime = true;
                break;
            }
        }
        if (isPrime) primeNumbers.push(values);
    });
    console.log(primeNumbers);
}
primeNumbersArrow(arr1);

//Return all the palindromes in an array
let palindromesArrow=array=>{
    let palindromes = [];
    array.forEach(strings => {
        let reversedString = '';
        for (let i = strings.length - 1; i >= 0; i--) reversedString += strings[i];
        if (strings.toUpperCase() === reversedString.toUpperCase()) palindromes.push(strings);
    });
    console.log(palindromes);
}
palindromesArrow(arr2);
