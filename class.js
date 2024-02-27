for (let i = 50; i >= 0; i -= 10){
    if (i > 0) {
    process.stdout.write(`${i}, `);
    }
    else {
        process.stdout.write(`${i} `);
    }
}
