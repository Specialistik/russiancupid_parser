var webPage = require('webpage');
var page = webPage.create();

page.open('response.html', function(status) {
    page.evaluate(function() {
        var io_bb = document.querySelector('input#ioBB').getAttribute('value');
        //console.log
        return io_bb;
    });
    //console.log(title);
    phantom.exit();
});