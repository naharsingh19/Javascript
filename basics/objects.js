// singleton
// Object.create

// object literals does not give us singleton but object.create does give

const mySym = Symbol("key1")

const JsUser = {    
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //using symbol as key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //js recognise it as jsuser["email"]
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) 
// console.log(JsUser[mySym])  //accessing symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //after this no change can be done in object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());