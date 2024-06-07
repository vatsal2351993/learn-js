const email = []

if (email) {
    console.log("yes");
} else{
    console.log("no");
}

// falsy_value :- false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy_values :- "0", 'false', " ", [], {}, function(){},  

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is  empty");   
}

// Nullish coalescing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10

console.log(val1);

// terniary operator : ?
// condition ? true : false
const tea = 100
tea >= 80 ? console.log("less than 80") : console.log("more than 80")