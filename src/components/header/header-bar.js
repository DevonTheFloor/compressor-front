import './header-bar.scss'

const HeaderBar = {
    load(header) {
        return `
            <header>
                <h1>${header.title}</h1>
            </header>
        `   
    }
}

export default HeaderBar;