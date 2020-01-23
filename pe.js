describe('Protractor Alert steps',function() {  
	
	
	it('Open NonAngular js website Alerts',function() {
		
	browser.get("https://qaclickacademy.github.io/protocommerce/");
	/*element(by.name("name")).sendKeys("hi");
	element(by.css("input[name='email']")).sendKeys("hi");
	element(by.id("exampleInputPassword1")).sendKeys("oop");
	element(by.css("input[type='checkbox']")).click();
	element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
	element.all(by.name("inlineRadioOptions")).last().click();
	element(by.buttonText("Submit")).click().then(function()
			{
		element(by.css("div[class*='success']")).getText().then(function(text)
				{
			console.log(text);
				})
		
			})
			element(by.name("name")).clear();
	element(by.name("name")).sendKeys("h").then(function()
					{
				element(by.css("div.alert.alert-danger")).getText().then(function(text){
					console.log(text);
				})
					})*/
	
	
	element(by.linkText("Shop")).click();

		
		element.all(by.tagName("app-card")).each(function(item)
				{
	item.element(by.css("h4 a")).getText().then(function(text){
		
		if(text=="Samsung Note 8")
			{
			item.element(by.css("button.btn.btn-info")).click();
			element(by.partialLinkText("Checkout")).getText().then(function(text){
				var res=text.split("(");
				
				expect(res[1].trim().charAt(0)).toBe("1");
		var x=Number(res[1].trim().charAt(0));
		var y=Number(res[1].trim().charAt(0));
		var z=x+y;
		console.log(z);
		element(by.partialLinkText("Checkout")).click();
		
	//	expect(document.getElementById("exampleInputEmail1").value).toBe("1");
		element(by.id("exampleInputEmail1")).getAttribute("value").then(function(text){
				console.log(text);
			})
		
			
	
				
			})
			
			}
	})
			
		
				
		
	})
	
	
		
		
	
		
		
		
		
		
		
	})
	
})

		 
		
		
		
		
		
		//browser.get() will hit url on the browser
		// write your raw protractor code
		
		//Each it block will be called as a spec
		
		
		
		


	//Second parameter - function (function wil have all tests (it blocks)

//first parameter- Test case  name




