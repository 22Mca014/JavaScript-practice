let score=33;
console.log(typeof score);
//a bug 
//when we convert string to number then javascript convert it but when we print that then we see NaN means not a number.
// example
let example="123a"
let example1=1239
let example2=Number(example)
console.log(typeof example2);
console.log(example2);

//"33"=>33;
//"33abc"=>NaN
//true=>1;
//false=>0;
//undefined=>
//null=>0
//incase of boolean convesion
//""=>false
//"david"=true