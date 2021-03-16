import './header-bar.scss'
import '../../styles.scss'
const HeaderBar = {
    load(header) {
        return `
            <header class="header-bar">
                <h1>${header.title}</h1>
            </header>
        `   
    }
}

export default HeaderBar;