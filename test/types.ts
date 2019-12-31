
import def from '../'
import val from '../val'
import getset from '../getset'

var x = {}

def(x, 'foo', val(15))
def(x, 'bar', getset(() => 16))
def(x, 'bar', getset(() => 16, (x: any) => void x))

// $ExpectError
def(0, 'foo', val(0))

// $ExpectError
def(x, {}, val(15))

// $ExpectError
def(x, 'x')

// $ExpectError
def(x)

def(x, 'foo', val(15, ':enum'))
def(x, 'foo', val(15, ':enum', ':write'))
// $ExpectError
def(x, 'foo', val(15, ':enum', ':write', ':foo'))

def(x, 'bar', getset(() => 16, ':enum'))
def(x, 'bar', getset(() => 16, ':enum', ':write'))
// $ExpectError
def(x, 'bar', getset(() => 16, ':enum', ':write', ':foo'))

// $ExpectError
def(x, 'bar', getset(1))
