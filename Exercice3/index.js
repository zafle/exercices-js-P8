// Créez votre fonction ici

function calculateAverage(array) {

    if ( array && array.length) {

        let minimum = Math.min(...array)
        let maximum = Math.max(...array)

        let average = (minimum + maximum) / 2

        return average

    } else {

        return "No numbers to calculate average"
    }
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
