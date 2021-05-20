import AccueilPage from "./accueil/accueil-page";
import SendMultiFiles from "./send-multi-files/send-multi";
import CardImage from "../components/card-image/card-image";

const webPagesComponent = {
    load() {
        customElements.define("accueil-page", AccueilPage);
        customElements.define("send-multi-files", SendMultiFiles);
        customElements.define("card-image", CardImage);
    }
};

export default webPagesComponent;