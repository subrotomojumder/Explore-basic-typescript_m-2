// Nullish coalescing operator 
const isJobHolder = undefined;

const userName = isJobHolder ?? "Guest";
const userName2 = isJobHolder ? isJobHolder : "Guest";

// console.log({ userName }, { userName2 })

type Employee = {
    name: string,
    address: {
        country: "Bangladesh",
        district: string,
        street?: string
    }
};

const manus: Employee = {
    name: 'Rouhi',
    address: {
        country: "Bangladesh",
        district: 'Noakhali'
    }
};

const streetAddress = manus.address?.street ?? "No Home"
console.log(streetAddress)