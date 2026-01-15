// old way 
function testVer(){
    if (true) {
        var message = 'this is var message';
    }
    console.log(message)
}
testVer();

for (var i = 0; i < 5; i++) {
    console.log(i);
    
}
console.log(i);//bad
console.log('=========')
for (let j = 0; j < 5; j++) {
    console.log(j);
    
}
console.log(j);//goood