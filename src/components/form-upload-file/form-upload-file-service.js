
import $files from "../../helpers/files";
import $dom from "../../helpers/dom";
import Swal from "sweetalert2";

const inputFile = $dom.elm("#input-single-file");

inputFile.addEventListener("change", (e) => {
    const filesReturn = $dom.elm("#form-upload-files-return");
    const formUploadFileLabel = $dom.elm("#form-upload-file label");
    const btnSubmit = $dom.elm("button[type=\"submit\"]");

    //A FAIRE: ajouter l'ajout multiple d'image vennant de dossiers diférents.
    filesReturn.innerHTML = "";

    btnSubmit.disabled = false;
    formUploadFileLabel.classList.add("input-valid");

    for(let file of e.target.files) {
        const fileName = file.name;
        const fileNameExt = $files.getExtention(fileName).toLowerCase();
        
        if (fileNameExt === "png" || fileNameExt === "jpg" || fileNameExt ==="jpeg" || fileNameExt === "svg" || fileNameExt === "gif") {
            filesReturn.insertAdjacentHTML("beforeend", `<li>${fileName}</li>`);
        }else {
            //alert l'utilisateur que son fichier n'est pas valide
            filesReturn.insertAdjacentHTML("beforeend", `<li class="file-return--invalid">${fileName}</li>`);
            
            Swal.fire(
                {
                    icon: "error",
                    title: "Oops...",
                    text: "L'un de ces fichiers n'est pas valide. Seul les images (pgn, jpeg, jpg, svp et gif) sont accepté ! Selectionner d'autre images, merci.",
                }
            );

            btnSubmit.disabled = true;
            formUploadFileLabel.classList.remove("input-valid");
        }

    }
   
});
