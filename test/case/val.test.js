
var getd = Object.getOwnPropertyDescriptor

var expect = require('chai').expect

describe('val', () =>
{
	var def = require('../../def')
	var val = require('../../val')

	it('value', () =>
	{
		var obj = {}

		def(obj, 'key', val(5))

		expect(getd(obj, 'key')).deep.equal(
		{
			value: 5,

			configurable: false,
			writable: false,
			enumerable: false
		})

		expect(obj.key).equal(5)
	})

	it('value with modificators', () =>
	{
		var obj = {}

		def(obj, 'key', val(7, ':enum', ':config'))

		expect(getd(obj, 'key')).deep.equal(
		{
			value: 7,

			configurable: true,
			writable: false,
			enumerable: true
		})

		expect(obj.key).equal(7)
	})
})
