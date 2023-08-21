//es 6 class syntax :

class Employee {
    //id
    constructor(id = 0, name = '', salary = 0) {
        this.id = id;
        this.name = name;
        this.salary = salary
    }
    //methods
    calculateSalary(value) {
        return this.salary * value
    }
}
let emp = new Employee(12, 'Subramanian', 1000)
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary(100)}`)
