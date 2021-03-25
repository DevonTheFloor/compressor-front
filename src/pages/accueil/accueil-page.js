const app = document.getElementById("app")
//service
import { sendImageFile } from './acceuil-page-service';
// style
import './accueil.scss'

const AccueilPage = {
    load() {
        app.insertAdjacentHTML('beforeend',
        `
            <header-bar title="Compressor"></header-bar>
            <section class="section-form-upload-file">
                <form-upload-file></form-upload-file>
            </section>
        `
        )

        // evénement submit du composant form-upload-file
        const formUploadFile = document.querySelector('form')
        formUploadFile.addEventListener('submit', sendImageFile)
    }
}

export default AccueilPage
