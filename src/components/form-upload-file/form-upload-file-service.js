import $dom from '../../helpers/dom'

    const inputFile = $dom.elm('#input-single-file')
    inputFile.addEventListener('change', (e) => {

        const fileName = e.target.files[0].name
        const fileNameSplit = fileName.split('.')
        const fileNameExt = fileNameSplit[fileNameSplit.length - 1].toLowerCase()
        const btnSubmit = $dom.elm('button[type="submit"]')
        const formUploadFileLabel = $dom.elm("#form-upload-file label")
        const fileReturn = $dom.elm("#form-upload-file-return")
        
        // nom du fichier à télécharger
        fileReturn.insertAdjacentHTML("beforeend", `${fileName}`)

        if (fileNameExt === "png" || fileNameExt === "jpg" || fileNameExt ==="jpeg" || fileNameExt === "svg" || fileNameExt === "gif") {
            //montre à l'utilisateur que le l'image est valide
            formUploadFileLabel.classList.add("input-valid");
            fileReturn.style.color = "#fff"
            //active le bouton d'envoie de fichier
            btnSubmit.disabled = false
        }else {
            //montre à l'utilisateur que le fichier est invalide
            formUploadFileLabel.classList.remove("input-valid");
            fileReturn.style.color = "red"
            btnSubmit.disabled = true
        }
    })
