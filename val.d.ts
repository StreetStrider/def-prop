
import { Modifier } from './def'

declare function val (value: any, ...mods: Modifier[]): PropertyDescriptor

export = val
