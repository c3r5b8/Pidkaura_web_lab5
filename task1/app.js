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
    let sb = Math.sqrt(3 * V * h + h * h * h) / 2;
    sb = sb.toFixed(3);
    console.log(sb);
}


