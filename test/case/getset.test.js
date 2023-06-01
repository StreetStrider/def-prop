
var getd = Object.getOwnPropertyDescriptor

var expect = require('chai').expect

describe('getset', () =>
{
	var def = require('../../def')
	var getset = require('../../getset')

	it('getset(getter)', () =>
	{
		var obj = {}

		var getter = () => 5

		def(obj, 'key', getset(getter))

		expect(getd(obj, 'key')).deep.equal(
		{
			get: getter,
			set: undefined,

			configurable: false,
			enumerable: false
		})

		expect(obj.key).equal(5)
	})

	it('getset(getter, ...flags)', () =>
	{
		var obj = {}

		var getter = () => 7

		def(obj, 'key', getset(getter, ':enum'))

		expect(getd(obj, 'key')).deep.equal(
		{
			get: getter,
			set: undefined,

			configurable: false,
			enumerable: true
		})

		expect(obj.key).equal(7)
	})

	it('getset(getter, setter)', () =>
	{
		var obj = {}

		var getter = () => 7

		var setter = function (v) { this._hidden = v }

		def(obj, 'key', getset(getter, setter))

		expect(getd(obj, 'key')).deep.equal(
		{
			get: getter,
			set: setter,

			configurable: false,
			enumerable: false
		})

		expect(obj.key).equal(7)

		obj.key = 11

		expect(obj.key).equal(7)
		expect(obj._hidden).equal(11)
	})

	it('getset(getter, setter, ...flags)', () =>
	{
		var obj = {}

		var getter = () => 7

		var setter = function (v) { this._hidden = v }

		def(obj, 'key', getset(getter, setter, ':enum', ':config'))

		expect(getd(obj, 'key')).deep.equal(
		{
			get: getter,
			set: setter,

			configurable: true,
			enumerable: true
		})

		expect(obj.key).equal(7)

		obj.key = 11

		expect(obj.key).equal(7)
		expect(obj._hidden).equal(11)
	})
})
