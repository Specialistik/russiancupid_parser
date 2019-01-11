var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug'
});
var fs = require('fs');

function performLogin() {
    document.querySelector('input.email').value = 'spectest234@gmail.com';
    document.querySelector('input.password').value = '1f53901c';
    document.querySelector('.greenShinyButton').click();
}

// Opens casperjs homepage
casper.start('https://www.russiancupid.com/en/auth/login', function(){
    casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');    
    fs.write('responses/casper_login_page.html', this.getPageContent(), 'w');
    this.waitForSelector('.greenShinyButton');
    casper.thenEvaluate(performLogin);
    casper.on('resource.received', function(resp) {
        //this.echo(JSON.stringify(resp, null, 4));
        fs.write('responses/casper_response.html', this.getPageContent(), 'w');
    });
    casper.waitForUrl('https://www.russiancupid.com/en/home/showMenu?login', function() {
        this.echo('redirected');
        confirm.log('redirected');
    });
});

casper.run();