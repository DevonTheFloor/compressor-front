export default class DashboardCompressPicture extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <h1>Image compressé en attente</h1>
        <section>
            <galery-image></galery-image>
        </section>
        `;
    }
}