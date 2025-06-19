/* eslint-disable @next/next/no-img-element */
import CardProduct from '@/components/CardProduct';
import Filter from '@/components/filter/Filter';
import InputSearch from '@/components/InputSearch';
import { MovileFilter } from '@/components/filter/MovileFilter';
import { ChevronRight, CloudAlert } from 'lucide-react';
import Link from 'next/link';
import { getProducts } from '@/lib/data/products';
import { Suspense } from 'react';
import ViewMoreButton from '@/components/ViewMoreButton';

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{
		categoria?: string;
		clasificacion?: string;
		max?: string;
		min?: string;
		descuento?: string;
		pg?: string;
	}>;
}) {
	const productsData = await getProducts(await searchParams);

	if (!productsData) {
		return (
			<section className="grid place-items-center gap-10 py-20 px-5">
				<CloudAlert size={128} />
				<p className="text-4xl text-center">No hay productos por mostrar.</p>
			</section>
		);
	}

	const { products, total } = productsData;

	return (
		<section>
			<div className="w-full">
				<img
					src="/assets/hero.jpeg"
					alt="Hero"
					sizes="100v"
					className="h-auto min-h-36 w-full object-cover object-left md:object-contain"
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
					<div className="flex gap-5">
						<InputSearch placeholder="Buscar" />
						<MovileFilter />
					</div>
				</div>
				<div className="flex gap-10">
					<div className="flex-1 space-y-5">
						<div className="flex flex-wrap justify-center gap-6 ">
							<Suspense fallback={<>Cargando</>}>
								{products &&
									products.map((p) => (
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
							</Suspense>
						</div>
						<ViewMoreButton total={total} />
					</div>
					<Filter className="hidden lg:block w-72" />
				</div>
			</section>
		</section>
	);
}
