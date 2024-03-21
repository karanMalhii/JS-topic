function addNumbers(...numbers) {
    let sum = 0;
    console.log(numbers)

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Example usage
const sum1 = addNumbers(1, 2, 3, 4, 5,"karan","bikram","jass");
const sum2 = addNumbers(10, 20, 30, 40);

console.log(sum1); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log(sum2); // Output: 100 (10 + 20 + 30 + 40)

//next

function addNumbers(...numbers) {
    let sum = 0;
    console.log(numbers)

    for (let i = 0; i < numbers.length; i++) {
      if(typeof numbers[i] === "number" )
        sum += numbers[i];
    }

    return sum;
}

// Example usage
const sum3 = addNumbers(1, 2, 3, 4, 5,"karan","bikram","jass");
const sum4 = addNumbers(10, 20, 30, 40);

console.log(sum3); // Output: 15 (1 + 2 + 3 + 4 + 5)
console.log(sum4); // Output: 100 (10 + 20 + 30 + 40)