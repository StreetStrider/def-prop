# def-prop [![Travis](https://img.shields.io/travis/StreetStrider/def-prop.svg?style=flat-square)](https://travis-ci.org/StreetStrider/def-prop) [![Coveralls](https://img.shields.io/coveralls/StreetStrider/def-prop.svg?style=flat-square)](https://coveralls.io/github/StreetStrider/def-prop) [![MIT licensed](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](license) [![npm: def-prop](http://img.shields.io/badge/npm-def--prop-CB3837.svg?style=flat-square)](https://www.npmjs.org/package/def-prop)

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
MIT. © Strider, 2016 — 2017.
