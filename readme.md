# def-prop

```js
var def = require('def-prop')
var val = def.val
var getset = def.getset

var object = {}

def(object,'prop', val(5))
def(object,'prop', val(5, ':enum'))
def(object,'prop', val(5, ':config', ':enum'))

def(object, 'prop', getset(() => 'getter'))
def(object, 'prop', getset(() => 'getter', v => { 'setter' }))
def(object, 'prop', getset(() => 'getter', ':enum'))
def(object, 'prop', getset(() => 'getter', v => { 'setter' }, ':enum'))
```

# license
MIT.
