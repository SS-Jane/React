// block scope

// old

var x = 10;
var y = 0;

if (x === 10) {
    y = 100;
    var z = 200;
    let total = y + z;
    console.log(total); 
}

console.log(y);
console.log(z);
// console.log(total);



