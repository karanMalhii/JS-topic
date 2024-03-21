// const person = {
//   firstName: "karan",
//   lastName: "singh",
// };
// let personFirstName = person.firstName;
// let personLastName = person.lastName;

// console.log(personFirstName);
// console.log(personLastName);

// destructure, Access Object the New way

// let = { firstName, lastName } = person;
// console.log(firstName);

// We can also RENAME the variables with the new way
// let { firstName: fName, lastName: lName } = person;
// console.log(fName);


//next

// let person2 = {
//   firstName: "Guntaj",
//   lastName: "singh",
//   currentAge: 28, //when current age not provided then output 20
// };
// let { firstName, lastName, middleName = "", currentAge: age = 20 } = person2;
// console.log(middleName);
// console.log(age);

//destructuring with array
// let arr = [1, 2, 3];

// let [a, b, c] = arr;
// console.log(a,b,c);

// let arrValue = ["one", "two", "three"];

// let [x,, z] = arrValue;
// console.log(x,z);

const names = ["sony", "nav", "harp", "manp"];
let [x,y] = names;
// console.log(x, y);

const namess = ["sony", "nav", "harp", "manp"];
// console.log(...namess);


const ab=[
    {
        name:'gurpanth',
        age:23,
        class:"BCA"
    }
]

const bc={
    name:'karan',
    age:25,
    class:'MCA'
}
console.log('ab', [...ab,bc])
