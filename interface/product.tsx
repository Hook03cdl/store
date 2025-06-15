export interface ProductsProps {
	pid: string;
	sku: string;
	name: string;
	stock: number;
	category: string;
	classification: string;
	rating: number;
	image: string;
	discount: null | string;
	tags: string;
	age_range: string;
	material: string;
	price: number;
	createAt: Date;
	updateAt: Date;
}
