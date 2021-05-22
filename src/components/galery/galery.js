import "./galery.scss";
//redux
import store from "../../redux/rooterducer";

const test = [{pinctureLink: "https://humour-france.fr/wp-content/uploads/2019/03/Vous-avez-vu-toutes-ces-citrouilles.jpg", size: "4589", rangeValue: "50"},{pinctureLink: "https://humour-france.fr/wp-content/uploads/2019/03/Vous-avez-vu-toutes-ces-citrouilles.jpg", size: "5894", rangeValue: "70"},{pinctureLink: "https://humour-france.fr/wp-content/uploads/2019/03/Vous-avez-vu-toutes-ces-citrouilles.jpg", size: "9874", rangeValue: "25"}];

//template
const galeryPicture = (listCard) => {
    return `
    <ul>
        ${listCard.map((card) => `

            <li><card-image
            picture-link="${card.pinctureLink}
            size="${card.size}"
            rangeValue="${card.rangeValue}"
            "></card-image></li>

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
        this.innerHTML = galeryPicture(test);

        store.subscribe(() => {
            // récupération des information de la nouvelle liste des images compréssées
            this.listCards = store.getState().pictureCompressState.dataPictures;
            // mis à jour du template
            this.innerHTML = galeryPicture(test);
        });
            
    }
}