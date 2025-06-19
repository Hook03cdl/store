export interface FilterProps {
	categoryOptions: CategoryOption[];
	classificationOptions: ClassificationOption[];
	minMaxPrice: MinMaxPrice;
	discounts: Discount[];
}

export interface CategoryOption {
	_count: CategoryOptionCount;
	category: string;
}

export interface CategoryOptionCount {
	category: number;
}

export interface ClassificationOption {
	_count: ClassificationOptionCount;
	classification: string;
}

export interface ClassificationOptionCount {
	classification: number;
}

export interface Discount {
	_count: DiscountCount;
	discount: number;
}

export interface DiscountCount {
	discount: number;
}

export interface MinMaxPrice {
	_count: CategoryOptionCount;
	_min: {
		price: number;
	};
	_max: {
		price: number;
	};
}
