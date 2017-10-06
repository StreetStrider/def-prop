
declare module 'def-prop'
{
	type Modifier = ':enum' | ':write' | ':config'

	;

	interface DefProp
	{
		<T extends Object>(object: T, key: string, descriptor: PropertyDescriptor): T,

		val (value: any, ...mods: Modifier[]): PropertyDescriptor,

		getset (getter: Function, ...mods: Modifier[]): PropertyDescriptor,
		getset (getter: Function, setter?: Function, ...mods: Modifier[]): PropertyDescriptor,
	}

	var defprop: DefProp

	export default defprop
}
