const app = document.getElementById("app")
//service
import { sendImageFile } from './acceuil-page-service'
// style
import './accueil.scss'
//redux
import store from '../../redux/rooterducer'

const AccueilPage = {
    load() {
        let title = store.getState().headerBardState.title
        store.subscribe(() => {
            title = store.getState().headerBardState.title
        })
        console.log("ici", typeof store.getState().headerBardState.title)
        app.insertAdjacentHTML('beforeend',
        `
            <header-bar title=${title}></header-bar>
            <section class="section-form-upload-file">
                <form-upload-file></form-upload-file>
            </section>
        `
        )

        // evénement submit de form-upload-file
        const formUploadFile = document.querySelector('form')
        formUploadFile.addEventListener('submit', sendImageFile)
        
        
    }
}

export default AccueilPage
