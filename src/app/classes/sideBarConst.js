import {block} from "../utilities";
import {TextBlock, TitleBlock} from "./Block";

export class siteBarConst {
    constructor(selector,updateHtml) {
        this.$el = document.querySelector(selector)
        this.update = updateHtml
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.app_template)
        this.$el.addEventListener('submit',this.addBlock.bind(this))
    }

    get app_template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    addBlock(event){
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        const newBlock = type === 'text' ?  new TextBlock(value, {styles})
            : new TitleBlock(value,{styles})
        this.update(newBlock)
        event.target.value.value = ''
        event.target.styles.value = ''

    }
}

