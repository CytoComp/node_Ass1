#!/usr/bin/env node
var truePrime = function(n) {
    var squareRoot = Math.sqrt(n); 
    if(n == 0 || n == 1) {
       return false;
    }
    for(i  = 2; i <=  squareRoot; i++) {
        if(n%i == 0) {
          return false;
        }
    }
    return true;
};

var firstkPrime  = function(k) {
var i = 0;
var primeArray = [];
for(i = 0; k > 0; i++) {
if(truePrime(i)) {
primeArray.push(i);
--k;
}
}
return primeArray;
};
var fmt = function(primeArray) {
return primeArray.join(",");
}

var k = 100;
console.log("the first " + k + " prime numbers are:");
console.log(fmt(firstkPrime(k)));

var fs = require('fs');
var outfile = "primeNo.txt";
var out = (fmt(firstkPrime(k)));
fs.writeFileSync(outfile, out);
