class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMy() {
        console.log(`USERNAME is ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName, email, password) {
        super(userName);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.userName}`);
    }
}

const obj = new Teacher("chai" , "chai@Teacher.com", "12344");

obj.addCourse();
const obj2 = new User("MasalaChai")

obj2.logMy()