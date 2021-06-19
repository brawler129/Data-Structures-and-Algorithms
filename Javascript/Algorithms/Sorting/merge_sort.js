// Here I have implemented Merge Sort to better understand and study Merge sort

const numbers = [7,10,3,2,1,5,6,9,8,4,0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left

  let half = Math.ceil(array.length/2);
  let left = array.slice(0, half);
  let right = array.slice(half, array.length);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    let mergedArray = [];
    let l = 0;
    let r = 0;
    while (l < left.length || r < right.length){
        if (r === right.length || left[l] < right[r]){
            mergedArray.push(left[l]);
            l++;
        }
        else{
            mergedArray.push(right[r]);
            r++;
        }
    }
    return mergedArray;
}


const answer = mergeSort(numbers);
console.log(answer);    