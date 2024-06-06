// singleton const tinderuser = new Object()
const user = {}
user.id = "123abc"
user.name = "vatsal"
user.isloggedIn = false
console.log(user);

const user2 = {
    email : "mistry@google.com",
    fullname : {
        username : {
            firstname : "vatsal",
            lastname: "mistry"
        }
    }
}

console.log(user2.fullname.username);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('name'));
