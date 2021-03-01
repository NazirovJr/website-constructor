import {block, column} from "../utilities";
import {ButtonBlock, ColumnBlock, HyperLinkBlock, ImageBlock, TextBlock, TitleBlock, VideoBlock} from "./Block";

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
            block('title'),
            block('image'),
            block('video'),
            block('hyper-link'),
            block('button')
        ].join('')
    }

    addBlock(event){
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        const more = event.target.more.value
        let newBlock = ''
        switch (type) {
            case 'text':
                newBlock = new TextBlock(value, {more,styles})
                break
            case 'title':
                newBlock = new TitleBlock(value,{more,styles})
                break
            case 'video':
                newBlock = new VideoBlock(value,{more,styles})
                break
            case 'hyper-link':
                newBlock = new HyperLinkBlock(value,{more,styles})
                break
            case 'button':
                newBlock = new ButtonBlock(value,{more,styles})
                break
            default:
                newBlock = new ImageBlock(value,{more,styles})
                break
        }
        this.update(newBlock)
        event.target.value.value = ''
        event.target.styles.value = ''
        event.target.more.value = ''
    }
}

