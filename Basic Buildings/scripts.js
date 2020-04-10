console.log('Hello World!');
let name = "Tibi";
console.log(name);

let variable = 3;
let myVariable = false;
if (myVariable ===true) {
    console.log('The Condition has been evaluated to true');
}
let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

let bookCount = 10;
for (let i = 0; i < bookCount; i++) {
    console.log (i);
}

for (let i = 1; i < bookCount; i++) {
    console.log (i);
}

for (let i = 0; 0 <= i >= bookCount; i++) {
}

let add =(a,b) => {
    return a + b;
};
console.log(add(1, 2))

let printNumbersTill = (n) => {
    for (let i = 0; i < 20; i++) {
        console.log(i);
}}


let greet = (name) => {
    return "Hello," + name;}

    let printValues = (array) => {
        for(let i =0; i < array.length; i++) {
            console.log(array[i]);
    }}

let myNumbers = [10, 20, 30, 12];
myNumbers.forEach((number) => {
    console.log(number);
});

let printValues2 = (array) => {
    array.forEach(value => {
        console.log(value);
    });
}



