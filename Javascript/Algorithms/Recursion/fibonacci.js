// Here I have implemented two functions that return the value at the nth index in the fibonacci
// series. One is recursive and the other is iterative.


// This is also good -> Time complexity of O(n)
let calculations = 0; // To check how many times the fuction is run in Recursion

let fibonacciRecursive = (n, lower = 0, higher = 1, index = 1) => {
    calculations++;
    if (n === 0){
        return lower; // 0 at start
    }
    if (index === n){
        return higher; // 1 at start
    }
    return fibonacciRecursive(n, higher, lower + higher, index+1);
}

// This is good -> Time complexity of O(n)
let fibonacciIterative = (n) => {
    let index = 1;
    let lower = 0;
    let higher = 1;
    let temp = 0;
    if (n === 0){
        return 
    }
    while (index < n){
        temp = lower;
        lower = higher;
        higher = temp + lower;
        index++;
    }
    return higher;
}

// This is a bad approach. This has a time complexity of O(2^n)
//          f(4)
//         /   \
//        f(3)  f(2)
//       /  \
//      f(2) f(1)
// Dynamic Programming can be used to improve this function and optimize it to O(n).
// NOTE:- This is implemented in the Dynamic Programming section.

let fibonacciRecursive2 = (n) => {
    calculations++;
    if (n < 2){
        return n;
    }
    return fibonacciRecursive2(n-1) + fibonacciRecursive2(n-2);
}


console.log(fibonacciRecursive(50))
// console.log(fibonacciRecursive2(50))

// console.log(fibonacciIterative(50))

console.log(calculations)
