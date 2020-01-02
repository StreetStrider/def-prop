
export type Modifier = (':enum' | ':write' | ':config')

export default function <T extends object>(object: T, key: string, descriptor: PropertyDescriptor): T
