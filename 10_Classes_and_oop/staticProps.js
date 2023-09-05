class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const shyam = new User("Shyam")
// console.log(shyam.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const obj = new Teacher("Shivam", "shivam@gmail.com")
console.log(obj);