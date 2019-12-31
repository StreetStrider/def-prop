
export type Modifier = (':enum' | ':write' | ':config')

interface DefProp
{
	<T extends object>(object: T, key: string, descriptor: PropertyDescriptor): T,

	val (value: any, ...mods: Modifier[]): PropertyDescriptor,

	getset (getter: Function, ...mods: Modifier[]): PropertyDescriptor,
	getset (getter: Function, setter?: Function, ...mods: Modifier[]): PropertyDescriptor,
}

declare var def: DefProp

export default def
