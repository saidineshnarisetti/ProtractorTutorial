describe("Chain locators ", function() {
	
	function Add(a,b) {
		element(by.model("first")).sendKeys(a);
	    element(by.model("second")).sendKeys(b);
	    element(by.id("gobutton")).click();
		
	}
  it("Open Anngular site", function() {
	  //browser.waitForAngularEnabled(false);  // for non- angular apps
	// browser.get('http://google.com');  
    browser.get('http://juliemr.github.io/protractor-demo/');
    // repeter chain locators 
    Add(2,3);
    Add(5,4);
    Add(10,15);
    Add(12,15);
    Add(12,17);

//    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
//    	console.log(text);
//    })
    element.all(by.repeater("result in memory")).count().then(function(text){
    	console.log(text);
    })
    
     element.all(by.repeater("result in memory")).each(function(item){
    	 item.element(by.css("td:nth-child(3)")).getText().then(function(text){
    	    	console.log(text);
    	 })
     })
     
    
//   element(by.css("h2[class='ng-binding']")).getText().then(function(text){
//    	console.log(text);
//    })
   
  });
});