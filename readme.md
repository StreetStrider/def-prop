# def-prop

```js
var def = require('def-prop')
var val = def.val

var object = {}

def(object,'prop', val(5))
def(object,'prop', val(5, ':enum'))
def(object,'prop', val(5, ':config', ':enum'))
```