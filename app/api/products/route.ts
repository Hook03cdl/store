/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const filter: any = {};

	if (searchParams.get('category')) {
		filter.category = searchParams.get('category');
	}
	if (searchParams.get('classification')) {
		filter.classification = searchParams.get('classification');
	}
	if (searchParams.get('descuento')) {
		filter.discount = { gte: searchParams.get('descuento') };
	}
	if (searchParams.get('precio')) {
		filter.price = { lte: searchParams.get('precio') };
	}

	try {
		const allProducts = await prisma.products.findMany({
			where: filter,
		});

		return NextResponse.json([...allProducts], { status: 200 });
	} catch (error) {
		console.log(error);

		return NextResponse.json(
			{
				error:
					'A ocurrido un problema con el servidor, vuelvalo intente mas tarde',
			},
			{
				status: 500,
			}
		);
	}
}
