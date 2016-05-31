
var defd = Object.defineProperty

module.exports = function def (object, key, descriptor)
{
	return defd(object, key, descriptor)
}
