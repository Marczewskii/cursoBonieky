function fat(n) {
    let res = 1;
    for (let i = n; i > 0 ; i--) {
        res = res * i;
    }
    return res;
}

console.log(fat(4));