const user: {
    // This property value read-only
    readonly company: string,
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string
} = {
    name: "rohim",
    age: 17,
    isMarried: true,
    company: 'Programming Hero',
}

// user.company = 'Programming Hero Bangladesh';

const my: {
    name: string,
    role: number,
    address: "Noakhali"
    // optional chaining use for property optional
    years?: number
} = {
    name: "roleh",
    role: 41545,
    address: "Noakhali",

}