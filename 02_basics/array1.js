const myarr = [0,1,2,3,4,5]
// console.log(myarr);
// myarr.push(6)
// myarr.pop()
// myarr.unshift(9)
// myarr.shift()
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

// const newarr = myarr.join()
// console.log(myarr);
// console.log(typeof newarr);

const marvel = ["Ironman","Hulk","Blackpanther"]
const dc = ["Superman", "Batman", "Flash"]
console.log(marvel)
console.log(dc)

// const myheros = marvel.concat(dc)
// console.log(myheros)

const myheros = [...marvel, ...dc]
console.log(myheros);

// flat => concating all arrays of arrays of arrays


console.log(Array.from("vatsal"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))