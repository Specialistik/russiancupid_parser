var casper = require('casper').create();
var wanted_ids;

function getLinks() {
// Scrape the links from top-right nav of the website
    var wanted_ids = document.querySelectorAll('input#ioBB, input#fpBB');
    return Array.prototype.map.call(wanted_ids, function (e) {
        return e.getAttribute('value');
    });
}

// Opens casperjs homepage
casper.start('response.html');

casper.then(function () {
    wanted_ids = this.evaluate(getLinks);
});

casper.run(function () {
    for(var i in wanted_ids) {
        console.log(wanted_ids[i]);
    }
    this.exit();
});