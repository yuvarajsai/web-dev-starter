let numbers = [2,4,3];
numbers.push(23,3,6,3,7,4);
numbers.pop();
numbers.shift();
numbers.unshift(1);

console.log(numbers);
console.log(numbers.indexOf(23));
console.log(numbers.indexOf(3));



//DOM//
let salary = Symbol();
let age = 12;

//console.log(Math.PI);

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


