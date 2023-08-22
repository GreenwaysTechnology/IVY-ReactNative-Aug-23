
class Employee {
    id: number = 1;
    firstName: string = "";
    lastName: string = "";
    status: boolean = false;
    constructor() { }
}
let employee = new Employee();
console.log(employee)
console.log(employee.id,employee.firstName,employee.lastName,employee.status)
