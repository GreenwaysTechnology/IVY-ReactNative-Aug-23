

class OrderService {
    constructor() { }
    //methods
    public findAll(): string {
        return "all"
    }
    public save(): void {
        console.log('save')
    }
}
let orderService = new OrderService()
console.log(orderService.findAll())
orderService.save()