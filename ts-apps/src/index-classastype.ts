//class as type
// class Employee {
//     id: number
//     name: string
//     city?: string
//     salary?: number
//     isWorking?: boolean
//     gender?: "Male" | "Female" | "Third"
// }
// interface Employee {
//     id: number
//     name: string
//     city?: string
//     salary?: number
//     isWorking?: boolean
//     gender?: "Male" | "Female" | "Third"
// }
type Employee = {
    id: number
    name: string
    city?: string
    salary?: number
    isWorking?: boolean
    gender?: "Male" | "Female" | "Third"
}

let employee: Employee = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore',
    salary: 100,
    isWorking: true,
    gender: "Male"
}