describe('The ObjectId class',function(){

    beforeEach(function() {
	});
	
	//Clean it up after each spec
	afterEach(function() {
	});
		
	//Specs
	describe('instantiation',function() {
		it('should create an objectId',function(){
			var objectId = new ObjectId(0, 0, 0, 0x00ffffff);
			var objectIdString = objectId.toString();
			expect(objectIdString).not.toBe(null);
			expect(objectId.toString()).toEqual('000000000000000000ffffff');
		});

		it('should serialize and deserialize the timestamp',function(){
			var now = new Date();
			var timeStamp = Math.floor(now.valueOf() / 1000);
			var timeStamp= timeStamp * 1000;
			var aboutNow = new Date(timeStamp);
			var objectId = new ObjectId();
			//expect(objectId.timeStamp).toEqual(timeStamp);
			expect(objectId.getDate().valueOf()).toEqual(aboutNow.valueOf());
		});


		it('should serialize to a byte array', function(){
			var oArray = new Array( 0x50, 0x7f, 0x1f, 0x77, 0xbc, 0xf8, 0x6c, 0xd7, 0x99, 0x43, 0x90, 0x11 );
			var oString = "507f1f77bcf86cd799439011";
			var objectId = new ObjectId(oString);
			expect(objectId.toString()).toEqual(oString);
			expect(objectId.toArray()).toEqual(oArray);
		});
	});
});
