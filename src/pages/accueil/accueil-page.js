const app = document.getElementById("app")
//service
import { sendImageFile } from './acceuil-page-service'
// style
import './accueil.scss'
//redux
import store from '../../redux/rooterducer'
//helpers
import {$dom} from '../../helpers/dom/dom'

class AccueilPage extends HTMLElement {
    constructor() {
        super()
        const title = store.getState().headerBarState.title
        this.innerHTML = `
            <header-bar></header-bar>
            <section class="section-form-upload-file">
                <form-upload-file></form-upload-file>
            </section>
        `
        const formUploadFile = $dom.elm('form')
        formUploadFile.addEventListener('submit', sendImageFile)
        
        store.subscribe(() => {
            const headerBar = $dom.elm('header-bar')
            headerBar.setAttribute('_title', store.getState().headerBarState.title)
        })
    }
}

export default AccueilPage
