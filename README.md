# nanodom

[![browser support](https://ci.testling.com/asbjornenge/nanodom.png)
](https://ci.testling.com/asbjornenge/nanodom)

Nanodom is a small DOM manipulation library.   

### Install

Nanodom is available on both npm and bower.

	$> npm install nanodom
	$> bower install nanodom

### Use
	
	// Node (browserify)
	var dom = require('nanodom')
	
	// Browser AMD
	require(['nanodom'], function(dom) {
		dom('.cake').cmap(function(e) { e.classList.add('sprinkles') })
	})
	
	//Browser Script
	<script src="nanodom.js"></script>

### Docs

For full documentation see the [spec](https://github.com/asbjornenge/nanodom/blob/master/test/spec.js).  

enjoy.

