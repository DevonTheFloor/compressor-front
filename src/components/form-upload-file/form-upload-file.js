import './form-upload-file.scss'
export default class FormUploadForm extends HTMLElement{
    constructor() {
        super()
        this.innerHTML = `
        <form class="form-upload-file card">
        <label>
        Selectionez votre fichier
        <input type="file" class="input-file">
        </label>
        <button type="submit" disabled>Envoyer</button>
        </form>
        `
        import ('./form-upload-file-service')
    }
}