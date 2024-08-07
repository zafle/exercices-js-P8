const $screen = document.getElementById("display")


function calculateResult() {
    if ($screen.value !== "") {

        const result = eval($screen.value)

        if (!isFinite(result)) {
            $screen.value = "Division by zero is not allowed"
            $screen.dataset.type = "error"

        } else {
            $screen.value = result
            $screen.dataset.type = "result"
        }

    }
}

function appendToDisplay(item) {
    if ( ($screen.dataset.type === "result" && !isNaN(item))  || $screen.dataset.type === "error" ) {
        clearDisplay()
    }
    $screen.value += item
    $screen.dataset.type = "await"

}

function clearDisplay() {
    $screen.value = ""
    $screen.dataset.type = "await"
}
