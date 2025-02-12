# And we're going to learn a bit of python

# class Student {
#     // The constructor allows us to create dynamic keys for each instance of an object
#     constructor(studentName, studentCohort){
#         // Key = values
#         this.name = studentName
#         this.cohort = studentCohort
#     }
#     // Methods are assigned automatically static and assigned to each instance
#     greeting(){
#         console.log(`Hello my name is ${this.name}, and I am apart of the ${this.cohort} cohort.`)
#     }
# }

class Student:
    def __init__(self, studentName, studentCohort):
        self.name = studentName
        self.cohort = studentCohort


bryanStudent = Student("Bryan", "Sept 23")

print(bryanStudent.cohort)