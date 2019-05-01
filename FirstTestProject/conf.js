exports.config = {
    //lets see if git works
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['SMECreditScorePage.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

    //
};