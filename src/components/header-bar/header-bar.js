import "./header-bar.scss"
import store from '../../redux/rooterducer'

export default class HeaderBar extends HTMLElement {

    constructor() {
        super()
            this.title = this.getAttribute('title')
            this.innerHTML = `
                <header class="header-bar">
                    <h1>${this.title}</h1>
                </header>
            `
    }

    connectedCallback() { 
        store.subscribe(() => { 
            // changement du titre du header-bar pour test redux / web component
            const title = document.querySelector('header-bar .header-bar h1')
            title.innerHTML = store.getState().headerBardState.title
        })
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        if (nameAtr === "title" && newValue !== oldValue) {
            this.title = newValue
        }
    }

}

