let numbers = [2,42.58,2];
console.log(numbers);

//DOM//
let salary = Symbol();
let age = 12;

console.log(Math.PI);

let person = {
    name: "Yuvi",
    dob: 2002,
    [salary]: '40k',
};

const incrementAge = (a) => {
    a++;
};

const incrementDOB = (person) => {
    person.dob+=2;
}

incrementDOB(person);
showMessage(person.dob);



// incrementAge(age);
// showMessage(age);

// console.log(person.salary);





// description: function(){
//     showMessage("Even certainity of uncertainity is uncertain!");
// },
// favFood: function(){
//     showMessage(this.name);
// }


// console.log(person.name);
// console.log(person.salary);
// console.log(person.description);


