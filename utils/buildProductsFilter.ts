// utils/productFilters.ts
import { Prisma } from '@prisma/client';

export const buildProductFilters = (filters: {
	category?: string;
	classification?: string;
	minPrice?: number;
	maxPrice?: number;
	minRating?: number;
	discount?: string;
	inStock?: boolean;
	tagContains?: string;
	material?: string;
}): Prisma.ProductsWhereInput => {
	const where: Prisma.ProductsWhereInput = {};

	if (filters.category) {
		where.category = filters.category as any;
	}

	if (filters.classification) {
		where.classification = filters.classification as any;
	}

	if (filters.discount) {
		where.discount = filters.discount as any;
	}

	if (filters.minRating !== undefined) {
		where.rating = { gte: filters.minRating };
	}

	if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
		where.price = {};
		if (filters.minPrice !== undefined) where.price.gte = filters.minPrice;
		if (filters.maxPrice !== undefined) where.price.lte = filters.maxPrice;
	}

	if (filters.inStock !== undefined) {
		where.stock = filters.inStock ? { gt: 0 } : 0;
	}

	if (filters.tagContains) {
		where.tags = { contains: filters.tagContains };
	}

	if (filters.material) {
		where.material = { contains: filters.material };
	}

	return where;
};
