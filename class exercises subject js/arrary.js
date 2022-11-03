// ● Create a new item array contain 5 items at your choice.
// ○ Add 2 more items to the end of the array. 
// ○ Remove the first item from the array and print it.
// ○ Sort the array in regular a,b,c order 
// ○ Sort the array in reverse a,b,c order 
// ● Create a new array contain 5 numbers
// ○ Print the index of each element in the array
// ○ Filter every element that divided by 4 without remain
// ● Go to https://www.w3schools.com/jsref/jsref_obj_array.asp
// ○ Create a new array of any data type that you like
// ○ Choose 1 method from the website that we didn’t used in the class and use 
// it

const arr = ['a', 'b', 'c', 'd', 'e']
arr[5] = 'f'
arr[6] = 'g'
arr.shift();
console.log(arr)
console.log(arr.sort())
console.log(arr.reverse())

const arr1 = [20, 7, 2, 5, -1]
arr1.forEach(x => console.log(arr1.indexOf(x)))
arr2 = arr1.filter(x => x % 4 == 0)
 console.log(arr2)

 const arr3 = ["Banana", "Orange", "Apple", "Mango"]
console.log(arr3.fill('Banana'))






