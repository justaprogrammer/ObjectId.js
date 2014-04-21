This is an implementation of ObjectId in pure javascript. 
MachineId is persistant across a single domain via html5
LocalStorage with a fallback to cookies. Something like 
evercookie could be used to make a more persistant machineId.
However, this is not the intention of this implementation.

install it via npm:
```
npm install objectid-browser
```

use browserify (http://browserify.org/)
```
browserify ./your-fs-file.js -r objectid-broser:objectid -o ./outputfile.js
```

and use it in you browser with:
```
var ObjectId = require('objectid');
```

