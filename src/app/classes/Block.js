import {column, cssConvert, row} from "../utilities";

class Block {
    constructor(value,options) {
        this.value = value
        this.options = options
    }
    HtmlCode(){
        throw new Error("We should realize the HtmlCode")
    }
}

export class ImageBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    HtmlCode() {
        const {ImageStyle:s,more:alt,styles} = this.options
        return row(`<img src="${this.value}" style="${cssConvert(s)}" alt="${alt}">`,cssConvert(styles))
    }

}

export class VideoBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    HtmlCode() {
        const {ImageStyle:s,more:format,styles} = this.options
        const value = this.value.includes('youtu.be') ? this.value.replace('youtu.be','www.youtube.com/embed') : this.value
        return row(`<iframe style=${styles} width="480px" height="500px" src=${value} frameborder="0"  allowfullscreen></iframe>


`,cssConvert(styles))
    }



}

export class HyperLinkBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    HtmlCode() {
        const {more:link,styles} = this.options
        return `<a style=${styles} href=${link}>${this.value}</a>`
    }

}

export class ButtonBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    HtmlCode() {
        const {more:action,styles} = this.options
        return row(`<button style=${styles} onclick=(eval(${action}))>${this.value}</button>`)
    }

}

export class ColumnBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    HtmlCode() {
        const html = this.value.map(column).join('')
        return row(html,cssConvert(this.options.styles))
    }

}
export class TextBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    HtmlCode() {
        const {more:tag = 'p',styles} = this.options
        return row(column(`<${tag}>${this.value}</${tag}>`),cssConvert(styles))
    }

}
export class TitleBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    HtmlCode() {
        const {more:tag = 'h1',styles} = this.options
        debugger
        return row(column(`<${tag}>${this.value}</${tag}>`),cssConvert(styles))
    }

}
