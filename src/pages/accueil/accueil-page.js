const app = document.getElementById("app")
//service
import { sendImageFile } from './acceuil-page-service';
// style
import './accueil.scss'

// components
import HeaderBar from '../../components/header/header-bar'
import FormUploadFile from '../../components/form-upload-file/form-upload-file';

const AccueilPage = {
    load() {
        app.insertAdjacentHTML('beforeend',
        `
            ${HeaderBar.load({title: "Compressor"})}
            <section class="section-form-upload-file">
            ${FormUploadFile.load()}
            </section>
        `
        )

        // evénement submit du composant form-upload-file
        const formUploadFile = document.querySelector('form')
        formUploadFile.addEventListener('submit', sendImageFile)
    }
}

export default AccueilPage