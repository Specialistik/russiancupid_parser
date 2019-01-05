var casper = require('casper').create();
var fp_bb_value;

function get_fp_bb() {
    return document.querySelector('input#fpBB').getAttribute('value');
}

casper.start('response.html');
casper.then(function () {
    fp_bb_value = this.evaluate(get_fp_bb);
});

casper.run(function () {
    console.log(fp_bb_value);
    this.exit();
});