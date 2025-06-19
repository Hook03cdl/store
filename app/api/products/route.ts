import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const filter: any = {};

	const categoria = searchParams.get('categoria');
	if (categoria) filter.category = categoria;

	const clasificacion = searchParams.get('clasificacion');
	if (clasificacion) filter.classification = clasificacion;

	const descuento = searchParams.get('descuento');
	if (descuento) filter.discount = Number(descuento);

	const precio = searchParams.get('precio');
	if (precio) filter.price = { lte: Number(precio) };
	const page = Number(searchParams.get('p')) + 1 || 1;
	const take = page * 6;

	try {
		const allProducts = await prisma.products.findMany({
			where: filter,
			take: take,
		});
		const total = await prisma.products.count({ where: filter });

		return NextResponse.json({ products: allProducts, total }, { status: 200 });
	} catch {
		return NextResponse.json(
			{ error: 'Error interno del servidor' },
			{ status: 500 }
		);
	}
}
