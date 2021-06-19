// Here I have implemented Selection sort to better understand and study selection sort


function selectionSort(arr){
    let length = arr.length;
    for (let i=0; i < length - 1; i++){
        let smallest = i;
        for (let j=i+1; j < length; j++){
            if (arr[smallest] > arr[j]){
                smallest = j;
            }
        }
        if (smallest !== i){
            let temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([8,7,6,5,4,3,2,1]))

