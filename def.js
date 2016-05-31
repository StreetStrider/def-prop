
var defd = Object.defineProperty

var def = module.exports = function def (object, key, descriptor)
{
	return defd(object, key, descriptor)
}

def.val = require('./val')
def.getset = require('./getset')
