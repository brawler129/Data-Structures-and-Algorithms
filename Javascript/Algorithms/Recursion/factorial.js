// Here I have implemented two functions to find the factorial of a number. One is iterative
// and the other is recursive


let recursiveFactorial = (num) => {
    if (num < 0){
        return 'Factorial of negative numbers cannot be calculated'
    }
    if (num === 1 || num === 0){
        // Base case
        return 1;
    }
    // Recursice case
    return num * recursiveFactorial(num-1);
}


let iterativeFactorial = (num) => {
    if (num < 0){
        return 'Factorial of negative numbers cannot be calculated'
    }
    if (num === 1 || num === 0){
        return 1;
    }
    let fact = 1;
    for (let i=0; i <  num; i++){
        fact = fact * (num-i);
    }
    return fact;
}


console.log(recursiveFactorial(3));

console.log(iterativeFactorial(5));