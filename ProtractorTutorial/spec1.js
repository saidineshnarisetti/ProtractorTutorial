describe("Protractor baby steps", function() {
	  
	it("open angular js website", function() {
		browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			browser.sleep(1000);
			console.log("Last step to execute!")
		});
		
	    
	  })
	it("Close browser", function() {
		 
	})
	});

