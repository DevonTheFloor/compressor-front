import $files from "../../helpers/files";
import $dom from "../../helpers/dom";
import Swal from "sweetalert2";
import { saveAs } from "file-saver";
import ENV from "../../environment/environment";

const startCompressFiles = () => {

};

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

    const picturesFiles = event.currentTarget[0].files;

    //annimation submit
    const btmSubmit = $dom.elm("#form-uplaod-file__btn-submit");
    btmSubmit.classList.add("anim-submit");

    // taux de compression
    const num_tcomp = $dom.elm("#rangeValue").value;
    const rangeValue = String (100 - num_tcomp);

    for (const picturefile of picturesFiles) {
        console.log(picturefile);
        const fileExtention = $files.getExtention(picturefile.name).toLowerCase();
        // formData par image
        const formData = new FormData();
        formData.append("image", picturefile);
        formData.append("rangeValue", rangeValue);

        // log en developpement
        if (ENV.MODE === "development") {
            console.log("get image :");
            console.log(formData.get("image"));
            console.log("get t-comp :");
            console.log(formData.get("rangeValue"));
            console.log("formData :", formData);
        }

        //envoie de l'image
        fetch(getUrlSendFile(fileExtention), {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(response => {
                // isResponse = true;
                // $dom.removeElm("loader-submit");
                // btmSubmit.classList.remove("anim-submit");
                
                if (ENV.MODE === "development") {
                    console.log("response :", response);
                }  
            
            })
            .catch(error => {
                // isResponse = true;
                // $dom.removeElm("loader-submit");
                // btmSubmit.classList.remove("anim-submit");
                console.log("Request Failed", error);
            });
    }

    // const imageFile = event.currentTarget[0].files[0];

    // const fileExtention = $files.getExtention(imageFile.name).toLowerCase();

    

    

    

    

    //attente réponse api...
    setTimeout(() => {
        if (!isResponse) {
            $dom.insertBeforeEnd("#form-uplaod-file__zone-btn", "<loader-submit></loader-submit>");
        }
    }, 500);
    
    
        
};

export {sendImageFile, deletePictureAPI};