import FormUploadForm from "./form-upload-file/form-upload-file";
import HeaderBar from "./header-bar/header-bar";
import InputRange from "./input-range/input-range";
import LoaderSubmit from "./loader/loader-submit/loader-submit";

const WebComponent = {
    load() {

        customElements.define("form-upload-file", FormUploadForm);
        customElements.define("header-bar", HeaderBar);
        customElements.define("input-range", InputRange);
        customElements.define("loader-submit", LoaderSubmit);
    }
};

export default WebComponent;