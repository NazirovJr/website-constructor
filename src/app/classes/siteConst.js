
export class siteConst{
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model){
        debugger
        this.$el.innerHTML = ''
        model.forEach(elements => {
            this.$el.insertAdjacentHTML('beforeend', elements.HtmlCode())
        })

    }
}