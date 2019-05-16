
describe("Protractor Demo Page source", function() {
  it("Page source", function() {
	  //browser.waitForAngularEnabled(false);  // for non- angular apps
	// browser.get('http://google.com');  
    browser.get('https://apps-stage.juniper.net/newhome/').then( function () {
         browser.getPageSource().then(function (txt) {
        console.log(txt);
      });
    });
  });
});