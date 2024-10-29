function oddNumbers(start = 0, end = 100){
    for (let i = start; i <= end; i++) {
        if(i % 2 != 0) console.log(i);
    }
}

module.exports = oddNumbers