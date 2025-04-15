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