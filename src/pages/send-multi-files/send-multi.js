// const app = document.getElementById("app");
//service
import { startCompressFiles } from "./send-multi-service";
// style
import "./send-multi.scss";
//redux
import store from "../../redux/rooterducer";
//helpers
import $dom from "../../helpers/dom";

class SendMultiFiles extends HTMLElement {
    constructor() {
        super();
        // const title = store.getState().headerBarState.title
        this.innerHTML = `
            <header-bar></header-bar>
            <section class="section-form-upload-file">
                <form-upload-file></form-upload-file>
            </section>
        `;
        const formUploadFile = $dom.elm("#form-upload-file");
        formUploadFile.addEventListener("submit", startCompressFiles);
        
        store.subscribe(() => {
            const headerBar = $dom.elm("header-bar");
            headerBar.setAttribute("_title", store.getState().headerBarState.title);
        });
    }
}

export default SendMultiFiles;
