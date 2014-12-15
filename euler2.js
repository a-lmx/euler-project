// Euler Problem 2, Even Fibonacci Numbers (https://projecteuler.net/problem=2)

var fib = [1, 2];

// console.log(fib);

var i = fib.length;

// console.log(i);

var newFib = 0;

var max = 4000000;

while (newFib < max) {
    newFib = fib[i-1]+fib[i-2];
    if(newFib < max) {
        fib.push(newFib);
    }
    i++;
}

// console.log(fib);

var sum = 0;

for (var j = 0; j < i; j++) {
    if(fib[j]%2===0) {
        sum+=fib[j];
    }
}

console.log(sum);