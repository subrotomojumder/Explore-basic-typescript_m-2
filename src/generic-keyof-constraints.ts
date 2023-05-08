type PersonType ={
    name: string,
    age: number,
    address: string
};

type NewConstType = "name"| "role"| "Business";
const a: NewConstType = "Business";

type newTypeUsingKeyOf = keyof NewConstType