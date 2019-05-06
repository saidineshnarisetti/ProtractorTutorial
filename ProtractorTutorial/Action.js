describe("Protractor Action steps", function() {	  
	it("open poss js website", function() {
		
		browser.get('http://posse.com/');
		
		//element(by.model("userInputQuery")).sendKeys("dinner");
		browser.actions().mouseMove(element(by.model("userInputQuery")).sendKeys("dinner")).perform();
		//browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		//browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(1000);
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(37);
			//element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			
			element(by.linkText('Tsui Wah')).click().then(function(){
				browser.sleep(5000);
				})	
			})
		console.log("Last step to execute!");
		});
	  });