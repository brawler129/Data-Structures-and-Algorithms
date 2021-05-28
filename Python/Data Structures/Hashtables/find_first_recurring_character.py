def find_first_recurring_character(arr):
    """ Function to find first recurring character in an array """

    hashtable = {}
    for item in arr:
        if hashtable.get(item, None) is not None:
            return item
        hashtable[item] = 1

    return "No recurring item"


arr = [1, 2, 3, 4, 5, 6, 3]
print(find_first_recurring_character(arr))
