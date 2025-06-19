'use client';
import { useFilter } from '@/hooks/useFilter';
import CheckBox from '../CheckBox';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function OptionFilter({
	text,
	stock,
	filter,
}: {
	text: string;
	filter: { param: string; value: string };
	stock: number;
}) {
	const searchParams = useSearchParams();
	const { addFilter, removeFilter } = useFilter();

	const [isChecked, setIsChecked] = useState<boolean>(false);

	useEffect(() => {
		const currentParam = searchParams.get(filter.param);
		setIsChecked(currentParam === filter.value);
	}, [searchParams, filter.param, filter.value]);

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.currentTarget.checked;
		setIsChecked(checked);

		if (checked) {
			addFilter(filter.param, filter.value);
		} else {
			removeFilter(filter.param);
		}
	};

	return (
		<CheckBox
			onChange={handleFilter}
			label={
				<p className="first-letter:uppercase">
					{text} <span className="text-sm text-stone-400">({stock})</span>
				</p>
			}
			checked={isChecked}
		/>
	);
}
