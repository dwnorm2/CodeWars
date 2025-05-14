# This code does not execute properly. Try to figure out why.

def multiply(a,b)
  a * b
end

puts multiply(5, 5)

# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number)
  if number % 2 == 0
    return "Even"
  end
   return "Odd"
end

def even_or_odd(number)
  if number.even?
    return "Even"
  end
  return "Odd"
end

def even_or_odd(number)
  return number.even? ? "Even": "Odd"
end

# We need a function that can transform a number (integer) into a string.

# What ways of achieving this do you know?

# Examples (input --> output):
# 123  --> "123"
# 999  --> "999"
# -100 --> "-100"

def number_to_string(num)
  return num.to_s
end

# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

def solution(str)
  return str.reverse
end


# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

# Examples
# makeNegative(1);  # return -1
# makeNegative(-5); # return -5
# makeNegative(0);  # return 0
# Notes
# The number can be negative already, in which case no change is required.
# Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

def make_negative(num)
  return -num.abs
end

# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 
def bool_to_word bool
return bool ? "Yes" : "No"
end

# Task
# You get an array of numbers, return the sum of all of the positives ones.

# Example
# [1, -4, 7, 12] => 
# 1
# +
# 7
# +
# 12
# =
# 20
# 1+7+12=20
# Note
# If there is nothing to sum, the sum is default to 0.

def positive_sum(arr)
  total = 0
  arr.each do |num|
    num > 0 ? total += num : total+=0
  end
  total
end

# Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"

def repeat_str (n, s)
  s*n
end

# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

def remove_char(s)
  s[1..-2]
end

def remove_char(s)
  s[1...-1]
end

# Complete the square sum function so that it squares each number passed into it and then sums the results together.

def square_sum(numbers)
  sum = 0
  numbers.each do |number|
    sum += number ** 2
  end
  sum
end

def square_sum(numbers)
  numbers.reduce(0) { |sum, num| sum + num**2}
end

def square_sum(numbers)
  numbers.sum {|num| num**2}
end

# Given an array of integers your solution should find the smallest integer.

# For example:

# Given [34, 15, 88, 2] your solution will return 2
# Given [34, -345, -1, 100] your solution will return -345
# You can assume, for the purpose of this kata, that the supplied array will not be empty.

def find_smallest_int(arr)
  arr.min
end

# Note: This kata is inspired by Convert a Number to a String!. Try that one too.

# Description
# We need a function that can transform a string into a number. What ways of achieving this do you know?

# Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

# Examples
# "1234" --> 1234
# "605"  --> 605
# "1405" --> 1405
# "-7" --> -7

def string_to_number(s)
s.to_i
end

# Summation
# Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

# For example (Input -> Output):

# 2 -> 3 (1 + 2)
# 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

def summation(num)
  sum = 0
  for i in 1..num do
    sum += i
  end
  sum
end

def summation(num)
  (1..num).sum
end

# Make a simple function called greet that returns the most-famous "hello world!".

# Style Points
# Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

def greet
  "hello world!".split("").join("")
end

# Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

# For example,

# [true,  true,  true,  false,
#   true,  true,  true,  true ,
#   true,  false, true,  false,
#   true,  false, false, true ,
#   true,  true,  true,  true ,
#   false, false, true,  true]
# The correct answer would be 17.

# Hint: Don't forget to check for bad values like null/undefined

def countSheeps array
  array.select {|sheep|sheep}.length
end

def countSheeps array
  array.count(true)
end

# Write a function that removes the spaces from the string, then return the resultant string.

# Examples (Input -> Output):

# "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
# "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
# "8aaaaa dddd r     " -> "8aaaaaddddr"

def no_space(x)
  x.split.join
end

def no_space(x)
  x.delete(" ")
end

# Code as fast as you can! You need to double the integer and return it.

def double_integer(i)
  i*2
end

# Implement a function which convert the given boolean value into its string representation.

# Note: Only valid inputs will be given.

def boolean_to_string(b)
  "#{b}"
end

def boolean_to_string(b)
  b.to_s
end

# Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

# [Make sure you type the exact thing I wrote or the program may not execute properly]

def greet(name)
  "Hello, #{name} how are you doing today?"
end

# Your task is to create a function that does four basic mathematical operations.

# The function should take three arguments - operation(string/char), value1(number), value2(number).
# The function should return result of numbers after applying the chosen operation.

# Examples(Operator, value1, value2) --> output
# ('+', 4, 7) --> 11
# ('-', 15, 18) --> -3
# ('*', 5, 5) --> 25
# ('/', 49, 7) --> 7

def basic_op(operator, value1, value2)
  eval("#{value1} #{operator} #{value2}")
end

# Nathan loves cycling.

# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

# For example:

# time = 3 ----> litres = 1

# time = 6.7---> litres = 3

# time = 11.8--> litres = 5

def litres(time)
  (time*0.5).to_i
end

# Introduction
# The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

# Task
# Given a year, return the century it is in.

# Examples
# 1705 --> 18
# 1900 --> 19
# 1601 --> 17
# 2000 --> 20
# 2742 --> 28

def century(year)
  (year / 100.0).ceil
end

# Given an array of integers, return a new array with each value doubled.

# For example:

# [1, 2, 3] --> [2, 4, 6]

def maps(x)
  x.map {|n| n*2}
end

# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

# Example (Input => Output):
# 35231 => [1,3,2,5,3]
# 0     => [0]

def digitize(n)
  n.to_s.split("").reverse.map{|n| n.to_i}
end

def digitize(n)
  n.to_s.chars.reverse.map(&:to_i)
end

# Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

# Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

def lovefunc( flower1, flower2 )
  (flower1 + flower2).odd?
end

def lovefunc( flower1, flower2 )
  if flower1 % 2 == 0 && flower2 % 2 != 0 || flower2 % 2 == 0 && flower1 % 2 != 0
    true
  else
    false
  end
end

# Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

# Examples
# Input: [1, 5.2, 4, 0, -1]
# Output: 9.2

# Input: []
# Output: 0

# Input: [-2.398]
# Output: -2.398

# Assumptions
# You can assume that you are only given numbers.
# You cannot assume the size of the array.
# You can assume that you do get an array and if the array is empty, return 0.
# What We're Testing
# We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
# Advanced users may find this extremely easy and can easily write this in one line.

def sum(numbers)
  numbers.sum
end

# Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

# Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

# Example:
# n= 5, m=5: 25
# n=-5, m=5:  0
# Waiting for translations and Feedback! Thanks!

def paperwork(n, m)
  if n <0 || m < 0
    0
  else
    n*m
  end
end

# Write a function which converts the input string to uppercase.

def make_upper_case(str)
  str.upcase
end

# Clock shows h hours, m minutes and s seconds after midnight.

# Your task is to write a function which returns the time since midnight in milliseconds.

# Example:
# h = 0
# m = 1
# s = 1

# result = 61000
# Input constraints:

# 0 <= h <= 23
# 0 <= m <= 59
# 0 <= s <= 59

def past(h, m, s)
  h*3600000 + m*60000 + s*1000
end

# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!

# The function takes a name as its only argument, and returns one of the following strings:

# name + " plays banjo" 
# name + " does not play banjo"
# Names given are always valid strings.

def are_you_playing_banjo(name)
  name[0].upcase == "R" ? "#{name} plays banjo" : "#{name} does not play banjo"
end

# This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

def simple_multiplication(number)
  number % 2 == 0 ? number*8 : number*9
end

# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# patrick feeney => P.F

def abbrev_name(name)
  first_name = name.split(" ")[0]
  last_name = name.split(" ")[1]
  
  "#{first_name[0].upcase}.#{last_name[0].upcase}"
end

# Can you find the needle in the haystack?

# Write a function findNeedle() that takes an array full of junk but containing one "needle"

# After your function finds the needle it should return a message (as a string) that says:

# "found the needle at position " plus the index it found the needle, so:

# Example(Input --> Output)

# ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
# Note: In COBOL, it should return "found the needle at position 6"

def find_needle(haystack)
  "found the needle at position #{haystack.index("needle")}"
end

# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

# [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
# [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
# [] --> []
# You can assume that all values are integers. Do not mutate the input array.

def invert(list)
  list.map{|n| n*-1}
end

# Write a function which calculates the average of the numbers in a given array.

# Note: Empty arrays should return 0.

def average(array)
  array.sum > 0 ? array.sum.to_f/array.length : 0
end

def average(array)
  array.empty? ? 0 : array.sum.to_f / array.length
end

# Sentence Smash
# Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

# Example
# ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
# words = ['hello', 'world', 'this', 'is', 'great']
# smash(words) # returns "hello world this is great"

def smash(words)
  words.join(" ")
end

# Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

# [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

def grow(x) 
  x.inject(:*)
end

# There was a test in your class and you passed it. Congratulations!

# But you're an ambitious person. You want to know if you're better than the average student in your class.

# You receive an array with your peers' test scores. Now calculate the average and compare your score!

# Return true if you're better, else false!

# Note:
# Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

def better_than_average(arr, points)
  avg = (arr.sum + points) / (arr.length + 1)
  points > avg ? true : false
end

def better_than_average(arr, points)
  (arr.sum + points) / (arr.length + 1) < points
end

# A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

# Return true if yes, false otherwise :)

def hero(bullets, dragons)
  bullets >= dragons*2
end

# Given an array of integers.

# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

# If the input is an empty array or is null, return an empty array.

# Example
# For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

def count_positives_sum_negatives(lst)
  lst.size == 0 ? [] : [lst.select { |x| x > 0}.length, lst.select { |x| x <0}.sum]
end

# Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

# Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

# Create a function which translates a given DNA string into RNA.

# For example:

# "GCAT"  =>  "GCAU"
# The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

def dna_to_rna(dna)
  dna.gsub("T","U")
end

# You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

# Considering these factors, write a function that tells you if it is possible to get to the pump or not.

# Function should return true if it is possible and false if not.

def zero_fuel(distance, mpg, fuel_left)
  distance/mpg.to_f <= fuel_left
end

# Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

# When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

# Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

# S is misinterpreted as 5
# O is misinterpreted as 0
# I is misinterpreted as 1
# The test cases contain numbers only by mistake.

def correct(string)
  string.gsub("0", "O").gsub("1", "I").gsub("5", "S")
end

# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

def solution(str)
  str.reverse
end

# Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

# When bool is truthy, func1 should be called, otherwise call the func2.

# Example:
# _if(true, proc{puts "True"}, proc{puts "False"})
# # Logs 'True' to the console.
 
def _if(bool, ifTrue, ifFalse)
  bool ? ifTrue.call : ifFalse.call  
end 

# Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

# Write a function to help Bob with this calculation.

def get_volume_of_cuboid(length, width, height)
    length*width*height
end