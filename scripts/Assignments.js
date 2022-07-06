import { getPets, getWalkers, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities()


// Function whose responsibility is to find the walker assigned to a pet
 const findWalker = (pets, walkers) => {

    let petWalker = []

    for (const walker of walkers) {
        if (walker.id === pets.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// const findCities = (walkerCities, walkers) => {
//     let assignedCities = []
// for (const walkerCity of walkerCities) {
//     if ()
// }

// }

export const Assignments = () => {   
     let assignmentHTML = "<ul>"    

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += 
          ` 
           <li>
             ${currentPet.name} is being walked by ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
        
    }

     assignmentHTML += "</ul>"

    return assignmentHTML
}

