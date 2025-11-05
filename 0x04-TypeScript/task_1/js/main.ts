interface Teacher {
  firstName: string
  lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  location: string
} 

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

function printTeacher ({firstName, lastName}:{firstName: String, lastName: string}) {
  return `${firstName.charAt(0)}. ${lastName}`
}

interface StudentClassType {
  firstName: string
  lastName: string
  workOnHomework(): string
  displayName(): string
}

class StudentClass {
  firstName: string
  lastName: string

  constructor(firstName: string, lastname: string){
    this.firstName = firstName
    this.lastName = lastname
  }
  
  workOnHomework(): string{
    return `Currently working`
  }

  displayName(): string{
    return this.firstName
  }
}