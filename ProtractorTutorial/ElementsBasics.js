describe("Protractor Demo App", function() {
  it("should add one and two", function() {
	  //browser.waitForAngularEnabled(false);  // for non- angular apps
	// browser.get('http://google.com');  
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model("first")).sendKeys("4");
    element(by.model("second")).sendKeys("5").then(function(){
		browser.sleep(1000);
    })

    element(by.id("gobutton")).click();
    //css"tagnname[attribue='value']"123--git commit
   element(by.css("h2[class='ng-binding']")).getText().then(function(text){
    	console.log(text);
    })
    expect(element(by.binding("latest")).getText()).
        toEqual("9"); // This is wrong!
  });
});