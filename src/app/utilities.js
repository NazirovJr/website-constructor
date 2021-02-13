export function row(content,styles ='') {
    return `
        <div class='row' style='${styles}'>${content}</div>
    `
}

export function column(content) {
    return `
    <div class='col-sm'>${content}</div>
    `
}

export function cssConvert(style ={}) {
    if (typeof style === 'string') return style
    const intoString = key => `${key}:${style[key]}`
    return Object.keys(style).map(intoString).join(';')
}

export function block(type) {
    return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
 `
}

