import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
	try {
		const categoryOptions = await prisma.products.groupBy({
			by: ['category'],
			_count: { category: true },
		});

		const classificationOptions = await prisma.products.groupBy({
			by: ['classification'],
			_count: { classification: true },
		});
		const minMaxPrice = await prisma.products.aggregate({
			_count: { category: true },
			_min: { price: true },
			_max: { price: true },
		});
		const discounts = await prisma.products.groupBy({
			by: 'discount',
			orderBy: { discount: 'desc' },
			_count: { discount: true },
			where: { NOT: { discount: null } },
		});

		return NextResponse.json(
			{ categoryOptions, classificationOptions, minMaxPrice, discounts },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);

		return NextResponse.json(
			{ error: 'A ocurrido un error con el servidor' },
			{ status: 500 }
		);
	}
}
