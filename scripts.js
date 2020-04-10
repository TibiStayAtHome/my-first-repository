// 4rd part


$('button').click(() => {
    $('.first').toggleClass('hidden');
})



// From 1st part to the 3rd
console.log("JavaScript is Working");
let colors = ["orange","blue"]
let post = {
    title: "My Post",
    description: "My first post, awesome",
    likeCount: 12,
    comments: ["cool, nice job"]
};

let posts = [{title: "First post",
likeCount: 12}, { title: "Second post",
likeCount: 12,}];

console.log(colors);
console.log(post);

let age = 12;

if (age > 18) {
    console.log("you're an adult!");
}else {
    console.log("you are a kid");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(colors);

let myFunction = x => {
    console.log(x);
}

let greeter = name =>{
    console.log(`Hello, ${name}`);
    if (name== "Tibi") {
        console.log("he's an adult");
    }
}
greeter("Tibi");
greeter("Reka");

console.log("Hello, Tibi");
console.log("Hello, Reka");

colors.forEach(color => {
    console.log(color);
});



console.log("This is the end of our code");
