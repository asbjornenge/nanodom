# nanodom

![browser support](https://ci.testling.com/asbjornenge/nanodom.png)
](https://ci.testling.com/asbjornenge/nanodom)

-----------

**CHANGES**

I'm currently converting from a hard coded UMD browser module to a node style module pattern, using browserify for creating different types of modules.

Stay tuned.

-----------

Nanodom is a small [UMD](https://github.com/umdjs/umd) (AMD compatible) dom manipulation library.   

### Install

	bower install nanodom

### Use

	require(['nanodom'], function(dom) {
		dom('body').append(dom('<h1>YEAH!</h1>))
	})

For full documentation see the [spec](https://github.com/asbjornenge/nanodom/blob/master/assets/test/spec.js).  

enjoy.

