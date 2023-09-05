// let myName = "Shivam      ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSiderPower: function() {
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.shivam = function() {
    console.log(`Shivam is present in all objects`);
}

Array.prototype.heyShivam = function() {
    console.log(`Hitesh says hello`);
}

//  heroPower.shivam();
//  myHeros.shivam();
//  myHeros.heyShivam();
//  heroPower.heyShivam();

// inheritance

const User = {
    name: 'chai',
    email: 'chai@chai.com',
}

const Teacher = {
    makeVideos: true
}

const TeacherSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignments: 'JS Assignment',
    fillTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = 'ChaiAurCode     '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"   Shivam   ".trueLength()
"iceTea".trueLength()