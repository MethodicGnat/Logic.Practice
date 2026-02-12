
#Challenge 1:
#a. Write a program in Python that checks if a number is even or odd.
#b. Write a program in Python that checks if a person is eligible to vote based on their age.
#c. Write a program in Python that checks if a number is positive, negative, or zero, and displays the appropriate message.

#odd or even
num = int(input("Enter a number: "))

if num % 2 == 0: # changed expression from num%2==1 to this
    print("The number is even")
else:
    print("The number is odd")

# voting eligibility
age = int(input("Enter your age: "))

if age >= 18: # made it so that when you're 18 AND above, you can vote
    print("You are eligible to vote")
else:
    print("You are not eligible to vote")

# check number
num = int(input("Enter a number: "))

if num > 0: # changed the comparison operator from >= to >
    print("The number is positive")
elif num < 0:
    print("The number is negative")
else:
    print("The number is zero")

#Challenge 2:
#a. Write a program in Python that prints numbers from 1 to 10 using a for loop.
#b. Write a program in Python that prints numbers from 1 to 5 using a while loop.
#c. Write a program in Python that calculates the factorial of a given number using a loop.

#uses for loop
for i in range(1, 11):
    print(i)

#uses while loop
i = 1
while i <= 5:
    print(i)
    i += 1

#calculates factorial
num = int(input("Enter a number: "))
factorial = 1

for i in range(1, num + 1):
    factorial *= i

print("Factorial:", factorial)

#Challenge 3:
#a. Write a function in Python that greets a user by name.
#b. Write a function in Python that checks if a number is even or odd.
#c. Write a function in Python that accepts a string and returns the number of vowels in the string.

#greet user
def greet(name):
    print("Hello, " + name + "!")

greet("Jiya")

#even or odd
def check_even_odd(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

print(check_even_odd(7))

#count vowels
def count_vowels(text):
    vowels = "aeiouAEIOU"
    count = 0

    for char in text:
        if char in vowels:
            count += 1

    return count

print(count_vowels("Hello World"))

#Challenge 4:
#a. Write a program in Python that stores a list of fruits and prints each fruit using a loop.
#b. Write a program in Python that stores student names and their grades in a dictionary,and prints each student's name and grade.
#c. Create an array of numbers in Python and write a function to find the highest number in the array.

#list of fruits
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)

#student names and grades
students = {
    "Alice": 90,
    "Bob": 85,
    "Charlie": 88
}

for name, grade in students.items():
    print(name, ":", grade)

#find the highest number in an array
numbers = [10, 25, 7, 42, 18]

def find_max(nums):
    max_num = nums[0]
    for num in nums:
        if num > max_num:
            max_num = num
    return max_num

print(find_max(numbers))
