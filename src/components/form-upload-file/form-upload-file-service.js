import store from "../../redux/rooterducer";
import { getTitle } from "../../components/header-bar/redux-header-bar/type"

    const inputFile = document.querySelector('.input-file');
    inputFile.addEventListener('change', (e) => {
        console.log(e.target.files[0]);
        const fileName = e.target.files[0].name;
        console.log(fileName);
        const fileNameSplit = fileName.split('.');
        console.log(fileNameSplit);
        const fileNameExt = fileNameSplit[fileNameSplit.length - 1];
        console.log(fileNameExt);
        const btnSubmit = document.querySelector('button[type="submit"]');
        if (fileNameExt === "png" || fileNameExt === "jpg" || fileNameExt === "jpeg") {
            btnSubmit.disabled = false;
        }else {
            btnSubmit.disabled = true;

        }
        store.dispatch(getTitle());
    })
