// Créez votre fonction ici
function calculate(a, b, operator) {

    let nb1 = parseInt(a)
    let nb2 = parseInt(b)

    switch (operator) {
        case "+" :
            return parseInt(nb1+nb2)
        case "-" :
            return parseInt(nb1-nb2)
        case "*" :
            return parseInt(nb1*nb2)
        case "/" :
            if (nb2 === 0) {
                return "Division by zero is not allowed"
            } else {
                return parseInt(nb1/nb2)
            }
        default :
            return "Invalid operator"
    }
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
