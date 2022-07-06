import { getWalkers } from "./database.js"

import { getWalkerCities } from "./database.js"

import { getCities } from "./database.js"

const walkers = getWalkers()

const cities = getCities()

const walkerCities = getWalkerCities()

// const assignments = []
const filterWalkerCitiesByWalker = (walker) => {
        const assignments = []

       for (const assignment of walkerCities) {

           if (assignment.walkerId === walker.id) {
              assignments.push(assignment)
        }
    }

       return assignments
}

const assignedCityNames = (assignments) => {
        let cityNames = ""

      for (const assignment of assignments) {

        for (const city of cities) {
            if (city.id === assignment.cityId) {
               
              cityNames += ` ${city.name} `
            }
        }
    }

       return cityNames
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
        
        for (const walker of walkers) {
            if (walker.id === parseInt(walkerId)) {
                const assignments = filterWalkerCitiesByWalker(walker)
                const cities = assignedCityNames(assignments)
        
                window.alert(`${walker.name} services ${cities}`)
            }
        }
    }

    }

)

// const walkers = getWalkers()


export const walkersList = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}



