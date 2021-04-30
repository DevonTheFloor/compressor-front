const $dom = {
    elm(selectorCss) {
        return document.querySelector(selectorCss);
    },
    innerHTMLElm(selectorCss, insertString) {
        this.elm(selectorCss).innerHTML = insertString
    },
    removeElm(selectorCss) {
        this.elm(selectorCss)?.remove();
    },
    insertBeforeEnd(selectorCss, insertString) {
        this.elm(selectorCss)?.insertAdjacentHTML("beforeend", insertString);
    }
}

export default $dom

