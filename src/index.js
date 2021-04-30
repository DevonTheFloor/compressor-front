import "./styles.scss";
import $dom from "./helpers/dom";

//load components
import WebComponent from"./components/components-load";
WebComponent.load();

// page components
import webPagesComponent from "./pages/pages-load";
webPagesComponent.load();

// lancement de l'app
$dom.innerHTMLElm("#app", "<accueil-page></accueil-page>");









