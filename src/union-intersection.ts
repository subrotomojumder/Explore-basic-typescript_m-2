type NoobDeveloper = {
    name: string
};

type JuniorDeveloper = {
    expertise: string,
    experience: number
};

// below type is union type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    expertise: "Javascript",
    experience: 1
}

// below type is intersection
type FullStackDev = NoobDeveloper & JuniorDeveloper & {
    leaderShipExperience: number,
    company: string,
    level: 'High' | 'Middle' | 'Low'
};


// below type is enum
enum Language {
    bangoli = "Bangla",
    english = "English",
    corian= "Corian"
}
type FullStackDevPro = FullStackDev & {
    language: Language
}

const expertDeveloper: FullStackDevPro = {
    name: 'Jkir Hosen',
    expertise: 'Typescript',
    experience: 4,
    leaderShipExperience: 2,
    company: "Halima",
    level: "Low",
    language: Language.bangoli
}