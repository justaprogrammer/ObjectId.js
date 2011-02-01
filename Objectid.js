/*
*
* Copyright (c) 2011 Justin Dearing (zippy1981@gmail.com)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) version 2 licenses.
* This software is not distributed under version 3 or later of the GPL.
*
* Version 0.2.0
*
*/

/**
 * Utility object for converting between how WCF serializes a object of type MongoDB.Bson.ObjectId
 * and the standard 24 character representation.
 */
var ObjectId = {
    /**
     * Generates an empty object id.
     * @returns an empty objectId, the equivilent of  ObjectId("000000000000000000000000")
     */
    emptyId: function () {
        return {
            timestamp: 0,
            machine: 0,
            pid: 0,
            increment: 0
        };
    },

    /**
     * Turns a string representation of a BSON ObjectId into a JSON object
     * parsable by a .NET DataContractJsonSerializer.
     * @param id string A string representation of an ObjectId.
     * @see http://msdn.microsoft.com/en-us/library/system.runtime.serialization.json.datacontractjsonserializer.aspx
     */
    parse: function (id) {
        return {
            timestamp: Number('0x' + id.substr(0,8)),
            machine:  Number('0x' + id.substr(8,6)),
            pid:  Number('0x' + id.substr(14,4)),
            increment:  Number('0x' + id.substr(18,6))
        };
    },

    /**
     * Turns a WCF representation of a BSON ObjectId into a 24 character string representation.
     */
    stringify: function(objectId) {
        var timestamp = objectId.timestamp.toString(16);
	var machine = objectId.machine.toString(16);
	var pid = objectId.pid.toString(16);
	var increment = objectId.increment.toString(16);
        return '00000000'.substr(0, 6 - timestamp.length) + timestamp + 
               '000000'.substr(0, 6 - machine.length) + machine +
               '0000'.substr(0, 4 - pid.length) + pid + 
               '000000'.substr(0, 6 - increment.length) + increment;
    }
};

