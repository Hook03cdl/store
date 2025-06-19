'use client';
import { useFilter } from '@/hooks/useFilter';
import { styled } from '@mui/material';
import Slider from '@mui/material/Slider';
import { useDebounce } from '@uidotdev/usehooks';
import { useState, useEffect } from 'react';

const CustomSlider = styled(Slider)(() => ({
	color: '#aa8c69',
}));
const minDistance = 200;

export default function MultiRange({ min, max }: { min: number; max: number }) {
	const [valueRange, setValueRange] = useState<number[]>([min, max]);
	const { addFilter, removeFilter } = useFilter();
	const debounceSearch = useDebounce(valueRange, 300);

	// Actualiza los filtros solo cuando debounceSearch cambia
	useEffect(() => {
		const [newMin, newMax] = debounceSearch;

		if (newMin === min) {
			removeFilter('min');
		} else {
			addFilter('min', String(newMin));
		}
		if (newMax === max) {
			removeFilter('max');
		} else {
			addFilter('max', String(newMax));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounceSearch, min, max]);

	const handleSliderFilter = (
		_event: Event,
		value: number | number[],
		activeThumb: number
	) => {
		const newValue = Array.isArray(value) ? value : [value, value];
		let [newMin, newMax] = newValue;

		if (newMax - newMin < minDistance) {
			if (activeThumb === 0) {
				newMin = newMax - minDistance;
			} else {
				newMax = newMin + minDistance;
			}
		}

		setValueRange([newMin, newMax]);
	};

	const handleFilter = (
		e: React.ChangeEvent<HTMLInputElement>,
		param: string
	) => {
		const value = Number(e.currentTarget.value);
		const [currentMin, currentMax] = valueRange;
		if (param === 'min') {
			const newMin = Math.min(value, currentMax - minDistance);
			setValueRange([newMin, currentMax]);
		} else {
			const newMax = Math.max(value, currentMin + minDistance);
			setValueRange([currentMin, newMax]);
		}
	};

	return (
		<div>
			<CustomSlider
				getAriaLabel={() => 'Temperature range'}
				value={valueRange}
				valueLabelDisplay="auto"
				onChange={handleSliderFilter}
				min={min}
				max={max}
			/>
			<div className="flex gap-3">
				<label className="flex items-center gap-2 p-2 px-3 rounded-md outline-1">
					<span>$</span>
					<input
						type="number"
						min={min}
						max={valueRange[1] - minDistance}
						className="focus:outline-0 w-full appearance-none"
						value={valueRange[0]}
						onChange={(e) => handleFilter(e, 'min')}
					/>
				</label>
				<span>-</span>
				<label className="flex items-center gap-2 p-2 px-3 rounded-md outline-1">
					<span>$</span>
					<input
						type="number"
						min={valueRange[0] + minDistance}
						max={max}
						className="focus:outline-0 w-full appearance-none"
						value={valueRange[1]}
						onChange={(e) => handleFilter(e, 'max')}
					/>
				</label>
			</div>
		</div>
	);
}
