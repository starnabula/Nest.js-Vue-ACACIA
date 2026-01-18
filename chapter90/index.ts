const persons = { name: 'John', age: 30 }
const keysw = Object.keys(persons) as Array<keyof typeof persons>;

keysw.forEach((key) => {
    const value = person[key] // ✅ ผ่านฉลุย ไม่แดง
    console.log(value);
});
// const person = { name: 'John', age: 30 }

// const keys = Object.keys(person) as Array<keyof typeof person>;

// keys.forEach((key) => {
//     const value = person[key]
//     console.log(value)
// });
const person = { name: 'John', age: 30 }
const keys = Object.keys(person) as Array<keyof typeof person>;
keys.forEach((key) => {
    const value = person[key]
    console.log(value);
});