//votre code ici

function pairNumbers(start, end) {

    let result = []

    for (let i = start; i <= end; i++) {

        if ( i % 2 === 0) {
            result.push(i)
        }
    }

    return result.toString()
}

export default pairNumbers
