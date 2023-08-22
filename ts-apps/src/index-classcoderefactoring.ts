
class Employee {
    //local variable must be converted into instance variables
    //by adding either private or public keyword
    constructor(public id: number = 0, public firstName: string = "", public lastName: string = "", public status: boolean = false) { }
}
let employee = new Employee();
console.log(employee)
console.log(employee.id, employee.firstName, employee.lastName, employee.status)

//