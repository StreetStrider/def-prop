/* eslint-disable max-len */

var expect = require('chai').expect

describe('extract', () =>
{
	var extract = require('../../extract')

	it('works', () =>
	{
		expect(extract()).deep.equal({})
		expect(extract([ ':enum', ':write' ])).deep.equal({ enumerable: true, writable: true })
		expect(extract([ ':config' ])).deep.equal({ configurable: true })
		expect(extract([ ':enum', ':write' ], 1)).deep.equal({ writable: true })
	})
})
