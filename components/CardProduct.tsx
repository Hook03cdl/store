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
		<div className="bg-stone-100 shadow-xl space-y-3 p-3 rounded-lg w-fit">
			<img
				src={image || '/assets/logo.png'}
				className="size-56 aspect-square object-contain rounded-md"
				alt="Nombre"
			/>
			<div>
				<div className="flex justify-between items-center gap-3">
					<p>{name}</p>
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
				className="w-full text-sandal outline-2 outline-sandal rounded-xs p-2"
			>
				COMPRAR
			</button>
		</div>
	);
}
