
var extract = require('./lib/extract')

module.exports = function getset (getter, setter)
{
	var descr = extract(arguments, 1)

	descr.get = getter

	if (typeof setter === 'function')
	{
		descr.set = setter
	}

	return descr
}
