// Let 'n' the the number of stairs and 'x' is an array containing the number of steps you can take
// at one time. Considering 'n' and 'x' find the number of unique ways you can climb the stairs.


function numberOfWays(n, x){
    if (n === 0){ return 1; }

    let nums = [];
    nums[0] = 1;

    for (let i=1; i<=n; i++){
        let ways = 0;
        for (let j of x){
            if ((i - j) > 0){ // If i - j <= 0 => Allowed step is greater than i. We cant take such steps as we would overstep
                ways += nums[i-j];
            }
        }
        nums[i] = ways;
    }

    return ways[n];
}