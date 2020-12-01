
module.exports = function (options) {
  const entryId = options.hash['for']
  const href = options.hash['href'] || '#'
  return `<li${
    this['page-title'] === entryId ? ' class="active"' : ''
  }><a href="${href}">${ options.fn(this) }</a></li>`
}
