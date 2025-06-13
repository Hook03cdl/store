import CardProduct from '@/components/CardProduct';
import Filter from '@/components/Filter';
import Input from '@/components/Input';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<section>
			<div className="relative h-64 w-full bg-amber-300">
				<Image
					src="/assets/hero.jpeg"
					alt="Hero"
					fill
					sizes="100v"
					className="absolute h-full w-full"
				/>
			</div>
			<section className="px-20 py-10 space-y-10">
				<div className="flex justify-between items-center">
					<div>
						<div className="flex gap-2 items-center text-sm text-stone-400">
							<Link href={'/'}>Home</Link>
							<ChevronRight size={16} />
							<Link href={'/'}>En stock</Link>
						</div>
						<h1 className="text-3xl">Catalogo Digital en stock</h1>
					</div>
					<Input />
				</div>
				<div className="flex gap-10">
					<div className="flex-1 flex flex-wrap justify-center gap-6 ">
						{Array.from({ length: 20 }, (_, i) => (
							<CardProduct key={i} />
						))}
					</div>
					<Filter className="w-60" />
				</div>
			</section>
		</section>
	);
}
