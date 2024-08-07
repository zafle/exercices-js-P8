const $decimalInput = document.getElementById("decimalInput")
const $binaryResult = document.getElementById("binaryResult")

function convertToBinary() {
    const decimalValue = $decimalInput.value

    if (!isNaN(decimalValue)) {

        let binaryValue
        let q

        for (let i = decimalValue; q !== 0;) {
            q = Math.floor(i / 2)
            let rest = String(i % 2)
            binaryValue = binaryValue === undefined ? rest : rest + binaryValue
            i = q
        }

        $binaryResult.innerText = binaryValue

    }

}