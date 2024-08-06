const user = {
    name : 'raju',
    email : 'raju@mail.com',
    password : 'abc123',
    age : 34
};

console.log(user);

console.log(user.name);
console.log(user['email']);

user.address = 'lucknow';
user.age = 22;
console.log(user);

user['roll-no'] =27654;
console.log(user['roll-no']);

const key ='address';

console.log(user[key]);

console.log( object.keys(user));
console.log( object.values(user));
console.log( object.entries(user));

user.contact = ['7071101060', '645647465']

console.log(user.contacts);

const smartphone = {
    brand : 'apple',
    model : 'iphone 16',
    price :  79999,
    colors : [ 'white', 'green', 'black']
};

//  syntax to access 2nd color of the  smathphone
console.log(smartphone.colors[1]);
//replace green with two green color variants

smartphone.colors.splice( 1, 1, 'forestr green', 'sea green');

const smartphonearray = [
    {
    brand : 'apple',
    model : 'iphone 16',
    price :  79999,
    colors : [ 'white', 'green', 'black'],
    ram : [ '2gb', '8gb']
},
{
    brand : 'apple',
    model : 'iphone 16',
    price :  79999,
    colors : [ 'white', 'green', 'black'],
}


{
    brand : 'apple',
    model : '12r',
    price :  79999,
    colors : [ 'white', 'green', ]
},
{
    brand : 'mpotorola',
    model : 'iphone 16',
    price :  79999,
    colors : [ 'white', 'green', 'black']
},
];

// 1. access price  of the 2nd smarthphone
console.log( smartphonearray[1].price);
// 2. add new color in 3rd smarthphone
smarthphonearray[2].colors.push('pink');
console.log(smartphonearray[2].colors);

// 3. create an array containing all the brands of smartphone
console.log (smartphonearray.map( (phone)=> { return phone.brand }));
// 4. filter all smartphones containing white color
console.log(smartphonearray.filter ((phone) => { return phone.colors === 'white'}));

console.log(['a', 'b', 'c',].includes);



















































