const sendImageFile = (event) => {
    event.preventDefault()
    const image = event.currentTarget[0].files[0]
    // const test = JSON.stringify({
    //     test: 'test ok !'
    // })
    const formData = new FormData()
    // formData.append('test', test)
    formData.append('image', image)
    console.log(formData.get('image'))
    fetch("http://localhost:3333/api/test", {
        method: "POST",
        body: formData
    })
}

export {sendImageFile}