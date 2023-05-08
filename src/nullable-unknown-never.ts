// nullable type function
const searchName = (name: string | null) => {
    if (name === null) {
        console.log("There is nothing to search!");
    } else {
        console.log("Searching.......");
    }
}
// searchName("null");

// unknown type function
const calculateSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(convertedSpeed)
    } else if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ');
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(convertedSpeed);
    } else {
        console.log("There is wrong type!")
    }
}
// calculateSpeed(10);
// calculateSpeed('50 kmh^-1');
// calculateSpeed(null);

// never type function
// custom err create function
const throwError = (message: string): never => {
    throw new Error(message);
};                                               

throwError("Tumi error khaico")