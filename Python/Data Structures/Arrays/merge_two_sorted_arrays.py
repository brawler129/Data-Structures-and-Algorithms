def mergeTwoSortedArrays(arr1, arr2):

    # Check if arrays
    if type(arr1) is not list or type(arr2) is not list:
        return 'Invalid Input'

    # Initialize Indices
    arr1Index = 0
    arr2Index = 0
    # Iniialize output array
    sorted_array = []

    while arr1Index is not len(arr1) or arr2Index is not len(arr2):
        # If elements in array 1 exhausted push elements of arr2
        if arr1Index is len(arr1):
            sorted_array.append(arr2[arr2Index])
            arr2Index += 1
        # If elements in array 2 exhausted push elements of arr1
        elif arr2Index is len(arr2):
            sorted_array.append(arr1[arr1Index])
            arr1Index += 1
        # If element at first array is LESSER than element at second array
        elif arr1[arr1Index] < arr2[arr2Index]:
            sorted_array.append(arr1[arr1Index])
            arr1Index += 1
        # If element at first array is GREATER or equal to element at second array
        else:
            sorted_array.append(arr2[arr2Index])
            arr2Index += 1
    
    return sorted_array



arr1 = [1, 2, 3, 5, 6, 7, 10000]
arr2 = [4, 5, 10, 100, 1000]

print(mergeTwoSortedArrays(arr1, arr2))




