
declare module 'objectid-browser' {
	class ObjectId {
		constructor();
		constructor(hexString: string);
		constructor({timestamp:number, machine:number, pid:number, increment:number});
		constructor(timestamp:number, machine:number, pid:number, increment:number);
		getDate():Date;
		toArray():number[];
		toString():string;
	}
	export = ObjectId;
}