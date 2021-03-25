import "./header-bar.scss"
// import store from '../../redux/rooterducer'

export default class HeaderBar extends HTMLElement {

    static get observedAttributes() { return ['title']; }

    constructor() {
        super()
            // const store = response.store;
            // let headerBarState = store.getState().headerBardState;
            // console.log(store, headerBarState);
            this.title = this.getAttribute('title');
            this.innerHTML = `
                <header class="header-bar">
                    <h1>${this.title}</h1>
                </header>
            `
    }
    attributeChangedCallback(nameAtr, oldValue, newValue) {
        if (nameAtr === "title" && newValue !== oldValue) {
            this.title = newValue
            console.log('ubdate', newValue);
        }
    }
    
}

