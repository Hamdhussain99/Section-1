const fruits =
   ['mango', 'banana', 'apple', 'orange', 'pineapple', 'grapes', 'guava', 'papaya'];
   console.log(fruits[4]);

   console.log(fruits);

   const nums = [ 36,19,10,2,6,13,49 ];

   for(let i=0; i<nums.length;i++){
       console.log( nums[i]);
   }
   console.log('----------');
   for(let n of nums) {
      console.log(n);
   }

   console.log('---------using for each function----------');

   nums.forEach( (a, i ) => { console.log (a, i ); } );
   nums.forEach( (a, i ) => { console.log (a*a ); } );

   const evennums = [];
   // create a new array containing only even numbers

   nums.forEach( (n)=> {
      if (n%2 ===0){
         evennums.push(n);
      }
   });

   console.log(evennums);





