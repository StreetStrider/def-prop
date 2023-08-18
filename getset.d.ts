
import { Modifier } from './def'

declare function getset (getter: Function, ...mods: Modifier[]): PropertyDescriptor
declare function getset (getter: Function, setter?: Function, ...mods: Modifier[]): PropertyDescriptor

export = getset
