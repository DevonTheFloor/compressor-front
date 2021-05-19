export default class CardImage extends HTMLElement {

    static get observedAttributes() { return ["picture-link"]; }

    constructor() { 
        super();

        this.pictureLink = "";
    }
    connectedCallback() { 

        if(this.getAttribute("picture-link")) {
            this.pictureLink = this.getAttribute("picture-link");
        }
        
        this.innerHTML = 
        `
            <div>
               <img src="${this.pictureLink}">
            </div>
        `;
            
    }

}