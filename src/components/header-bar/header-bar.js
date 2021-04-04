import "./header-bar.scss"
import $dom from '../../helpers/dom'
import store from '../../redux/rooterducer'

export default class HeaderBar extends HTMLElement {

    // static get observedAttributes() { return ['title']; }

    constructor(_title = "Compressor") {
        super()
        this._title = _title
    }

    connectedCallback() { 
        if (this.getAttribute('_title')) {
            this._title = this.getAttribute('_title')
                console.log(this.getAttribute('_title'), "attribue");
        }   
        console.log(this._title, "variable");
            this.innerHTML = `
                <header class="header-bar">
                    <h1>${this._title}</h1>
                </header>
            `
        
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        if (nameAtr === "_title" && newValue !== oldValue) {
            this._title = newValue
            this.querySelector('header h1').innerHTML = this._title
        }
    }

}

