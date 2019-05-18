
describe("Protractor Demo Page source", function() {
  it("Page source", function() {
	  //browser.waitForAngularEnabled(false);  // for non- angular apps
	// browser.get('https://apps-stage.juniper.net/newhome/');  
    browser.get('https://apps-stage.juniper.net/newhome/').then( function () {
         browser.getPageSource().then(function (txt) {
        console.log(txt);
      });
         element(by.className("appmenu-wrapper")).element(by.className("app-full-name")).getText().then(function(text){
         	console.log(text);
         })
         element.all(by.className("app-wrap")).getText().then(function(num){
    	console.log(num);
    })
    });
  });
});