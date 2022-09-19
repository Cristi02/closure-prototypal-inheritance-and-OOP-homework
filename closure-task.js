function getMathModule(x) {
    let y = 2;

    return {
        sum: () => x + y,
        substract: () => x - y,
        multiply: () => x * y,
        divide: () => x / y,
    };
}

const math = getMathModule(3);

console.log(math.sum());
console.log(math.substract());
console.log(math.multiply());
console.log(math.divide());
