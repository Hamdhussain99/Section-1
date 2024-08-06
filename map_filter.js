const nums = [36,19,10,2,6,13,49];

//map

const squares = nums.map( (a) => { return a**2 });
console.log(squares);

const prices = [ 23.88, 274.50, 888.9, 274.2121, 99.99];

const intprices = prices.map( p=> { return parseInt(p ) });
console.log(intprices);

const evennums =  nums.filter( (n) => {return n%2===0});
console.log(evennums);

//filter prices greater than 50 and less than 300

const myprices = prices

