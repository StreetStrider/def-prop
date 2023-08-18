
declare namespace def
{

export type Modifier = (':enum' | ':write' | ':config')

}

declare function def <T extends object>(object: T, key: string, descriptor: PropertyDescriptor): T

export = def
