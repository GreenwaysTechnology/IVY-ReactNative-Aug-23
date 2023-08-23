//es 6 object  destructuring

// function displayCustomer(customer) {
//     console.log(`Id ${customer.id}`)
//     console.log(`name ${customer.name}`)
// }

// function displayCustomer(customer) {
//     const { id, name } = customer
//     console.log(`Id ${id}`)
//     console.log(`name ${name}`)
// }
// function displayCustomer({ id, name, address: { city } }) {
//     console.log(`Id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`city ${city}`)

// }
const displayCustomer = ({ id, name, address: { city } }) => {
    console.log(`Id ${id}`)
    console.log(`name ${name}`)
    console.log(`city ${city}`)

}

displayCustomer({ id: 1, name: 'Subramanian', address: { city: 'coimbatore' } })

// function getStock(code = 'google', price = 1000, qty = 10000) {
//     return {
//         code: code,
//         price: price,
//         qty: qty
//     }
// }
// function getStock(code = 'google', price = 1000, qty = 10000) {
//     //left:right if same , keep any one 
//     return {
//         code,
//         price,
//         qty
//     }
// }
const getStock = (code = 'google', price = 1000, qty = 10000) => ({
    code,
    price,
    qty
})

console.log(getStock('ivy', 1000, 80000))
console.log(getStock())
















