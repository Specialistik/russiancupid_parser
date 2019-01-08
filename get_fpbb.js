var casper = require('casper').create();
var fp_bb_value;

function get_fp_bb() {
    //var fp_bb_value = document.querySelectorAll('input#ioBB, input#fpBB');
    var fp_bb_value = document.querySelector('input#ioBB');
    return fp_bb_value.call(function (e) {
        return e.getAttribute('value');
    });
}

casper.start('response.html');
casper.then(function () {
    fp_bb_value = this.evaluate(get_fp_bb);
});

casper.run(function () {
    console.log(fp_bb_value);
    //console.log(fp_bb_value);
    this.exit();
});