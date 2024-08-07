
function onClickButton() {

    const button = document.getElementById("myButton")

    button.addEventListener("click", () => {

        const message = document.createElement("p")
        message.innerText = "Bonjour, vous avez cliqué sur le bouton !"

        button.after(message)
    })
}

onClickButton()