import "./galery.scss";
//redux
import store from "../../redux/rooterducer";

//template
const galeryPicture = (listCard) => {
    return `
    <ul>
        ${listCard.map((card) => `

            <li><card-image picture-link="${card.pinctureLink}"></card-image></li>

        `).join("")}
    </ul>
    `;
};

export default class Galery extends HTMLElement {

    //propriété
    static get observedAttributes() { return ["compressor-id"]; }

    
    constructor() {
        super();
        this.listCards = [];
    }

    connectedCallback() { 
        //récupération des informations de la liste des images compressées
        if (store.getState().pictureCompressState.dataPictures) {
            this.listCards = store.getState().pictureCompressState.dataPictures;
        }
        //innitialisation du template
        this.innerHTML = galeryPicture(this.listCards);

        store.subscribe(() => {
            // récupération des information de la nouvelle liste des images compréssées
            this.listCards = store.getState().pictureCompressState.dataPictures;
            // mis à jour du template
            this.innerHTML = galeryPicture(this.listCards);
        });
            
    }
}