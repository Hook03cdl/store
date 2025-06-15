'use client';

import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LISTNAV = [
	{ href: '/', content: 'HOME' },
	{ href: '/', content: 'Sobre cucufate' },
	{ href: '/', content: 'En stock' },
	{ href: '/', content: 'Telas' },
	{ href: '/', content: 'Ideas de prenda' },
	{ href: '/', content: 'Arma tu prenda' },
	{ href: '/', content: 'Contacto' },
];

export default function Header() {
	const [isOpen, setIsopen] = useState(false);
	return (
		<>
			<p className="text-center text-xs py-2 bg-jungle uppercase">
				Ropa 100% hecha a mano
			</p>
			<header>
				<div className="grid grid-cols-3 place-items-center py-5 px-5 lg:px-20">
					<div className="invisible order-2 lg:order-1"></div>
					<Image
						src={'/assets/logo.png'}
						alt={'CUCUFATE'}
						width={200}
						height={100}
						className="aspect-video object-contain order-1 lg:order-2"
					/>
					<div className="flex gap-5 justify-self-end order-3">
						<button>
							<Search />
						</button>
						<button>
							<ShoppingBag />
						</button>
					</div>
				</div>
			</header>
			<nav className="sticky top-0 z-50 bg-humo px-5 py-3 lg:py-5 grid lg:place-items-center">
				<button onClick={() => setIsopen(!isOpen)} className="lg:hidden">
					{isOpen ? <X size={36} /> : <Menu size={36} />}
				</button>
				<ListNav open={isOpen} />
			</nav>
		</>
	);
}

export function ListNav({ open }: { open?: boolean }) {
	return (
		<>
			<ul
				className={`fixed lg:hidden top-0 p-10 space-y-5 right-0 h-full bg-humo ${
					open ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-500`}
			>
				{LISTNAV.map((link, i) => (
					<li key={i} className="px-5 uppercase">
						<Link href={link.href}>{link.content}</Link>
					</li>
				))}
			</ul>
			<ul className={`hidden lg:flex divide-x-2  `}>
				{LISTNAV.map((link, i) => (
					<li key={i} className="uppercase px-1">
						<Link
							href={link.href}
							className="hover:bg-stone-200 rounded-md px-5 py-2"
						>
							{link.content}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
