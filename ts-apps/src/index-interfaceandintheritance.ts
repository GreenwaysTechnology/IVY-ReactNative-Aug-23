//base class
interface Account {
    deposit(): number
}
//child class 
class SavingsAccount implements Account {
    constructor() {
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