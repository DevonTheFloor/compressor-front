import $files from "../../helpers/files";
import $dom from "../../helpers/dom";
import Swal from "sweetalert2";
import { saveAs } from "file-saver";
import ENV from "../../environment/environment";

const getUrlSendFile = (fileExtention) => {

    switch (fileExtention) {
    case "png":
        return `http://${ENV.API_HOST}:3333/api/onepic/png/`;
    case ("jpg" || "jpeg"):
        return `http://${ENV.API_HOST}:3333/api/onepic/jpg/`;
    case "svg":
        return `http://${ENV.API_HOST}:3333/api/onepic/svg/`;
    case "gif":
        return `http://${ENV.API_HOST}:3333/api/onepic/gif/`;
    default:
        return null;
    }
};

const deletePictureAPI = (filenamePicture) => {
    fetch(`http://${ENV.API_HOST}:3333/api/handleImages/${filenamePicture}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then((response) => {
            console.log(response);
        });
};

const sendImageFile = (event) => {
    event.preventDefault();

    let isResponse = false;

    const imageFile = event.currentTarget[0].files[0];
    const fileExtention = $files.getExtention(imageFile.name).toLowerCase();
    const num_tcomp = $dom.elm("#rangeValue").value;
    const rangeValue = String (100 - num_tcomp);
    const formData = new FormData();
    
    formData.append("image", imageFile);
    formData.append("rangeValue", rangeValue);

    if (ENV.MODE === "development") {
        console.log("get image :");
        console.log(formData.get("image"));
        console.log("get t-comp :");
        console.log(formData.get("rangeValue"));
        console.log("formData :", formData);
    }

    //annimation submit
    const btmSubmit = $dom.elm("#form-uplaod-file__btn-submit");
    btmSubmit.classList.add("anim-submit");

    //attente réponse api...
    setTimeout(() => {
        if (!isResponse) {
            $dom.insertBeforeEnd("#form-uplaod-file__zone-btn", "<loader-submit></loader-submit>");
        }
    }, 500);
    
    //envoie de l'image
    fetch(getUrlSendFile(fileExtention), {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(response => {
            isResponse = true;
            $dom.removeElm("loader-submit");
            btmSubmit.classList.remove("anim-submit");
            // alert de l'image compressé. Demande de sauvegarde ou abandon
            Swal.fire({
                imageUrl: `${response.pictureLink}`,
                imageAlt: "image compressé",
                confirmButtonText: "Sauvegarder",
                showDenyButton: true,
                denyButtonText: "Annuler"
            }).then((result) => {
                // sauvegarde de l'image
                if (result.isConfirmed) {
                    saveAs(response.pictureLink, response.filename, {type: "text/plain;charset=utf-8"});
                    deletePictureAPI(response.filename);
                // abandon
                }else if (result.isDenied) {
                    deletePictureAPI(response.filename);
                }
            });
            if (ENV.MODE === "development") {
                console.log("pictureUrl :", response.pictureLink);
            }  
        
        })
        .catch(error => {
            isResponse = true;
            $dom.removeElm("loader-submit");
            btmSubmit.classList.remove("anim-submit");
            console.log("Request Failed", error);
        });
        
};

export {sendImageFile, deletePictureAPI};