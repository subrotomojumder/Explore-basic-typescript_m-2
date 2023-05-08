const friends = ['Rohim', 'Boloram', 'Nitay', 'Robin'];
const newFriends = ['Kamal', 'Mezba', 'Hori'];

// destructur
const [bestFriend] = friends;
// console.log(bestFriend)
const addressInfo = {
    district: 'Noakhali',
    suburb: "Subarnachar"
}
const {district: MyDistrict} = addressInfo;
console.log(MyDistrict)

// spread operator used
friends.push(...newFriends);
// console.log(friends);

const greetFriends = (friend1: string, friend2: string, friend3: string): void => console.log(`Hi ${friend1} \n Hi ${friend2} \n Hi ${friend3}`);
// greetFriends('hori', 'lori', 'peri')

// used by rest operator
const allFriends = (...friends: string[]):void => friends.forEach(friend=> console.log(`Hi ${friend}`))
// allFriends('Atic', 'Josim', 'Kasem', "Ridoy");

console.log("hello my friend")