//base class
class Account {
    constructor() {
        console.log('Account')
    }
    protected deposit(): number {
        return 0
    }
}
//child class 
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings Account')
    }
    //overriding
    deposit(): number {
        return 1000
    }
}
let sb = new SavingsAccount()
//
console.log(sb.deposit())