import './form-upload-file.scss'

const FormUploadFile = {
    load() {
        
        return `
            <form class="form-upload-file card">
                <label>
                    Selectionez votre fichier
                    <input type="file">
                </label>
                <button type="submit">Envoyer</button>
            </form>
        `   
    }
    
}

export default FormUploadFile;