const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")


weatherForm.addEventListener("submit", e => {
    e.preventDefault()
    const searchText = search.value

    messageOne.textContent = "Loading..."
    messageTwo.style.color = "black"
    messageTwo.textContent = ""

    fetch(`/weather?address=${searchText}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = ""
                messageTwo.style.color = "red"
                messageTwo.textContent = data.error
            } else {
                const { forecast, location, address } = data[0]
                messageOne.textContent = location + address
                messageTwo.textContent = forecast

            }
        })
    })
})