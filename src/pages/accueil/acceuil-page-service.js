import store from "../../redux/rooterducer"
import {getTitle} from "../../components/header-bar/redux-header-bar/type"

const sendImageFile = (event) => {
    event.preventDefault()
    store.dispatch(getTitle())
    const image = event.currentTarget[0].files[0]
    const num_tcomp = document.getElementById('tcomp').value
    const tcomp = String (100 - num_tcomp)
    // const test = JSON.stringify({
    //     test: 'test ok !'
    // })
    const formData = new FormData()
    // formData.append('test', test)
    
    formData.append('image', image)
    formData.append('tcomp', tcomp)
    console.log('get image :')
    console.log(formData.get('image'))
    console.log('get t-comp :')
    console.log(formData.get('tcomp'))
    console.log('formData :', formData)
    fetch("http://localhost:3333/api/test/choosecomp/", {
        method: "POST",
        body: formData
    })
    .then(res => console.log('lien :', res))
}

export {sendImageFile}