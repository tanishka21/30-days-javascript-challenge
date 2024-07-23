// Activity 1 - if else Statement
// Task 1 - check if number is +ve, -ve and zero

let number = "a";
if (number > 0 || number < 0 || number == 0) {
  console.log("Number is zero, +ve or -ve");
} else {
  console.log("Invalid Number");
}

// Task 2 - check if person is elligible to vote (age>=18)

let age = 23;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You are not elligible to vote");
}

// Activity - 2 Nested if-else statement
//Task 3 - Find the largest of three number using the nested if-else statement

let a = Math.random().toString().slice(2, 5);
let b = Math.random().toString().slice(2, 5);
let c = Math.random().toString().slice(2, 5);

console.log(`a : ${a}, b : ${b}, c : ${c}`);

if (a > b && a > c) {
  console.log(`a is the largest number ${a}`);
} else if (b > a && b > c) {
  console.log(`b is the largest number ${b}`);
} else {
  console.log(`c is the largest number ${c}`);
}

// Activity 3 - Switch Case

//Task 4-

let weekDays = 7;
switch (weekDays) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Number not in range");
    break;
}

// Task 5 - (A, B, C, D, F) based on a score and log the grade to the console

let score = Math.floor(Math.random().toString().slice(2, 4));

switch (true) {
  case score >= 90:
    console.log(`Your grades are A and you score ${score}`);
    break;

  case score < 90 && score >= 80:
    console.log(`Your grades are B and you score ${score}`);
    break;

  case score < 80 && score >= 70:
    console.log(`Your grades are C and you score ${score}`);
    break;

  case score < 70 && score >= 60:
    console.log(`Your grades are D and you score ${score}`);
    break;

  case score < 60 && score >= 50:
    console.log(`Your grades are E and you score ${score}`);
    break;
  default:
    console.log(`Your grades are F and you score ${score}, below 50`);
    break;
}

// Activity 4 : Ternary Operator
// Task 6: Check if number is even or odd

let num = Math.floor(Math.random().toString().slice(2, 4));
console.log(`Number : ${num}`);

let result = num % 2 == 0 ? "Even Number" : "Odd number";
console.log(result);

// Task 7 : check the year is leap year or not (divisible by 4 but not 100 unless also divisible by 400)

let year = 2000;

let leapYear =
  year % 400 ? (year % 100 ? (year % 4 ? false : true) : false) : true;

console.log(
  `leap year is ${year} and is the year is leap year ? : ${leapYear}`
);

