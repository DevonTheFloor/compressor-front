import './form-upload-file.scss'
// import './form-upload-file-service'
export default class FormUploadForm extends HTMLElement{
    constructor() {
        super()
        this.innerHTML = `
            <form class="form-upload-file card">
            <label>
            Selectionez votre fichier
            <input type="file" class="input-file">
            </label>
            <label>Taux de compression :
            <input type="range" id="tcomp" min="10" max="100" value="50" step="5" list="tocomp">
            <datalist id="tocomp">
                <option value="10" label="10%">
                <option value="15">
                <option value="20">
                <option value="25">
                <option value="30">
                <option value="35">
                <option value="40">
                <option value="45">
                <option value="20">
                <option value="50" label="50%">
                <option value="55">
                <option value="60">
                <option value="65">
                <option value="70">
                <option value="75">
                <option value="80">
                <option value="85">
                <option value="90">
                <option value="95">
                <option value="100" label="100%">
            </datalist>

            </label>
            <button type="submit" disabled>Envoyer</button>
            </form>
            `
            import ('./form-upload-file-service')
    }
}