function addnum (num1, num2){
    return num1 * num2
}

console.log(addnum(5, 4))

function totalprice(...num3){
    return num3
}
console.log(totalprice(200,300,400,500))

const user = {
    username : "vatsal",
    p : 199
}

function obj(hand){
    console.log(`username is ${hand.username } and price is ${hand.p}`);
}
// obj(user);

obj({
    username :"reyu",
    p : 10000
})


const myNewArr =  [ 200,300,400,500,600]

function returnSecVal(getarr){
    return getarr[1]
}

console.log(returnSecVal(myNewArr));