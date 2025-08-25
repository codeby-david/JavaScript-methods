//ARRAY METHODS

//1 . push() -Adds element to the end of an array.
//           -Returns new length of an array

let arrNums = [1, 2, 3, 4]
arrNums.push(5)
console.log(arrNums)//[1,2,3,4,5]


//2. pop() -removes the last element from an array.
//         -Returns the removed element

let cars = ["BWM", "Mercedes-Benz", "Toyota-Vitz", "Subaru"]
cars.pop()
console.log(cars)//['BWM','Mercedes-Benz','Toyota-Vitz']

//3. shift() -Removes the first element from an array.

let fruits = ["apple", "banana", "orange"];
let first = fruits.shift();

console.log(first);  // "apple"
console.log(fruits); // ["banana", "orange"]

//4. unshift() -Adds one or more elements at the beginnig of an array.
//             -Returns the new length of an array.

let alphabets = ['A', 'B', 'C', 'D']
alphabets.unshift('Z', 'Y')
console.log(alphabets)//[ 'Z', 'Y', 'A', 'B', 'C', 'D' ]

//5. map()-Creates a new array by applying a function to each element.

let nums = [1, 2, 3, 4, 5]
let productOfNums = nums.map(elm => elm * 2)//multiply each element in an array by 2
console.log(productOfNums)//[2,4,6,8,10]

//6. filter()-Creates a new array with elements that passes a particular test or passes a condition

let listOne = [2, 3, 4, 5, 10, 12, 13]
let listTwo = listOne.filter(nums => nums % 2 == 0)//filters even numbers
console.log(listTwo)//[2,4,10,12]

//7. reduce()- Reduces an array to single value by applying a fuction

let demoOne = [2, 3, 4, 5]
let demoSum = demoOne.reduce((x, y) => x + y)
console.log(demoSum)// 2+3+4+5 =14


//8. forEach()-Executes a fuction for each array element

let animals = ["Dog", "Rabbit", "Cow", "Pig"]
let animalIndex = animals.forEach((animals, index) => {
  console.log(index + ":" + animals)
  // 0: Dog
  // 1: Rabbit
  // 2: Cow
  // 3: Pig
})

//9.find()-Returns the first element that passes a condition
//        -If nothing matches ,returns undefined

let el = [1, 2, 3, 4, 5, 6]
let found = el.find((e) => e > 3)
console.log(found)//4

//10.concat()-Joins two or more arrays without changing the original
let origin = [1, 2, 3, 4]
let original2 = [5, 6, 7, 8]
let finalArr = origin.concat(original2)
console.log(finalArr)//[1,2,3,4,5,6,7,8]

//11.join()-Joins array elements into a sting with a separator

let words = ["Hello", "World"];
console.log(words.join(" "));   // "Hello World"
console.log(words.join("-"));   // "Hello-World"

//12.splice()-Adds/removes items in the origianal array
//format  - array.splice(start,deletecount,newItems...)
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "mango");
console.log(fruits); // ["apple", "mango", "cherry"]

//13.slice()-Returns a portion of the array ,does not change the original
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); // [2, 3, 4]
console.log(arr);             // [1, 2, 3, 4, 5]

//indexOf()-Returns the index of the first occurrence of the value
//         -Returns -1 if not found.
let items = ["pen", "book", "pen"];
console.log(items.indexOf("pen"));  // 0
console.log(items.indexOf("laptop")); // -1

//flat()-Flattens nested arrays.
let nested = [1, [2, [3, 4]]];
console.log(nested.flat());     // [1, 2, [3, 4]]
console.log(nested.flat(2));    // [1, 2, 3, 4]

//some()-Returns true if at least one element passes a condition.
let nums = [1, 3, 5, 8];
console.log(nums.some(n => n % 2 === 0)); // true (because 8 is even)

//every()Returns true if all element passes a condition
let nums2 = [2, 4, 6];
console.log(nums2.every(n => n % 2 === 0)); // true

//sort()-Sorts elements as strings by default.
//      -To sort numbers correctly, pass a compare function.
let letters = ["c", "a", "b"];
console.log(letters.sort()); // ["a", "b", "c"]

let nums3 = [40, 5, 100, 25];
console.log(nums3.sort());         // [100, 25, 40, 5] (wrong for numbers)
console.log(nums3.sort((a, b) => a - b)); // [5, 25, 40, 100] (correct)

