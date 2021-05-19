import AccueilPage from "./accueil/accueil-page";
import SendMultiFiles from "./send-multi-files/send-multi";
import DashboardCompressPicture from "./dashboard/dashboard";

const webPagesComponent = {
    load() {
        customElements.define("accueil-page", AccueilPage);
        customElements.define("send-multi-files", SendMultiFiles);
        customElements.define("dashboard-picture", DashboardCompressPicture);
    }
};

export default webPagesComponent;