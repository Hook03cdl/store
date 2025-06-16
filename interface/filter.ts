export interface FilterProps {
    categoryOptions:       CategoryOption[];
    classificationOptions: ClassificationOption[];
    minMaxPrice:           MinMaxPrice;
}

export interface CategoryOption {
    _count:   CategoryOptionCount;
    category: string;
}

export interface CategoryOptionCount {
    category: number;
}

export interface ClassificationOption {
    _count:         ClassificationOptionCount;
    classification: string;
}

export interface ClassificationOptionCount {
    classification: number;
}

export interface MinMaxPrice {
    _min: Max;
    _max: Max;
}

export interface Max {
    price: number;
}
