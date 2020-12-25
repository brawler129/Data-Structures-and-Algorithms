let reverse_string = (string) =>{

    // Check if input is valid
    if (!string || typeof(string) !== 'string'){
        return 'Invalid Input';
    }

    if (string.length < 2){
        return string;
    }

    // Create empty string to store reversed string
    let reversed_string = "";
    // Loop through provided string backwards and add each element to 'reversed_string'
    for( let i=string.length -1; i >= 0; i--){
        reversed_string += string[i];
    }
    return reversed_string;
}

// Receive command line argument
// const input_string = process.argv[2]

const input_string = 'Hello! My name is Devesh.'
console.log(reverse_string(input_string))