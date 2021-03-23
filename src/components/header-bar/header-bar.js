import "./header-bar.scss"

export default class HeaderBar extends HTMLElement {
    constructor() {
        super()
        const title = this.getAttribute('title');
        this.innerHTML = `
            <header class="header-bar">
                <h1>${title}</h1>
            </header>
        `
    }
}