function isPrime(num) {
    //numbers less than 2 are not prime
    if (num < 2) return false;

    //checking from 2 p to the squareroot of the number
    for (let i=2; i<= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isPrime
};

console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(13));