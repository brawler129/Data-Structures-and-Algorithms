import sys

def reverse_string(string):
    """
        Reverse provided string
    """ 
    # Check for invalid input
    if string is None or type(string) is not str:
        return 'Invalid Input'

    length = len(string)
    
    # Check for single character strings
    if length < 2:
        return string # Return string itself

    # Create empty string to store reversed string
    reversed_string = ""
    for i in range(length-1, -1, -1):
        reversed_string += string[i]
    return reversed_string


# Command line argument
# input_string = sys.argv[1]

""" A Few test cases """
# input_string = None  # NULL
# input_string = 1  #Integer
# input_string = ['Hello!' , 'my' , 'name', 'is', 'Devesh.']  # Array

input_string = 'Hello! My name is Devesh.'

print(reverse_string(input_string))