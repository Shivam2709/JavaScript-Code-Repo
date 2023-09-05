function SetUserName(username) {
  // complex BD calls
  this.username = username;
}

function createUser(username, email, password) {
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}

const obj = new createUser("Chai", "chai@chai.com", "12345");
console.log(obj);