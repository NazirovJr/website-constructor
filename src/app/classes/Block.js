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
        const {ImageStyle:s,alt,styles} = this.options
        return row(`<img src="${this.value}" style="${cssConvert(s)}" alt="${alt}">`,cssConvert(styles))
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
        return row(column(`<p>${this.value}</p>`),cssConvert(this.options.styles))
    }

}
export class TitleBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
    HtmlCode() {
        const {tag = 'h1',styles} = this.options
        return row(column(`<${tag}>${this.value}</${tag}>`),cssConvert(styles))
    }

}