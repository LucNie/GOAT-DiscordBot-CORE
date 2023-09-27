
let pi = 1;
let iterration = 1000000000;
let precision = 100; // 100 means 100 decimal places

for (let i = 0; i < iterration; i++) {
   
    let temp = 1 / (i * 2 + 3);
    if (i % 2 == 0) {
        pi -= temp;
    } else {
        pi += temp;
    }
    if (i % 1000000 == 0) {
        console.log(`i : ${i}`);
    }  
    process.stdout.write(`\r$ pi : ${pi * 4}`);
}

console.log(`pi : ${pi * 4}`);
