var assert = require('assert');
var dom    = require('../nanodom');

var body  = dom('body')
var mocha = dom('<div id="mocha"></div>')
body.append(mocha)

describe('NANODOM', function() {

    it('Can query by css selectors', function() {
        var element = dom('#mocha')
        assert.equal(element.length, 1)
    })

    it('Can create dom elements from a string', function() {
        var element = dom("<h1>eple</h1>")
        assert.equal(element[0].tagName, 'H1')
    })

    it('Can create nested dom elements from a string', function() {
        var element = dom("<div><h1>eple</h1></div>")
        assert.equal(element.length, 1)
        assert.equal(element[0].childNodes.length, 1)
    })

    it('Can create sibling dom elements from a string', function() {
        var element = dom("<li>one</li><li>two</li>")
        assert.equal(element.length, 2)
    })

    it('Can append to other dom elements', function() {
        var element = dom("<h1 class='heading'>eple</h1>")
        dom("#mocha").append(element)
        var heading = dom('.heading')
        assert.equal(heading.length, 1)
        heading.remove()
    })

    it('Can prepend to other dom elements', function() {
        var element = dom("<h1 class='heading'>eple</h1>")
        dom("#mocha").prepend(element)
        assert.equal(dom("#mocha")[0].firstChild, element[0])
        element.remove()
    })

    it('Can empty an element', function() {
        var container = dom('<ul id="epleKake"></ul>')
        container.append(dom('<li>eple</li>'))
        container.append(dom('<li>eple</li>'))
        container.append(dom('<li>eple</li>'))
        assert.equal(container[0].childNodes.length, 3)
        container.empty()
        assert.equal(container[0].childNodes.length, 0)
        container.remove()
    })

    it('Can add classes', function() {
        var element = dom('<div></div>').addClass('eple');
        dom('body').append(element)
        assert.equal(dom('.eple').length, 1)
        element.remove()
    })

    it('Can remove classes', function() {
        var element = dom('<div class="eple kanon"></div>').removeClass('kanon');
        dom('body').append(element)
        assert.equal(dom('.kanon').length, 0)
        element.remove()
    })

    it('Allows passing nanodom element', function() {
        var element = dom('<div class="eple"></div>');
        var another = dom(element);
        assert.equal(element, another);
    })

    it('Allows passing an actual dom element', function() {
        var element = dom('<div class="eple"></div>');
        var another = dom(element[0]);
        assert.ok(another[0] instanceof HTMLElement);
    })

})
