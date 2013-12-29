define([], function() {

    function dom() {}
    dom.prototype             = new Array;
    dom.prototype.append      = function(element)  { element.map(function(e) { this[0].appendChild(e) }.bind(this)); return this}
    dom.prototype.remove      = function()         { this.map(function(e) {e.parentNode.removeChild(e)}); return this}
    dom.prototype.prepend     = function(element)  { element.map(function(e) { this[0].insertBefore(e, this[0].childNodes[0]) }.bind(this)); return this}
    dom.prototype.empty       = function(elements) { this.map(function(e) { e.innerHTML = ""}); return this}
    dom.prototype.addClass    = function(classes)  { this.map(function(e) { e.className += ' '+classes}); return this}
    dom.prototype.removeClass = function(classes)  {
        this.map(function(e) {
            e.className = e.className.split(' ').reduce(function(prev, cls) {
                    return (classes.indexOf(cls) < 0) ? prev.concat(cls) : prev;
            },[]).join(' ');
        })
        return this
    }

    function domify(str) { var d = document.createElement('div'); d.innerHTML = str; return d.childNodes }

    return function(selector) {
        if (selector instanceof dom) return selector
        if (selector instanceof HTMLElement) {var d = new dom(); d.push(selector); return d}
        if (typeof selector !== 'string') return
        var s, d=new dom(), c=(selector.indexOf('<') == 0);
        s = c ? domify(selector) : document.querySelectorAll(selector);
        [].slice.call(s).map(function(e) {d.push(e)})
        return d
    }
})
