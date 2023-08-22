class AuthService {
    private userName: string = 'admin'
    private password: string = 'admin'

    //private methods
    private generatePassword() {
        return '$%$$'
    }
    //access private variables and methods via public methods
    public login() {
        return this.generatePassword()
    }
}
let authService = new AuthService()
// console.log(authService.userName)
console.log(authService.login())