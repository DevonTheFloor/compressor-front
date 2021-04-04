import './form-upload-file.scss'
export default class FormUploadForm extends HTMLElement{
    constructor() {
        super()
        this.innerHTML = `
        <form id="form-upload-file" class="form-upload-file card">
            <label class="input-file-container">
            <p class="input-file-trigger">Selectionnez votre fichier</p>
                <input type="file" id="input-single-file" class="input-file">
            </label>
            <p id="form-upload-file-return" class="file-return">test</p>
            <button type="submit" disabled>Envoyer</button>
        </form>
        `
        import ('./form-upload-file-service')
    }
}