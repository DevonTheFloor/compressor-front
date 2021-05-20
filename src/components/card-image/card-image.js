import "./card-image.scss";
import "./card-image-service.js";
import $dom from "../../helpers/dom";

//import "./card-image.scss";

export default class CardImage extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
        <div class="card-image">
            <div>
                <p>TEST</p>
                <figure>
                <img src="https://media.nauticamilanonline.com/product/figura-obelix-asterix-el-galo-6cm-800x800.jpg" class="monitor">
                </figure>
            </div>
            <div>
                <p>size</p>
                <p></p>
                    <div class="action">
                        <button id="print-img" class="btn-action">Voir</button>
                        <button id="del-img"class="btn-action">Delete</button>
                        <button id="download-img" class="btn-action">Download</button>
                    </div>
                
            </div>
        </div>
        `;
    }
}
/* let deleter = $dom.elm("#del-img");
deleter.addEventListener("click", deleteImage); */
