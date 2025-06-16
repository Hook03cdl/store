'use client';

import { FilterIcon, Filter, ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

export function MovileFilter() {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [isOpen]);

	return (
		<>
			<button className="lg:hidden mr-5" onClick={() => setIsOpen(!isOpen)}>
				<FilterIcon />
			</button>
			<div
				className={`flex flex-col gap-5 justify-between fixed top-0 right-0 h-full w-full bg-humo p-5 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-500 z-50`}
			>
				<Filter className="overflow-y-auto pb-10" />
				<div className="flex gap-2">
					<button
						className="flex gap-3 bg-sandal text-humo p-2 px-3 rounded-md"
						onClick={() => setIsOpen(false)}
					>
						<ChevronLeft />
						<span>Atras</span>
					</button>
					<button className="flex-1 outline-1 outline-sandal text-sandal p-2 rounded-md">
						Restablecer
					</button>
				</div>
			</div>
		</>
	);
}
