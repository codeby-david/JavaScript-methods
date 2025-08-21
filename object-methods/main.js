//OBJECTS METHODS

//1. Object.keys(abj) -Returns an array of objects keys(property names)

const user = {
  id: 1,
  name: "David",
  age: 40
}
console.log(Object.keys(user))//[ 'id', 'name', 'age' ]

//2. Object.values(abj)-Returns an array of an object values

const user2 = {
  id: 2,
  name: "Robert",
  age: 50
}
console.log(Object.values(user2))//[ 2, 'Robert', 50 ]

//3.Object.entries(obj)-Returns an array of key-value pairs

const user3 = {
  id: 3,
  name: "Kim",
  age: 20
}
console.log(Object.entries(user3))//[ [ 'id', 3 ], [ 'name', 'Kim' ], [ 'age', 20 ] ]

//4. Object.freeze(obj) -Prevents modification of an object

const user4 = {
  id: 1,
  name: "Ann",
  age: 25
}

Object.freeze(user4)
user4.name = "Sarah"//wont change the object value
user4.age = 35//won't change object value
console.log(user4)//{ id: 1, name: 'Ann', age: 25 }


//5.Object.seal()-Prevents adding/removing properties, but you can still update existing values.

const user5 = {
  name: "Alice",
  age: 25
};

Object.seal(user);

user.age = 30;   // works
user.city = "Nairobi"; // wont add

console.log(user); // { name: "Alice", age: 30 }




//6.Object.assign()-Copies values from one object to another.

const user6 = {
  name: "Alice"
};
const details = {
  age: 25,
  city: "Nairobi"
};

const merged = Object.assign({}, user, details);

console.log(merged);// { name: "Alice", age: 25, city: "Nairobi" }



//7. Object.hasOwn() (or hasOwnProperty) -Checks if an object has a specific property.

const user7 = { name: "Alice", age: 25 };

console.log(Object.hasOwn(user7, "name")); // true
console.log(Object.hasOwn(user7, "city")); // false


