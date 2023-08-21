import { firstName, lastName, city, skills } from './utils/myutil.js'
import ProductService from './services/product.service.js'

console.log(firstName, lastName, city, skills)
let product = new ProductService()
console.log(product.findAll())