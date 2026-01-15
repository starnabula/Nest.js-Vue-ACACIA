
const obj = {};
obj['fullname'] = 'mary';
obj['age'] = 20;
console.log(obj);
console.log(Object.keys(obj).length);
delete obj['age'];
console.log(obj);
console.log('=================');

const map = new Map();
map.set('fullname', 'Bob');
map.set('age', 20);
console.log(map);
console.log(map.get('age'));
map.delete('age');
console.log(map.size);