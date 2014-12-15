// Project Euler Problem 3, Largest Prime Factor (https://projecteuler.net/problem=3)

// create function to test for primeness of number
var primeTest = function(number) {
    var remainders = [];
    
    for (var i=2; i<number; i++) {
        remainders.push(number%i);
    }
    
    var isPrime = true;
    
    for (var j=0; j<remainders.length; j++) {
        if(remainders[j] === 0) {
            isPrime = false;
        }
    }
    return isPrime;
};

// make list of primes under a certain number
var primeList = function(number) {
    // make array to collect primes
    var primes = [];
    for (var i=2; i<number; i++) {
        if(primeTest(i)===true) {
            primes.push(i);
        }
    }
    return primes;
};

// assign name to list of primes under 1000
var prime1k = primeList(1000);
// under 10,000
var prime10k = primeList(10000);

// find prime factors of a number given a list of primes
var primeFactor = function(number, primelist) {
    var subject = number;
    var pFactors = [];
    while (subject > 1) {
        for(var i=0;i<primelist.length;i++) {
            var testPrime = primelist[i];
        	if(subject%testPrime===0) {
        	    pFactors.push(testPrime);
                // console.log(subject);
        	    subject = subject / testPrime;
        	    break;
        	}
    	}
    }
    return pFactors;
 };

var bigFactor = primeFactor(600851475143, prime10k);
console.log("The biggest prime factor of 600851475143 is " + bigFactor[bigFactor.length-1]);
