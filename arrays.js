const arr = [65, 'nice', true, console.log, undefined];
console.log(arr);

console.log(typeof arr);
console.log(Array.isArray(arr));

console.log(arr.length);
console.log('\n\n\n');

const movies = ['300', 'MI', 'Deadpool', 'Expendables', '3 Idiots', 'Inception'];

// indexing
console.log( movies[1] );
console.log( movies.indexOf('Inception') );
console.log( movies.at(-2) );
movies[2] = 'Deadpool & Wolverine';
console.log( movies );

// slicing
console.log( movies.slice(2, 5) );
console.log( movies.slice (2) );
console.log( movies.slice (-4) );
console.log( movies.slice (-4, -2) );
console.log(movies);

console.log( movies [2].slice(-9));

// adding and removing elements
movies.push('kanchana'); //adds element at the end
console.log(movies);

movies.unshift('gangs of wasseypur'); // adds element at the beginning
console.log(movies);

console.log( movies.pop() ); //removes element from the end
console.log( movies.shift () ); // removes element from the beginning
console.log( movies);

//movies.splice(3,2); // removes 2 elements starting from index 3
movies.splice(3,2, 'jhon wick', 'the boys', 'invincible')
console.log( movies);








































