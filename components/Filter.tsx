'use client';

import { useEffect, useState } from 'react';
import Accordion from './Accordion';
import CheckBox from './CheckBox';
import { ChevronLeft, FilterIcon } from 'lucide-react';

export default function Filter({ className }: { className?: string }) {
	return (
		<aside className={` divide-y-2 divide-stone-300 ${className}`}>
			<Accordion textButton="Clasificaciones">
				<CheckBox
					content={
						<p>
							Niño <span className="text-sm text-stone-400">(12)</span>
						</p>
					}
				/>
				<CheckBox
					content={
						<p>
							Niña <span className="text-sm text-stone-400">(12)</span>
						</p>
					}
				/>
			</Accordion>
			<Accordion textButton="Categorías">
				<CheckBox content="Pelele" />
				<CheckBox content="Vestido" />
				<CheckBox content="Camisa" />
				<CheckBox content="Short" />
				<CheckBox content="Cubrepañal" />
				<CheckBox content="Peto" />
				<CheckBox content="Ranita" />
				<CheckBox content="Complemento" />
			</Accordion>
			<Accordion textButton="Precio">
				<input type="range" name="" id="" />
				<div className="flex items-center gap-2 py-3">
					<label className="flex items-center gap-2 p-2 px-3 rounded-md outline-1">
						<span>$</span>
						<input type="text" className="focus:outline-0 w-full" />
					</label>
					<span>-</span>
					<label className="flex items-center gap-2 p-2 px-3 rounded-md outline-1">
						<span>$</span>
						<input type="text" className="focus:outline-0 w-full" />
					</label>
				</div>
			</Accordion>
			<Accordion textButton="Promociones">
				<CheckBox content="50%" />
				<CheckBox content="40%" />
				<CheckBox content="30%" />
			</Accordion>
		</aside>
	);
}

export function ButtonFilter() {
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
