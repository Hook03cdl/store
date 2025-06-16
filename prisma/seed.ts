import { PrismaClient } from '@prisma/client';
import { productData } from './data';
const prisma = new PrismaClient();

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
