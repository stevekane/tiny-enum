# Simple Enum
Provides an elegant API for non-algebraic Enumerations in javascript.  

This library also provides a clever shorthand mechanism for checking the value of an enum which is very convenient for switching on properties of an enumeration.  

```javascript
var KEY_STATE = new Enum('UP', 'DOWN', 'JUST_DOWN', 'JUST_UP')

var C = KEY_STATE.JUST_DOWN
var CTRL = KEY_STATE.DOWN

if (C.JUST_DOWN && CTRL.DOWN) // Do copy stuff for your app
```

In particular, this library is more convenient and less verbose than the alternative which would look something like this

```javascript
if (C === KEY_STATE.JUST_DOWN && CTRL === KEY_STATE.DOWN) // Do copy stuff for your app
```

# Tests and Build
To run the test, use ```npm run test```
