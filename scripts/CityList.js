import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const cityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        // citiesHTML += `<li>${walkers.city}</li>`
        citiesHTML += `<li>${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

