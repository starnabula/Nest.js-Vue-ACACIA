
const obj = {};
const hiddenkey = Symbol('hidden');

obj['fullname'] = 'mary mary';
obj[hiddenkey] = 'secret password';


for (const key in obj) {
    console.log(key);
}

console.log(Object.values(obj));
console.log(Object.entries(obj));

const s = Object.getOwnPropertySymbols(obj);
const password = obj[s[0]];

Object.getOwnPropertySymbols(obj).forEach(sym => {
    console.log(obj[sym]);
});

// const hiddenkey2 = Symbol('hidden2');
// const map = new Map();
//map.set(hiddenkey2,'my password');

console.log(JSON.stringify(obj));