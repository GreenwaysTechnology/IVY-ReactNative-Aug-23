//union type : will more than one type
let id: number | string | undefined

id = 1
id = "abc"
id = undefined
//id =true

//union type with constant values
let gender: "Male" | "Female" | "Third"

gender = "Male"
gender = "Female"
gender = "Third"
//gender="Abc"
let jobStatus: "Open" | "Pending" | "Closed" | "Wait List"

jobStatus = "Closed"
console.log(jobStatus)

//functions and union type

function mode(varient: "Dark" | "Light" = "Dark") {
   console.log(varient)
}
mode("Light")
mode()