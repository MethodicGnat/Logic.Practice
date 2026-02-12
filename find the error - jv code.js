//Challenge 1:
//a. Write a program in Python that checks if a number is even or odd.
//b. Write a program in Python that checks if a person is eligible to vote based on their age.
//c. Write a program in Python that checks if a number is positive, negative, or zero, and displays the appropriate message.

//odd or even
let num1 = Number(prompt("Enter a number:"));

if (num1 % 2 === 0) { // changed from nums % 2 === 0 to num1 % 2 === 0
    console.log("The number is even");
} else {
    console.log("The number is odd");
}


// voting eligibility
let age = Number(prompt("Enter your age:"));

if (age >= 21) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

//check number
let nums = Number(prompt("Enter a number:"));

if (nums > 0) {
    console.log("The number is positive");
} else if (nums < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

//Challenge 2:
//a. Write a program in Python that prints numbers from 1 to 10 using a for loop.
//b. Write a program in Python that prints numbers from 1 to 5 using a while loop.
//c. Write a program in Python that calculates the factorial of a given number using a loop.

//uses for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//uses while loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//calculates factorial
let num = Number(prompt("Enter a number:"));
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);

//Challenge 3:
//a. Write a function in Python that greets a user by name.
//b. Write a function in Python that checks if a number is even or odd.
//c. Write a function in Python that accepts a string and returns the number of vowels in the string.

//greet user
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Jiya");

//even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7));


//count vowels
function countVowels(text) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));

//Challenge 4:
//a. Write a program in Python that stores a list of fruits and prints each fruit using a loop.
//b. Write a program in Python that stores student names and their grades in a dictionary,and prints each student's name and grade.
//c. Create an array of numbers in Python and write a function to find the highest number in the array.

//list of fruits
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

//student names and grades
let students = {
    Alice: 90,
    Bob: 85,
    Charlie: 88
};

for (let name in students) {
    console.log(name + ": " + students[name]);
}

//find the highest number in an array
let numbers = [10, 25, 7, 42, 18];

function findMax(nums) {
    let maxNum = nums[0];
    for (let num of nums) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}

console.log(findMax(numbers));
