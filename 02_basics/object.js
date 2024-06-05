const mysym = Symbol("key1")

const Jsuser = {
    name : "Vatsal",
    l_name : "Mistry",
    [mysym] : "mykey1",
    age : 18,
    location : "New York",
    email: "vatsal@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(Jsuser);
console.log(Jsuser["email"]);
console.log(Jsuser[mysym]);

Jsuser.email = "mistry@google.com"
// Object.freeze(Jsuser)
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
}
console.log(Jsuser.greeting());

Jsuser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(Jsuser.greeting2());