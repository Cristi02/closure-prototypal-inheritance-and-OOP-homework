class Snake {
    constructor(name, length, weight, venomousSnake) {
        this.name = name;
        this.length = length;
        this.weight = weight;
        this.venomousSnake = venomousSnake;
    }

    getSnakeGeneralInfo() {
        return `The ${
            this.venomousSnake ? "Venomous" : "Nonvenomous"
        } snake: \n\tName: ${this.name}\n\tLength: ${
            this.length
        } m\n\tWeight: ${this.weight} kg`;
    }

    howItComparesWithAverageSnake() {
        let averageSnakeLength = 1;
        let averageSnakeWeight = 2.2;
        return `It's length is ${
            this.length > averageSnakeLength ? "bigger" : "smaller "
        } and it's weight is ${
            this.weight > averageSnakeWeight ? "bigger" : "smaller "
        } than the average `;
    }
}

class VenomousSnake extends Snake {
    constructor(name, length, weight, poisonLevel) {
        super(name, length, weight, true);
        this.poisonLevel = poisonLevel;
    }

    howDangerousItIs() {
        if (this.poisonLevel < 3) return "Danger level: Low";
        else if (this.poisonLevel < 6) return "Danger level: Medium";
        else return "Danger level: High";
    }
}

class NonvenomousSnake extends Snake {
    constructor(name, length, weight, color) {
        super(name, length, weight, false);
        this.color = color;
    }
    howCommonTheColorIs() {
        let commonColors = ["green", "brown", "yellow", "red", "black"];
        return this.color in commonColors
            ? "It has a common color"
            : "It has an uncommon color";
    }
}
snake1 = new Snake("Johnny", 5, 2.3, false);

console.log(snake1.getSnakeGeneralInfo());
console.log(snake1.howItComparesWithAverageSnake());

snake2 = new VenomousSnake("Katie", 2.1, 1.2, 5);
snake3 = new NonvenomousSnake("Slippery", 0.3, 0.7, "blue");

console.log("\n" + snake2.getSnakeGeneralInfo());
console.log(snake2.howItComparesWithAverageSnake());
console.log(snake2.howDangerousItIs());

console.log("\n" + snake3.getSnakeGeneralInfo());
console.log(snake3.howItComparesWithAverageSnake());
console.log(snake3.howCommonTheColorIs());
