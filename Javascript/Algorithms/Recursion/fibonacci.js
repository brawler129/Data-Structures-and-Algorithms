// Here I have implemented two functions that return the value at the nth index in the fibonacci
// series. One is recursive and the other is iterative.


// This is also good -> Time complexity of O(n)
let fibonacciRecursive = (n, lower = 0, higher = 1, index = 1) => {
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
let fibonacciRecursive2 = (n) => {
    if (n < 2){
        return n;
    }
    return fibonacciRecursive2(n-1) + fibonacciRecursive2(n-2);
}


console.log(fibonacciRecursive(50))
// console.log(fibonacciRecursive2(50))

console.log(fibonacciIterative(50))