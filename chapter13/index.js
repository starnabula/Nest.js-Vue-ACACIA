
const amount = 123456.7584;

const formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB'
});

console.log(formatter.format(amount));

const formatter2 = new Intl.NumberFormat('th-TH', {
    style: 'decimal'
});

console.log(formatter2.format(amount));

const currentDate = new Date();
 
const formatter3 = new Intl.DateTimeFormat('th-TH');
console.log(formatter3.format(currentDate));

const formatter4 = new Intl.DateTimeFormat('th-TH',{
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});
console.log(formatter4.format(currentDate));