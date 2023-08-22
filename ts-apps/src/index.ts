//
//array without type
let list = [1, "hello", true]

//array with type 
let numList: number[] = [1, 2, 3]
//generics syntax List<?>
let namesList: Array<string> = ["hello", "hai"]

class Product {
    id: number
    name: string
    qty?: number
}
class ProductService {
    //return array of products
    findAll(): Array<Product> {
        return [{ id: 1, name: 'a', qty: 1 }, { id: 1, name: 'a', qty: 1 }]
    }
    list(): Product[] {
        return [{ id: 1, name: 'a', qty: 1 }, { id: 1, name: 'a', qty: 1 }]
    }
}
