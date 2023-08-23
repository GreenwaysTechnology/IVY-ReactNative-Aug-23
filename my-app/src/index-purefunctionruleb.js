
//impure function
// function updateProfile(profile, city) {
//     profile.city = city
//     return profile
// }

function updateProfile(profile, city) {
    //immutable object 
    //pattern 1
    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // }
    //pattern 2:
    // return Object.assign({}, profile, { city: city })
    //pattern 3: spread operator 
    return { ...profile, city: city }
}
let profile = {
    id: 1,
    name: 'subramanian',
    city: 'chennai'
}
console.log('Before Update', profile)
const updatedProfile = updateProfile(profile, 'Coimbatore')
console.log('After Update', updatedProfile)
//check mutable or immutable 
console.log(profile === updatedProfile ? "Same Object" : "Different Object")
