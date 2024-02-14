//sum of all elements in an array.
const arr= [1,2,5,7,8,8,9,5];
let sum=0 ;
for(let i=0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum);

// find the maximum element in an array.


function largestElement(arr) {
    return Math.max(...arr);
}
 
const num1 = [10, 15, 28, 20, 13];
const result = largestElement(num1);
 
console.log("The largest element in the array is:" + result);

//duplicates elements in an aaray
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);




//even number

let numbers = [1,3,2,11,6,9];

let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}
console.log(`Even numbers in an array are: ${even}`);

//odd number

let number= [1,3,2,11,6,9];

let odd = [];
for(let i = 0; i < number.length; i++) {
       if (number[i] % 2 != 0)
       odd.push(number[i]);
}
console.log(`odd numbers in an array are: ${odd}`);


//function concat
function func() {
    let num1 = [11, 12, 13],
        num2 = [14, 15, 16],
        num3 = [17, 18, 19];
    console.log(num1.concat(num2, num3));
}
func();

//rotate an array


function leftRotateArray(arr, positions) {
    const n = arr.length;
    const rotatedArray = [];

    for (let i = 0; i < n; i++) {
        const newPosition = (i + positions) % n;
        rotatedArray[i] = arr[newPosition];
    }

    return rotatedArray;
}

let arr1 = [1, 2, 3, 4, 5];
let positionsToRotate = 2;
let result = leftRotateArray(arr1, positionsToRotate);

console.log("Original Array:", arr1);
console.log("Array after Left Rotation:", result);


//intersection
let first_array = [1, 3, 5, 7, 9];
let second_array = [2, 3, 4, 5, 6, 9];
 
let res_arr = (first_array, second_array) => {
    let new_array = [];
    for (let i = 0; i < first_array.length; i++) {
        for (let j = 0; j < second_array.length; j++) {
            if (first_array[i] === second_array[j]) {
                new_array.push(first_array[i]);
            }
        }
    }
    return new_array;
};
 
console.log("Array obtained is :");
console.log(res_arr(first_array, second_array));


//union



let A = [7, 2, 6, 4, 5];
let B = [1, 6, 4, 9];
 
function GFG_Fun() {
    let union = [...new Set([...A, ...B])];
    console.log("Union is: " + union);
}
 
GFG_Fun();

//palindrome
function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));


// sort

console.log("Sort the Array of Objects Alphabetically");
const Name_arr = [
    { name: 'Rahul' },
    { name: 'Sam' },
    { name: 'Aman' },
];
const sortedList = Name_arr.sort((a, b) =>
    a.name.localeCompare(b.name));
console.log(sortedList);

// array ascending order using sort

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
console.log(points);

// descending order
const point = [40, 100, 1, 5, 25, 10];
point.sort(function(a, b){return b-a});
console.log(point);

// Write a function to find the missing number in an array of consecutive integers.
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

const array = [1, 2, 4, 6, 3, 7, 8];
const missingNumber = findMissingNumber(array);
console.log(`Missing number: ${missingNumber}`);