function find_first_recurring_character(arr){
    // Find First recurring character using NESTED LOOPS

    least_recurring_index = undefined
    for (let i=0; i< arr.length; i++){
        for (let j=i+1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                if (least_recurring_index === undefined){
                    least_recurring_index = j;
                    continue;
                }
                if ( j < least_recurring_index ){
                    least_recurring_index = j;
                }
            }
        }
    }

    if (least_recurring_index === undefined){
        return "No recurring items";
    }
    else{
        return arr[least_recurring_index];
    }
}

arr = [0, 1, 5, 5, 2, 1, 0, 6, 7]
console.log(find_first_recurring_character(arr))