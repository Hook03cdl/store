import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function CardProduct() {
	return (
		<div className="bg-stone-100 shadow-xl space-y-3 p-3 rounded-lg w-fit">
			<div className="relative size-56 rounded-md overflow-hidden">
				<Image
					src="/assets/logo.png"
					className="absolute aspect-square object-contain"
					alt="Nombre"
					fill
				/>
			</div>
			<div>
				<div className="flex justify-between items-center gap-3">
					<p>Nombre</p>
					<div className="flex gap-1">
						{Array.from({ length: 5 }, (_, i) => (
							<Star key={i} size={12} className="fill-amber-500 stroke-0" />
						))}
					</div>
				</div>
				<p className="text-xs">Pelele</p>
				<p className="text-lg font-semibold">$999</p>
			</div>
			<button className="w-full text-sandal outline-2 outline-sandal rounded-xs p-2">
				COMPRAR
			</button>
		</div>
	);
}
