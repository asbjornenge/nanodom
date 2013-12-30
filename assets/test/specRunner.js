require.config({
    baseUrl : '../lib/',
    paths: {
        chai   : '../bower_components/chai/chai'
    },
    urlArgs: "v="+(new Date()).getTime()
});

require([
    '../test/spec.js'
],
function() {
    mocha.run()
});

