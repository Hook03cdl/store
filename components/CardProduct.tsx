'use client';

import { Rating } from '@mui/material';
import Image from 'next/image';
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
			<div className="relative h-56 w-full">
				<Image
					src={image || '/assets/logo.png'}
					className="h-auto w-full aspect-square object-cover rounded-md"
					alt="Nombre"
					fill
				/>
			</div>
			<div>
				<div className="flex justify-between items-center gap-3">
					<p className="truncate text-sm">{name}</p>
					<Rating precision={0.5} value={rating} readOnly />
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
