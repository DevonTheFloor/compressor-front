import "./card-image.scss";
import "./card-image-service.js";
import $dom from "../../helpers/dom";
import { deleteImage } from "./card-image-service";
// import store from "../../redux/rooterducer";


export default class CardImage extends HTMLElement{

    static get observedAttributes() { return ["picture-link", "size", "rangeValue"];}

    constructor() {
        super();
        this.pictureLink = "";
        this.size = "";
        this.rangeValue = "";
    }
    // ajouter resolution="${card.resolution}"
    // communication ek parent via redux input-range

    connectedCallback() {
  
        if (this.getAttribute("picture-link")) {
            this.pictureLink = this.getAttribute("picture-link");
        }
        if (this.getAttribute("size")) {
            this.size = this.getAttribute("size");
        }
        if (this.getAttribute("rangeValue")) {
            this.size = this.getAttribute("rangeValue");
        }
       
        this.innerHTML = `
        <div class="card-image"
            picture-link="${this.pictureLink}"
            size="${this.size}"
            rangeValue="${this.rangeValue}">
            <div>
                <p>TEST</p>
                <figure>
                    <img src=${this.pictureLink} class="monitor">
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