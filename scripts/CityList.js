import { getWalkers } from "./database.js"

import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()


export const cityList = () => {
    let citiesHTML = "<ul>"

    // for (const walker of walkers) {
    //     // citiesHTML += `<li>${walkers.city}</li>`
    //     citiesHTML += `<li>${walker.id}</li>`
    // }

    for (const city of cities) {
        // citiesHTML += `<li>${walkers.city}</li>`
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

