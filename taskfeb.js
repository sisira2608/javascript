let aa=[10,20,30,40];

 let ab=[50,60,70,80];

console.log(aa.concat(ab));

 let abc=aa.toString(ab);
 console.log(typeof(abc));
console.log(aa.join(ab));


//Join elements of an array into a single string.
var array = ["apple", "banana", "orange"];
var result = array.join(', '); 
console.log(result);

let a = [1, 2, 3, 4, 5, 6];
console.log(a.join('|'));

//Convert the first letter of each word in a sentence to uppercase.

function capitalizeFLetter() {
    let string = 'sisiravineesh';
    console.log(string[0].toUpperCase() +
        string.slice(1));
}
capitalizeFLetter()


//Find the longest word in a sentence.
    function longest(str){ 
 
	str = str.split(" ") 

	return str.sort((a, b) => b.length - a.length)[0] 
	}
	console.log(longest("welcome to the javascript"+ 
" where students learn programming"))

//Swap the first and last elements of an array.
let ar1 = [10, 20, 30, 40, 50]; 
console.log("Original array is:", ar1);
let temp = ar1[0]; 
ar1[0] = ar1[ar1.length - 1]; 
ar1[ar1.length - 1] = temp; 
console.log("Array after interchange:", ar1);

//Remove Whitespace:
let c="  hello  "
console.log(c);
console.log(c.trim());

//Remove extra whitespace from the beginning and end of a strin
let originalText = "vineesh yuvein hi sisira";

let removedSpacesText = originalText.split(" ").join("");
console.log(removedSpacesText);


//Count the number of words in a given sentence.

function wordsLen(str) { 
    const array = str.trim().split(/\s+/); 
    return array.length; 
} 
const str = "Welcome, to the the world"; 
console.log("Word count:" ,wordsLen(str));



//Sort an array of strings in alphabetical order.
let elements = ['grapes', 'apple', 'guva'];
elements.sort(function (a, b) {
  return a.length - b.length;
});
elements.sort();
console.log(elements);




//Merge two arrays into a single sorted array.
function mergeAndSortArrays(arr1, arr2) {
	// Concatenate the arrays
	let mergedArray = arr1.concat(arr2);
	
	// Sort the merged array
	mergedArray.sort((a, b) =>  a - b); // Sort in ascending order
	
	return mergedArray;
  }
  
  // Example usage:
  let arr1 = [1, 3, 5];
  let arr2 = [2, 4, 6];
  
  let sortedArray = mergeAndSortArrays(arr1, arr2);
  console.log(sortedArray); 
  
