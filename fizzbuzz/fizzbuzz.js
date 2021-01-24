function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizz buzz");
        } else if (i % 3) {
            console.log("Fizz");
        } else if (i % 5) {
            console.log("Buzz");
        }
    }
}

fizzBuzz();