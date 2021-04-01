export const $dom = {
    elm(selectorCss) {
        return document.querySelector(selectorCss);
    },
    innerHTMLElm(selectorCss, insertString) {
        const element = document.querySelector(selectorCss)
        element.innerHTML = insertString
    }
}

