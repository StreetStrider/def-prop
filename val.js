
var extract = require('./lib/extract')

module.exports = function val (value)
{
	var descr = extract(arguments, 1)

	descr.value = value

	return descr
}
