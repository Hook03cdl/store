'use client';
import { useFilter } from '@/lib/useFilter';
import CheckBox from '../CheckBox';

export default function OptionFilter({
	text,
	stock,
	filter,
}: {
	text: string;
	filter: { param: string; value: string };
	stock: number;
}) {
	const { addFilter } = useFilter();

	const handleFilter = () => {
		addFilter(filter.param, filter.value);
	};

	return (
		<CheckBox
			onClick={handleFilter}
			content={
				<p className="first-letter:uppercase">
					{text} <span className="text-sm text-stone-400">({stock})</span>
				</p>
			}
		/>
	);
}
