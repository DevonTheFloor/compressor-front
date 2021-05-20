import "./card-image.scss";
import "./card-image-service.js";
import $dom from "../../helpers/dom";
import { deleteImage } from "./card-image-service";
import store from "../../redux/rooterducer";


export default class CardImage extends HTMLElement{

    static get observedAttributes() { return ["picture-link"];}

    constructor() {
        super();
        this.pictureLink = pictureLink;
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="card-image"
            picture-link="${card.pictureLink}"
            compressId="${card.compressId}"
            resolution="${card.resolution}"
            size="${card.size}"
            rangeValue="${card.rangeValue}"
            pictureOriginUrl="${card.pictureOriginUrl}">
            <div>
                <p>TEST</p>
                <figure>
                    <img src="https://media.nauticamilanonline.com/product/figura-obelix-asterix-el-galo-6cm-800x800.jpg" class="monitor">
                </figure>
            </div>
            <div>
                <p>compressId</p>
                <p>resolution</p>
                <p>size</p>
                <p></p>
                    <div class="action">
                        <button id="print-img" class="action__btn">Voir</button>
                        <button id="del-img"class="action__btn">Delete</button>
                        <button id="download-img" class="action__btn">Download</button>
                    </div>
                
            </div>
        </div>
        `;
        const deleter = $dom.elm("#del-img");
        deleter.addEventListener("click", deleteImage);
    }
        
}



