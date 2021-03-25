import store from "../../redux/rooterducer"
import {getTitle} from "../../components/header-bar/redux-header-bar/type"

const sendImageFile = (event) => {
    event.preventDefault()
    store.dispatch(getTitle())
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