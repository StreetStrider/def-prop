
var getd = Object.getOwnPropertyDescriptor

var expect = require('chai').expect

describe('def', () =>
{
	var def = require('../../')

	describe('works as Object.defineProperty', () =>
	{
		it('#1', () =>
		{
			var obj = {}

			def(obj, 'key', { value: 1 })

			expect(getd(obj, 'key')).deep.equal(
			{
				value: 1,

				configurable: false,
				writable: false,
				enumerable: false
			})

			expect(obj.key).equal(1)
		})

		it('#2', () =>
		{
			var obj = {}

			var getter = () => 1

			def(obj, 'key', { get: getter })

			expect(getd(obj, 'key')).deep.equal(
			{
				get: getter,
				set: undefined,

				configurable: false,
				enumerable: false
			})

			expect(obj.key).equal(1)
			expect(obj.key).equal(1)
			obj.key = 2
			expect(obj.key).equal(1)
		})

		it('#3', () =>
		{
			var obj = {}

			def(obj, 'key', { value: 1, configurable: true })
			def(obj, 'key', { value: 2, configurable: true })

			expect(getd(obj, 'key')).deep.equal(
			{
				value: 2,

				configurable: true,
				writable: false,
				enumerable: false
			})

			expect(obj.key).equal(2)
		})
	})

	describe('val', () =>
	{
		it('exists', () =>
		{
			expect(def.val).a('function')
			expect(def.val.name).equal('val')
			expect(def.val.length).equal(1)
		})
	})

	describe('getset', () =>
	{
		it('exists', () =>
		{
			expect(def.getset).a('function')
			expect(def.getset.name).equal('getset')
			expect(def.getset.length).equal(2)
		})
	})
})
