/*
*
* Copyright (c) 2011 Justin Dearing (zippy1981@gmail.com)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) version 2 licenses.
* This software is not distributed under version 3 or later of the GPL.
*
* Version 0.1.0
*
*/

//TODO: Just the beginning. Obviously actually generating an object Id would be hard.
var ObjectId = {
    EmptyId: function () {
        return {
            __type: "ObjectId:#MongoDB.Bson",  //
            increment: 0,
            machine: 0,
            pid: 0,
            timestamp: 0
        };
    }
};