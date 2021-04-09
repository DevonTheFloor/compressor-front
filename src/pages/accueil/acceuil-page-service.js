import $files from "../../helpers/files";
import $dom from "../../helpers/dom"

const getUrlSendFile = (fileExtention) => {
    switch (fileExtention) {
        case "png":
            return "http://localhost:3333/api/onepic/png/"
        case ("jpg" || "jpeg"):
            return "http://localhost:3333/api/onepic/jpg/"
        case "svg":
            return "http://localhost:3333/api/onepic/svg/"
        case "gif":
            return "http://localhost:3333/api/onepic/gif/"
        default:
            return null
    }
}

const sendImageFile = (event) => {
    event.preventDefault()

    const imageFile = event.currentTarget[0].files[0]
    const fileExtention = $files.getExtention(imageFile.name).toLowerCase();
    const num_tcomp = $dom.elm('#rangeValue').value
    const rangeValue = String (100 - num_tcomp)
    const formData = new FormData()
    
    formData.append('image', imageFile)
    formData.append('rangeValue', rangeValue)
    console.log('get image :')
    console.log(formData.get('image'))
    console.log('get t-comp :')
    console.log(formData.get('rangeValue'))
    console.log('formData :', formData)
    //annimation submit
    const btmSubmit = $dom.elm("#form-uplaod-file__btn-submit")
    btmSubmit.classList.add("anim-submit")
    //attente réponse api...
    setTimeout(() => {
        // const zoneBtn = $dom.elm("#form-uplaod-file__zone-btn")
        // zoneBtn.insertAdjacent("beforeend", `<loader-submit></loader-submit>`)
        $dom.insertBeforeEnd("#form-uplaod-file__zone-btn", "<loader-submit></loader-submit>")
    }, 1000);
    
    //envoie de l'image
    fetch(getUrlSendFile(fileExtention), {
        method: "POST",
        body: formData
    })
    .then(res => {
        console.log('lien :', res)
        setTimeout(() => {
            $dom.removeElm("loader-submit")
        }, 5000);
    })
}

export {sendImageFile}