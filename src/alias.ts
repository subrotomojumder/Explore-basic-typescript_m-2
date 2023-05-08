// type alias practical
type CrushType = {
    name: string,
    age?: number, //optional type
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: "Rohim",
    age: 45,
    profession: "Web Developer",
    address: "Noakhali"
};
const crush2: CrushType = {
    name: "Hori",
    profession: "Instructor",
    address: "Borishal"
};

type CrushMarried = boolean;
const isCrushMarried: CrushMarried = true;

type CourseName = string;
const courseName: CourseName = 'Nex Level Web Development';

type Operation = (numb1: number, numb2: number) => number;
const calculate = (
    num1: number,
    num2: number,
    operation: Operation
) => {
    return operation(num1, num2);
}
console.log(calculate(1, 2, (x, y) => x + y));
const multiple = calculate(4,5, (x,y)=> x*y);
const division = calculate(5,5, (x,y)=> x/y);
console.log(division);