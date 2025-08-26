//DATE METHODS
//To start working with date methods, you must first create a Date Object
//**let date = new Date()

//1.getFullYear()-Returns the year of a date
let date = new Date()
console.log(date.getFullYear())//2025

//2.getMonth()-Returns the month (0-11) of a date
console.log(date.getMonth())//7(July)
//to get exact month
console.log(date.getMonth() + 1)//8(August)

//3.getDate()-Returns the day of the month(1-31)
console.log(date.getDate())//22

//4.toISOString()-Returns the date as a string in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).
console.log(date.toISOString())//2025-08-22T12:07:25.921Z

//5.getTime()-Returns a number of milliseconds since January 1,1970
console.log(date.getTime())//1755864578215

//6.getDay()-Returns the day of the week(0-6) for a specific date
console.log(date.getDay()) //3

//7.setFullYear(year)-Sets the year of a date object
console.log(date.setFullYear(20230))

//we have setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), setMilliseconds() to be used as above