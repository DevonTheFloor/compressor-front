import $files from "../../helpers/files";
import $dom from "../../helpers/dom";
import Swal from "sweetalert2";
import { saveAs } from "file-saver";
import ENV from "../../environment/environment";

//soket.io
import { io } from "socket.io-client";
const startCompressFiles = (event) => {
    event.preventDefault();
    const compressPictureData = {nomberOfPicture: event.currentTarget[0].files.length};

    const socket = io("http://localhost:3333", { transport : ["websocket"] });

    console.log(event.currentTarget[0].files.length);
    const picturesFiles = event.currentTarget[0].files;
    // début de la demande de compression d'image
    socket.emit("startCompressFiles", JSON.stringify(compressPictureData));
    //reception (depuis l'api) de l'identifiant de l'opération de la compression d'images
    socket.on("startCompressFiles", (data) => {
        const dataReceived = JSON.parse(data);
        console.log("dataReceived", dataReceived);
        const compressPictureId = dataReceived.compressPictureId;

        sendImageFile(compressPictureId, picturesFiles);
    });
    // compression d'une image: terminée
    socket.on("conpressOnePictureFinish", (pinctureLinkJSON) => {
        const pinctureLink = JSON.parse(pinctureLinkJSON);
        console.log("pinctureLink", pinctureLink);

        //ajout de l'url de l'image dans le tableau des images compressées/ (passer par redux?)

        //afficher l'image dans la galerie d'images

    });
    // compression de toutes les images: terminées
    socket.on("compressAllPicturesFinish", () => {
        console.log("compression terminé");

        // se désabonner.

        //signaler à l'utilisateur que la compression est terminé

    });
};

const getUrlSendFile = (fileExtention) => {

    switch (fileExtention) {
    case "png":
        return `http://${ENV.API_HOST}:3333/api/onepic/multi/png/`;
    case ("jpg" || "jpeg"):
        return `http://${ENV.API_HOST}:3333/api/onepic/multi/jpg/`;
    case "svg":
        return `http://${ENV.API_HOST}:3333/api/onepic/multi/svg/`;
    case "gif":
        return `http://${ENV.API_HOST}:3333/api/onepic/multi/gif/`;
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

const sendImageFile = (compressPictureId, picturesFiles) => {

    console.log(picturesFiles);
    let isResponse = false;

    // const picturesFiles = event.currentTarget[0].files;

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
        formData.append("compressPictureId", compressPictureId);

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

export {sendImageFile, deletePictureAPI, startCompressFiles};