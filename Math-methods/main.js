//MATH METHODS

//1.Math.round(num)-Rounds a number to the nearest integer
console.log(Math.round(4.0))//4
console.log(Math.round(4.5))//5

//2.Math.floor(num)-Always rounds down to the nearest integer.
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(-4.9)); // -5 (goes down)

//3.Math.ceil(num)- Rounds a number upto the nearest integer.
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(-4.1)); // -4 (goes up)

//4.Math.random()-Generates a random number between 0 and 1
console.log(Math.random())//random number

//5.Math.max(a,b,...)-Returns the largest number in a set
console.log(Math.max(1, 2, 3, 4, 4))//4
console.log(Math.max(23, 45, 132, 454))//454

//6.Math.min(a,b,c,...)-Returns the smallest number in a set
console.log(Math.min(1, 2, 3, 4, 4))//1
console.log(Math.min(23, 45, 132, 454))//23