let V = prompt("V");
let h = prompt("h");
let run = true;
if (isNaN(V)) {
    console.log("V is not a number");
    run = false;
}
if (isNaN(h)) {
    console.log("h is not a number");
    run = false;
}
if (run) {
    V = parseInt(V);
    h = parseInt(h);
    a = Math.sqrt(3 * V / h);
    b = Math.sqrt(h * h + ((a / 2) * (a / 2)));
    s = a * b / 2;
    sb = s * 4;
    sb = sb.toFixed(3);
    console.log(sb);
}


