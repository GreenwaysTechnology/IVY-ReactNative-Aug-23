//async and await

async function getValue() {
    return 10 // Promise.resolve(10)
}
console.log(getValue())
getValue().then(res => console.log(10))

//await: keyword can be used within async function only 

async function main() {
    try {
        const value = await getValue()
        console.log(value)
    } catch (err) {
        console.log(err)
    }
}
main()