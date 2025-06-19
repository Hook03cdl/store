import { Products } from '@prisma/client';

export async function getProducts(
	params?: Record<string, string[] | string>
): Promise<{ products: Products[]; total: number } | undefined> {
	let url = 'http://localhost:3000/api/products';

	if (params) {
		const searchParams = new URLSearchParams();
		for (const key in params) {
			const value = params[key];
			if (Array.isArray(value)) {
				value.forEach((v) => searchParams.append(key, v));
			} else {
				searchParams.append(key, value);
			}
		}
		url += `?${searchParams.toString()}`;
	}

	const res = await fetch(url);
	if (!res.ok) throw new Error('A ocurrido un problema con el servidor');
	const productos = await res.json();

	if (!productos || productos.length === 0) return undefined;
	return productos;
}
