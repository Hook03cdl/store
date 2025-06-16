export default function generateSku(
	name: string,
	category: string,
	classification: string,
	material: string,
	age_range: string,
	index: number
) {
	return `${name.slice(0, 3)}-${category
		.slice(0, 3)
		.toUpperCase()}-${classification.slice(0, 3).toUpperCase()}-${material
		.slice(0, 3)
		.toUpperCase()}-${age_range}-${index.toString().padStart(3, '0')}`;
}
