describe("MDC", function(){
	it("mdc", function(){
		var expResult = 4;
		var result = mdc(4, 8);
		
		expect(expResult).toEqual(result);
	});
});