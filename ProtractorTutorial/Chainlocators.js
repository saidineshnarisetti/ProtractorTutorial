describe("Chain locators ", function() {
  it("Open Anngular site", function() {
	  //browser.waitForAngularEnabled(false);  // for non- angular apps
	// browser.get('http://google.com');  
    browser.get('http://juliemr.github.io/protractor-demo/');
    // repeter chain locators 
    element(by.model("first")).sendKeys("2");
    element(by.model("second")).sendKeys("3");
    //element(by.model("operatory")).element(by.css("MULTIPLICATION")).click();
    
    element(by.id("gobutton")).click();
    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
    	console.log(text);
    })
    
//   element(by.css("h2[class='ng-binding']")).getText().then(function(text){
//    	console.log(text);
//    })
   
  });
});