import AccueilPage from "./accueil/accueil-page";
import SendMultiFiles from "./send-multi-files/send-multi";

const webPagesComponent = {
    load() {
        customElements.define("accueil-page", AccueilPage);
        customElements.define("send-multi-files", SendMultiFiles);
    }
};

export default webPagesComponent;