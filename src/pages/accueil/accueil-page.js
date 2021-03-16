const app = document.getElementById("app")

// components
import HeaderBar from '../../components/header/header-bar'

const AccueilPage = {
    load() {
        app.insertAdjacentHTML('beforeend',
        `
            ${HeaderBar.load({title: "Compressor"})}
        `
        )
    }
}

export default AccueilPage