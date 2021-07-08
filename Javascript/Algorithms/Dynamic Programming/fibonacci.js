// Here I have implemented a Recursive function to calculate fibonacci number at a particular index
// and optimized it from O(2^n) to O(n) using Dynamic Programming


// 0 1 1 2 3 5 8 13 21 34

let cache = {
}

let calculations = 0;
function optimizedFibonacci(n){
    calculations++;
    if (n < 2){
        cache[n] = n;
        return n;
    }
    if (!cache[n-2]){
        cache[n-2] = optimizedFibonacci(n-2);
    }
    if (!cache[n-1]){
        cache[n-1] = optimizedFibonacci(n-1);
    }
    cache[n] = cache[n-1] + cache[n-2];
    return cache[n];
}


console.log(optimizedFibonacci(50))
console.log(calculations)