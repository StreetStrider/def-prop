
declare module 'def-prop'
{
	type Modifier = ':enum' | ':write' | ':config'

	;

	interface DefProp
	{
		(object: Object, key: string, descriptor: PropertyDescriptor): Object,

		val (value: any, ...mods: Modifier[]): PropertyDescriptor,

		getset (getter: Function, ...mods: Modifier[]): PropertyDescriptor,
		getset (getter: Function, setter?: Function, ...mods: Modifier[]): PropertyDescriptor,
	}

	var defprop: DefProp

	export default defprop
}
