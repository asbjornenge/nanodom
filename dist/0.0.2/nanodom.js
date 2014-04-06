!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.nanodom=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
function dom() {}
dom.prototype             = new Array;
dom.prototype.append      = function(element)   { element.map(function(e) { this[0].appendChild(e) }.bind(this)); return this }
dom.prototype.remove      = function()          { this.map(function(e) {e.parentNode.removeChild(e)}); return this }
dom.prototype.prepend     = function(element)   { element.map(function(e) { this[0].insertBefore(e, (this[0].hasChildNodes()) ? this[0].childNodes[0] : null) }.bind(this)); return this }
dom.prototype.cmap        = function(fn)        { this.map(fn); return this }

function domify(str) { var d = document.createElement('div'); d.innerHTML = str; return d.childNodes }

module.exports = function(selector) {
    if (selector instanceof dom) return selector
    if (selector instanceof HTMLElement) {var d = new dom(); d.push(selector); return d}
    if (typeof selector !== 'string') return
    var s, d=new dom(), c=(selector.indexOf('<') == 0);
    s = c ? domify(selector) : document.querySelectorAll(selector);
    [].slice.call(s).map(function(e) {d.push(e)})
    return d
}

},{}]},{},[1])
(1)
});