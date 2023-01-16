const weatherForm = document.querySelector("form")
const search = document.querySelector("input")

weatherForm.addEventListener("submit", e => {
    e.preventDefault()
    const searchText = search.value

    fetch(`http://localhost:3000/weather?address=${searchText}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                console.log('data.error :>> ', data.error);
            } else {
                const { forecast, location, address } = data[0]
                console.log('place: >>', location)
                console.log('address :>> ', address);
                console.log('forecast :>>', forecast)
            }
        })
    })
})