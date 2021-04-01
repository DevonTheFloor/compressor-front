import FormUploadForm from "./form-upload-file/form-upload-file"
import HeaderBar from "./header-bar/header-bar"

const WebComponent = {
    load() {

        customElements.define('form-upload-file', FormUploadForm)
        customElements.define('header-bar', HeaderBar)
    }
}

export default WebComponent