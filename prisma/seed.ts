import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const productData: Prisma.ProductsCreateInput[] = [
	// Ejemplo de datos para el modelo Products

	{
		sku: 'CBP-NIN-ALG-001',
		name: 'Cubrepañal y camisa',
		stock: 56,
		category: 'cubrepañal',
		classification: 'niño',
		rating: 4.5,
		image:
			'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/57.jpg',
		discount: null,
		tags: 'cubrepañal,conjunto,bebé,niño,algodón',
		age_range: '3-4',
		material: 'Algodón orgánico',
		price: 1599,
	},
	{
		sku: 'VST-NIN-LIN-002',
		name: 'Vestido floral verano',
		stock: 34,
		category: 'vestido',
		classification: 'niña',
		rating: 4.8,
		image:
			'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/12.jpg',
		discount: 'FORTY',
		tags: 'vestido,floral,verano,niña,lino',
		age_range: '2-3',
		material: 'Lino',
		price: 1790,
	},
	{
		sku: 'PJM-NIN-POL-003',
		name: 'Pijama polar invierno',
		stock: 22,
		category: 'pelele',
		classification: 'niño',
		rating: 4.2,
		image:
			'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg',
		discount: null,
		tags: 'pijama,polar,invierno,niño',
		age_range: '4-5',
		material: 'Polar',
		price: 1290,
	},
	{
		sku: 'CDP-NIN-POL-004',
		name: 'Conjunto deportivo niño',
		stock: 40,
		category: 'complemento',
		classification: 'niño',
		rating: 4.7,
		image:
			'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/33.jpg',
		discount: 'THIRTY',
		tags: 'conjunto,deportivo,niño,políester',
		age_range: '5-6',
		material: 'Poliéster',
		price: 1990,
	},
	{
		sku: 'RNT-NIN-ALG-005',
		name: 'Ranita básica algodón',
		stock: 60,
		category: 'ranita',
		classification: 'niño',
		rating: 4.3,
		image:
			'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/11.jpg',
		discount: null,
		tags: 'ranita,algodón,niño,básico',
		age_range: '1-2',
		material: 'Algodón',
		price: 990,
	},
];

export async function main() {
	try {
		productData.map(async (p) => {
			await prisma.products.create({ data: p });
		});
		console.log('success!!');
		return;
	} catch (error) {
		console.log(error);
		return;
	}
}

main();
