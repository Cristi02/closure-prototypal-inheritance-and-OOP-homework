const Snake = function (name, length, weight, venomousSnake) {
    this.name = name;
    this.length = length;
    this.weight = weight;
    this.venomousSnake = venomousSnake;
};

Snake.prototype.getSnakeGeneralInfo = function () {
    const snakeType = this.venomousSnake ? "Venomous" : "Nonvenomous";

    return `The ${snakeType} snake: \n\tName: ${this.name}\n\tLength: ${this.length} m\n\tWeight: ${this.weight} kg`;
};

Snake.prototype.howItComparesWithAverageSnake = function () {
    const averageSnakeLength = 1;
    const averageSnakeWeight = 2.2;

    const lengthComparasion =
        this.length > averageSnakeLength ? "bigger" : "smaller ";
    const weightComparasion =
        this.length > averageSnakeWeight ? "bigger" : "smaller ";

    return `It's length is ${lengthComparasion} and it's weight is ${weightComparasion} than the average `;
};

const VenomousSnake = function (name, length, weight, poisonLevel) {
    Snake.call(this, name, length, weight, true);
    this.poisonLevel = poisonLevel;
};

VenomousSnake.prototype.howDangerousItIs = function () {
    let dangerLevel;
    if (this.poisonLevel < 3) dangerLevel = "Low";
    else if (this.poisonLevel < 6) dangerLevel = "Medium";
    else dangerLevel = "High";

    return `Danger level: ${dangerLevel}`;
};

const NonvenomousSnake = function (name, length, weight, color) {
    Snake.call(this, name, length, weight, false);
    this.color = color;
};

NonvenomousSnake.prototype.howCommonTheColorIs = function () {
    let commonColors = ["green", "brown", "yellow", "red", "black"];
    const typeOfColor =
        this.color in commonColors
            ? "It has a common color"
            : "It has an uncommon color";

    return typeOfColor;
};

Object.setPrototypeOf(VenomousSnake.prototype, Snake.prototype);
Object.setPrototypeOf(NonvenomousSnake.prototype, Snake.prototype);

snake1 = new Snake("Johnny", 5, 2.3, false);

console.log(snake1.getSnakeGeneralInfo());
console.log(snake1.howItComparesWithAverageSnake());

snake2 = new VenomousSnake("Katie", 2.1, 1.2, 5);
snake3 = new NonvenomousSnake("Slippery", 2.1, 0.7, "blue");

console.log("\n" + snake2.getSnakeGeneralInfo());
console.log(snake2.howItComparesWithAverageSnake());
console.log(snake2.howDangerousItIs());

console.log("\n" + snake3.getSnakeGeneralInfo());
console.log(snake3.howItComparesWithAverageSnake());
console.log(snake3.howCommonTheColorIs());
