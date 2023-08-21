class Account {
    constructor() {
        console.log('Account ')
    }
    //methods
    deposit() {
        return 10
    }
    withdraw() {
        return 50
    }
}
class SavingsAccount extends Account {
    constructor() {
        super() //calling parent class constructor
        console.log('SavingsAccount ')
    }
    //override
    deposit() {
        return 10 * super.deposit()
    }
    withdraw() {
        return 20 * super.withdraw()
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())
console.log(sb.withdraw())