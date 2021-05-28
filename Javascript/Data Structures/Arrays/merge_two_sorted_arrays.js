let mergeTwoSortedArrays = (arr1, arr2) =>{
    // Check whether both of them are arrays
    if (!arr1 instanceof Array || !arr2 instanceof Array){
        return "Please enter two arrays"
    }

    // Initialize the indices
    let arr1Index = 0
    let arr2Index = 0
    let merged_array = [] // Initialize output array
    while (arr1Index !== arr1.length || arr2Index !== arr2.length){
        // If elements in array 1 exhausted push elements of arr2
        if (arr1Index === arr1.length){
            merged_array.push(arr2[arr2Index]);
            arr2Index++;
        }
        // If elements in array 2 exhausted push elements of arr1
        else if (arr2Index === arr2.length){
            merged_array.push(arr1[arr1Index]);
            arr1Index++;
        }
        // If element at first array is LESSER than element at second array
        else if (arr1[arr1Index] < arr2[arr2Index]){
            merged_array.push(arr1[arr1Index]);
            arr1Index++;
        }
        // ELSE element at second array is LESSER OR equal to element at first array
        else {
            merged_array.push(arr2[arr2Index]);
            arr2Index++;
        }
    }

    return merged_array;
}

const arr1 = [1, 2, 3, 4, 5, 100, 140]
const arr2 = [2, 3, 5, 7, 9, 10]

console.log(mergeTwoSortedArrays(arr1, arr2))

