'use client';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value: number) {
	return `${value}°C`;
}

export default function MultiRange() {
	const [value, setValue] = useState<number[]>([20, 37]);

	const handleChange = (event: Event, newValue: number[]) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: 230 }}>
			<Slider
				getAriaLabel={() => 'Temperature range'}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
			/>
		</Box>
	);
}
