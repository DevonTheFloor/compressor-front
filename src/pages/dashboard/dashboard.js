import "./dashbord.scss";

export default class DashboardCompressPicture extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <header-bar></header-bar>
        <h2>Image compressé en attente</h2>
        <section>
            <galery-images></galery-images>
        </section>
        `;
    }
}