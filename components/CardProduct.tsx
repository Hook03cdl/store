'use client';

/* eslint-disable @next/next/no-img-element */
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CardProductsProps {
	image: string;
	name: string;
	id: string;
	price: number;
	category: string;
	rating: number;
}

export default function CardProduct({
	image,
	name,
	id,
	price,
	category,
	rating,
}: CardProductsProps) {
	const route = useRouter();
	return (
		<div className="bg-stone-100 shadow-xl space-y-3 p-3 rounded-lg w-64">
			<img
				src={image || '/assets/logo.png'}
				className="h-auto w-full aspect-square object-contain rounded-md"
				alt="Nombre"
			/>
			<div>
				<div className="flex justify-between items-center gap-3">
					<p className="truncate text-sm">{name}</p>
					<div className="flex gap-1">
						{Array.from({ length: 5 }, (_s, i) =>
							i < rating ? (
								<Star key={i} size={12} className="fill-amber-500 stroke-0" />
							) : (
								<Star key={i} size={12} className="fill-stone-500 stroke-0" />
							)
						)}
					</div>
				</div>
				<p className="text-xs">{category}</p>
				<p className="text-lg font-semibold">${price}</p>
			</div>
			<button
				onClick={() => route.push(`/product/${id}`)}
				className="relative w-full text-sandal outline-2 outline-sandal p-2 mb-3 hover:text-humo z-10
				after:absolute after:bottom-0 after:left-0 after:w-full after:bg-sandal after:h-0 hover:after:h-full after:transition-[height] after:duration-300 after:-z-10
				"
			>
				COMPRAR
			</button>
		</div>
	);
}
