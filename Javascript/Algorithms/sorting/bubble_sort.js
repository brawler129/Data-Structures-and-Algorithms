// Here I have implemented bubble sort to better understand and study Bubble Sorting


function bubbleSort(arr){
    let swapped = false; // For optimized approach
    for (let i=0; i < arr.length; i++){
        for (let j=0; j < (arr.length - i - 1); j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([8,7,6,5,4,3,2,1]))