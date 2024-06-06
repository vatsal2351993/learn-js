let a = 10
const b = 20
var c = 30
// out side {} is a global scope
// {} inside the braces is a block scope

console.log(a);
console.log(b);
console.log(c);

function one(){
    const username = "vatsal"

    function two(){
        webiste = "Youtube"
        // console.log(username);
        console.log(webiste)
    }
    two()
    console.log(username);
}
one()