let n = prompt("n");
let run = true;

if (isNaN(n)) {
    console.log("n is not a number");
    run = false;
}
if (run) {
    n = parseInt(n);
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        console.log(i);
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            sum += i;
        }
    }
    console.log(sum);
}
