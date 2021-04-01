import AccueilPage from "./accueil/accueil-page";

const webPagesComponent = {
    load() {
        customElements.define('accueil-page', AccueilPage)
    }
}

export default webPagesComponent;