var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug'
});
var fs = require('fs');
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
casper.start('https://www.russiancupid.com/en/auth/login', function(){
    this.log('casper started');
    fs.write('responses/casper_login_page.html', this.getPageContent(), 'w');
    this.waitForSelector('.greenShinyButton');
    //evaluationResult = this.evaluate(performLogin);
    casper.thenEvaluate(performLogin);
    casper.on('resource.received', function(resp) {
        this.echo(JSON.stringify(resp, null, 4));
        fs.write('casper_response.html', this.getPageContent(), 'w');
        console.log('current URL is ' + this.getCurrentUrl());
    });
    //evaluationResult = this.evaluate(performLogin);
});


casper.then(function() {
    console.log(document.querySelector('body').innerHTML);
});

casper.run();