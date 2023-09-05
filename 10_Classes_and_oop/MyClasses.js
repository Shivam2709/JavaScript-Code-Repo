// ES6

// class User {
//     constructor(usename, email, password) {
//         this.usename = usename;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abceddsfdf`
//     }

//     changeUsername() {
//         return `${this.usename.toUpperCase()}`
//     }
// }

// const obj = new User("chai", "chai@gmail.com", "1233")
// console.log(obj.encryptPassword());
// console.log(obj.changeUsername());

// behind the scenes
function User(username, email, password){
    this.usename = username;
    this.email = email;
    this.password = password;

}

User.prototype.encryptPassword = function() {
    return `${this.password}abceddsfdf`
}

User.prototype.changeUsername = function() {
    return `${this.usename.toUpperCase()}`
}

const obj2 = new User("chai", "chai@gmail.com", "1233")
console.log(obj2.encryptPassword());
console.log(obj2.changeUsername());