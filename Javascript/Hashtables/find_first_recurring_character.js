function find_first_recurring_character(arr){
    // Function to find first recurring character in an array

    // Store each character in the hashtable and if we come across a character
    // already in the hashtable we return the item
    hashTable = {};

    for(let item of arr){
        if(hashTable[item]){
            return item;
        }
        hashTable[item] = 1;
    }

    return "No recurring items"
}

arr = [1,2,3,4]
console.log(find_first_recurring_character(arr))