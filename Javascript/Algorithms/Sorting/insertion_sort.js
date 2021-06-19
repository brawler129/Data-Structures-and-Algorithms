// Here I have implemented Insertion Sort to better understand and study Insertion Sort


function insertionSort(arr){
    let length = arr.length;

    for (let i=1; i < length; i++){
        if (arr[i] < arr[i-1]){
            let toBeInserted = arr[i];
            let j = i;
            while(arr[j-1] > toBeInserted && j > 0){
                arr[j] = arr[j-1];      // Shift elements to the right until spot for 'toBeInserted' is found or j < 1
                j--;
            }
            arr[j] = toBeInserted;
        }
    }
    return arr;
}

console.log(insertionSort([12,10,3,5,6,3,1]))
