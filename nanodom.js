function dom() {}
dom.prototype             = new Array;
dom.prototype.append      = function(element)   { element.forEach(function(e) { this[0].appendChild(e) }.bind(this)); return this }
dom.prototype.remove      = function()          { this.forEach(function(e) {e.parentNode.removeChild(e)}); return this }
dom.prototype.prepend     = function(element)   { element.forEach(function(e) { this[0].insertBefore(e, (this[0].hasChildNodes()) ? this[0].childNodes[0] : null) }.bind(this)); return this }
dom.prototype.each        = function(fn)        { this.forEach(fn); return this }

function domify(str) { var d = document.createElement('div'); d.innerHTML = str; return d.childNodes }

module.exports = function(selector) {
    if (selector instanceof dom) return selector
    if (selector instanceof HTMLElement) {var d = new dom(); d.push(selector); return d}
    if (typeof selector !== 'string') return
    var s, d=new dom(), c=(selector.indexOf('<') == 0);
    s = c ? domify(selector) : document.querySelectorAll(selector);
    [].slice.call(s).forEach(function(e) {d.push(e)})
    return d
}
