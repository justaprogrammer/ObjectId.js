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
			expect(objectId.toString()).toEqual('0000000000000000ffffff');
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
			var array = new Array( 1, 2, 3, 4, 5, 6, 7, 8, 9, 0xa, 0xb, 0xc );
			var objectId = new ObjectId("0102030405060708090a0b0c");
			expect(objectId.toArray()).toEqual(array);
		});
	});
});
