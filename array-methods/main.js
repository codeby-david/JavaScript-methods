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