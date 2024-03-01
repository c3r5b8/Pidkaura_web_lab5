let n_in = prompt("n");
let run = true;
if (isNaN(n_in)) {
    console.log("n is not a number");
    run = false;
}

if (run) {
    let n_arr = n_in.split('');
    let out = "";
    n_arr.forEach(char => {
        if (char == 0) {
            out += "*";
        } else if (!isNaN(char)) {
            out += char;
        }
    });
    console.log(out);
}
