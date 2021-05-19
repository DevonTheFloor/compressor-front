import "./galery.scss";
//redux
import store from "../../redux/rooterducer";

const galeryPicture = (ListCard) => {
    return `
    <ul>
        ${ListCard.map((card) => `

            <li><card-image picture-link="${card.pinctureLink}"></card-image></li>

        `).join("")}
    </ul>
    `;
};

export default class Galery extends HTMLElement {

    static get observedAttributes() { return ["compressor-id"]; }

    
    constructor() {
        super();
        this.ListCard = [];
    }

    connectedCallback() { 
        // console.log("admin: strore:", store.getState().pictureCompressState.dataPictures[0].pinctureLink);
        if (store.getState().pictureCompressState.dataPictures[0].pinctureLink) {
            this.ListCard = store.getState().pictureCompressState.dataPictures;
            console.log("admin: this.ListCard: ", this.ListCard);
        }

        this.innerHTML = galeryPicture(this.ListCard);

        store.subscribe(() => {
            console.log("STORE: ", store.getState().pictureCompressState.dataPictures);
            this.ListCard = store.getState().pictureCompressState.dataPictures;
            this.innerHTML = galeryPicture(this.ListCard);
            
        });
            
    }

    

    // attributeChangedCallback(nameAtr, oldValue, newValue) {
    //     if (nameAtr === "_title" && newValue !== oldValue) {
    //         this._title = newValue;
    //         this.querySelector("header h1").innerHTML = this._title;
    //     }
    // }

}