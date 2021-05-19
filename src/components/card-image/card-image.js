import "../card-image/card-image.scss";
import "../card-image/card-image-service.js";

export default class CardImage extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
        <div class="card">
            <div>
                <figure>
                <img src="">
                </figure>
            </div>
            <div>
                <button>Delete</button>
                <button>Download</button>
            </div>
        </div>
        `;
    }
}