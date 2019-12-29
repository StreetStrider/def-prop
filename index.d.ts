
declare module 'def-prop'
{
	export type Modifier = (':enum' | ':write' | ':config')

	interface DefProp
	{
		<T extends Object>(object: T, key: string, descriptor: PropertyDescriptor): T,

		val (value: any, ...mods: Modifier[]): PropertyDescriptor,

		getset (getter: Function, ...mods: Modifier[]): PropertyDescriptor,
		getset (getter: Function, setter?: Function, ...mods: Modifier[]): PropertyDescriptor,
	}

	export default DefProp
}

declare module 'def-prop/val'
{
	import { Modifier } from 'def-prop'

	export default function val (value: any, ...mods: Modifier[]): PropertyDescriptor
}

declare module 'def-prop/getset'
{
	import { Modifier } from 'def-prop'

	export default function getset (getter: Function, ...mods: Modifier[]): PropertyDescriptor
	;
	export default function getset (getter: Function, setter?: Function, ...mods: Modifier[]): PropertyDescriptor
}
