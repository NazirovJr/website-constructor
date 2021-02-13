// import {row, column, cssConvert} from './utilities'
//
// function title(block) {
//     const {tag = 'h1',styles} = block.options
//     return row(column(`<${tag}>${block.value}</${tag}>`),cssConvert(styles))
// }
//
// function text(block) {
//     return row(column(`<p>${block.value}</p>`),cssConvert(block.options.styles))
// }
//
// function columns(block) {
//     const html = block.value.map(column).join('')
//     return row(html,cssConvert(block.options.styles))
//
// }
//
//
// function image(block) {
//     const {ImageStyle:s,alt,styles} = block.options
//     return row(`<img src="${block.value}" style="${cssConvert(s)}" alt="${alt}">`,cssConvert(styles))
// }
//
// export const app_templates = {
//         title,
//         text,
//         image,
//         columns,
// }