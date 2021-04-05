import './form-upload-file.scss'
import '../input-range/input-range.js'

export default class FormUploadForm extends HTMLElement{
    constructor() {
        super()
        this.innerHTML = `
        <form oninput="outputValue.value=parseInt(inputValue.value)" class="form-upload-file card">
            <label>
            Selectionez votre fichier
            <input type="file" class="input-file">
            </label>
            <input-range></input-range>
            <button type="submit" disabled>Envoyer</button>
        </form>
            `

        import ('./form-upload-file-service')
    }
}