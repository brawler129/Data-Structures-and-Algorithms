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



print(reverse_string(sys.argv[1]))