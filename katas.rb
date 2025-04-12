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

