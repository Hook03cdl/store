/* eslint-disable @next/next/no-img-element */
import CardProduct from '@/components/CardProduct';
import Filter, { ButtonFilter } from '@/components/Filter';
import Input from '@/components/Input';
import { Products } from '@prisma/client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
	const products: Products[] = await fetch(
		'http://localhost:3000/api/products'
	).then((res) => res.json());
	return (
		<section>
			<div className="w-full">
				<img
					src="/assets/hero.jpeg"
					alt="Hero"
					sizes="100v"
					className="h-auto w-full object-contain"
				/>
			</div>
			<section className="p-5 lg:py-10 lg:px-20 space-y-10">
				<div className="flex justify-between gap-10 items-center flex-wrap">
					<div>
						<div className="flex gap-2 items-center text-sm text-stone-400">
							<Link href={'/'}>Home</Link>
							<ChevronRight size={16} />
							<Link href={'/'}>En stock</Link>
						</div>
						<h1 className="text-3xl">Catalogo Digital en stock</h1>
					</div>
					<div className="flex gap-5 ">
						<Input placeholder="Buscar" />
						<ButtonFilter />
					</div>
				</div>
				<div className="flex gap-10">
					<div className="flex-1 space-y-5">
						<div className="flex flex-wrap justify-center gap-6 ">
							{products.map((p) => (
								<CardProduct
									id={p.pid}
									key={p.pid}
									image={p.image}
									name={p.name}
									price={p.price}
									category={p.category}
									rating={p.rating}
								/>
							))}
						</div>
						<div className="grid place-items-center py-20">
							<button className="bg-sandal justify-self-center text-humo font-semibold px-10 py-2">
								Ver mas
							</button>
						</div>
					</div>
					<Filter className="hidden lg:block w-72" />
				</div>
			</section>
		</section>
	);
}
