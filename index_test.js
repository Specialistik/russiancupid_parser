var casper = require('casper').create();
var evaluationResult;

function performLogin() {
    console.log('login performing');
// Scrape the links from top-right nav of the website
    document.querySelector('input.email').value = 'spectest234@gmail.com';
    document.querySelector('input.password').value = '1f53901c';
    console.log(document.querySelector('.greenShinyButton').innerHTML);
    document.querySelector('.greenShinyButton').submit();
}

// Opens casperjs homepage
casper.start('response.html', function(){
    this.log('casper started');
    evaluationResult = this.evaluate(performLogin);
});


casper.then(function() {
    console.log(document.querySelector('body').innerHTML);
});

casper.run();