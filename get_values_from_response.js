var casper = require('casper').create();
var wanted_ids;

function getValues() {
    wanted_ids = document.querySelectorAll('#fpBB, #ioBB');
    return Array.prototype.map.call(wanted_ids, function (e) {
        return e.getAttribute('value');
    });
}

casper.start('https://www.russiancupid.com/en/auth/login');

casper.then(function () {
    wanted_ids = this.evaluate(getValues);
});

casper.run(function () {
    for(var i in wanted_ids) {
        console.log(wanted_ids[i]);
    }
    this.exit();
});