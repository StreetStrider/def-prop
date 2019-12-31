
import { Modifier } from './'

export default function getset (getter: Function, ...mods: Modifier[]): PropertyDescriptor

;

export default function getset (getter: Function, setter?: Function, ...mods: Modifier[]): PropertyDescriptor
