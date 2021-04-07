import $dom from '../../helpers/dom'
import Swal from 'sweetalert2'

    const inputFile = $dom.elm('#input-single-file')
    inputFile.addEventListener('change', (e) => {

        const fileName = e.target.files[0].name
        const fileNameSplit = fileName.split('.')
        const fileNameExt = fileNameSplit[fileNameSplit.length - 1]
        const btnSubmit = $dom.elm('button[type="submit"]')
        const formUploadFileLabel = $dom.elm("#form-upload-file label")
        const fileReturn = $dom.elm("#form-upload-file-return")
        
        // nom du fichier à télécharger
        fileReturn.insertAdjacentHTML("beforeend", `${fileName}`)

        if (fileNameExt === "png" || fileNameExt === "JPG" || fileNameExt ==="jpeg" || fileNameExt === "svg" || fileNameExt === "gif") {
            //montre à l'utilisateur que le l'image est valide
            formUploadFileLabel.classList.add("input-valid");
            fileReturn.style.color = "#fff"
            //active le bouton d'envoie de fichier
            btnSubmit.disabled = false
        }else {
            //alert l'utilisateur que son fichier n'est pas valide
            Swal.fire(
                {
                    icon: 'error',
                    title: "Oops...",
                    text: "Ce fichier n'est pas valide. Seul les images (pgn, jpeg, jpg, svp et gif) sont accepté ! Selectionner une autre image, merci.",
                }
              )
            //montre à l'utilisateur que le fichier est invalide
            formUploadFileLabel.classList.remove("input-valid");
            fileReturn.style.color = "red"
            btnSubmit.disabled = true
        }
    })
