// Here I have implemented Quick Sort to better understand and study Quick Sort

const numbers = [5,4,2,4,1,3,10,8,7,8];

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high){
    let p = high; // Set pivot to the right most element
    let i = low;

    while (i < p){
        if (arr[i] < arr[p]){
            i++;
        }
        else{
            swap(arr, i, p);
            swap(arr, i, p-1);
            p--;
        }
    }
    return p // Return partition point
}

function quickSort(array, left, right){
    if (left < right){
        let p = partition(array, left, right); // Get Pivot
        quickSort(array, left, p-1); // Quick sort left sub part
        quickSort(array, p+1, right); // Qucik sort right sub part
    }
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);

console.log(numbers);