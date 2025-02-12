// Before classes
// OOP => Object oriented programming
// Multiple student objects
// name
// cohort
// method -> console.log a greeting

// const newStudentObject = {
//     name: "Bryan",
//     cohort: "Sept 23",
//     greeting: function(){
//         console.log(`Hello my name is ${this.name}, and I am apart of the ${this.cohort} cohort.`)
//     }
// }


const anotherNewStudentObject = {
    name: "Kayla",
    cohort: "Sept 23",
    greeting: function(){
        console.log(`Hello my name is ${this.name}, and I am apart of the ${this.cohort} cohort.`)
    }
}

// anotherNewStudentObject.greeting();

// A blueprint, or a Class
// Three types of classes, WebDev, Cyber, DataScience
// WebDev will need a languages key
// DataScience will need a AI model key
class Student {
    // The constructor allows us to create dynamic keys for each instance of an object
    constructor(studentName, studentCohort){
        // Key = values
        this.name = studentName
        this.cohort = studentCohort
    }
    // Methods are assigned automatically static and assigned to each instance
    greeting(){
        console.log(`Hello my name is ${this.name}, and I am apart of the ${this.cohort} cohort.`)
    }
}

// const bryanStudentObject = new Student("Bryan", "Sept 23");
// const larryStudentObject = new Student("Larry", "Aug 10");
// Create a new WebDevStudent class that has name, cohort, and languages as keys
// WebDevStudent is a subclass
class WebDevStudent extends Student {
    constructor(studentName, studentCohort, knownProgrammingLanguages){
        // this.name = studentName
        // this.cohort = studentCohort
        // class-based inheritance
        super(studentName, studentCohort)
        this.languages = knownProgrammingLanguages
    }
}

const bryanWebDevStudentObject = new WebDevStudent("Bryan", "Sept 23", ["Javascript", "Ruby"]);

bryanWebDevStudentObject.greeting()