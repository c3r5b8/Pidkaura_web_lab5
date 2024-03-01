let a = prompt("a");
let b = prompt("b");
let c = prompt("c");
let run = true;
if (isNaN(a)) {
    console.log("a is not a number");
    run = false;
}
if (isNaN(b)) {
    console.log("b is not a number");
    run = false;
}
if (isNaN(c)) {
    console.log("c is not a number");
    run = false;
}

if (run) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let p = (a + b + c) / 2;
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    let h_a = (2 * S) / a;
    let h_b = (2 * S) / b;
    let h_c = (2 * S) / c;
    let h = Math.max(h_a, h_b, h_c);
    console.log(h);
}
