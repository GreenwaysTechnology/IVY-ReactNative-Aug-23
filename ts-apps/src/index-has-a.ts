//dependency injection : has-a

class OrderService {
    constructor() {

    }
    findAll() {
        return "Orders"
    }
}
class OrderController {
    //private orderService: OrderService
    constructor(private orderService: OrderService) {
       // this.orderService = orderService
    }
    public init(): void {
        console.log(this.orderService.findAll())
    }
}
const ctrl = new OrderController(new OrderService())