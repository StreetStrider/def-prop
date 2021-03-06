/* eslint-disable default-case */
/* eslint complexity: [ 2, 7 ] */

module.exports = function (seq, start)
{
	seq   || (seq   = [])
	start || (start = 0)

	var descr = {}

	for (var i = start; i < seq.length; i++)
	{
		var item = seq[i]

		switch (item)
		{
		case ':enum':
			descr.enumerable = true
			break

		case ':write':
			descr.writable = true
			break

		case ':config':
			descr.configurable = true
			break
		}
	}

	return descr
}
