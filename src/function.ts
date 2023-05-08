function add(num1: number, num2: number): number {
    return num1 + num2;
}
const sum = add(12, 5);

const addArrow = (num1: number, num2: number = 0): number => num1 + num2;

// typescript array multiple value
const arr = [1, 2, 5, 6];
const newArray = arr.map((elem: number) => elem * elem);

const person: {
    name: string,
    myMoney: number,
    addBalance(taka: number): string
} = {
    name: 'Jakir',
    myMoney: 454,
    addBalance(taka: number) {
        return `My new balance ${taka + this.myMoney}`;
    }
}

const heroin: {
    name: string,
    role: number,
    bangoli: number,
    results(english: number): number
} = {
    name: "Ripat",
    role: 566,
    bangoli: 14,
    results(english: number) {
        return english + this.bangoli
    }
}