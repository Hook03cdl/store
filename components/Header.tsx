import { Search, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<>
			<p className="text-center text-xs py-2 bg-jungle uppercase">
				Ropa 100% hecha a mano
			</p>
			<header>
				<div className="grid grid-cols-3 place-items-center py-5 px-20">
					<div className="invisible"></div>
					<Image
						src={'/assets/logo.png'}
						alt={'CUCUFATE'}
						width={200}
						height={100}
						className="aspect-video object-contain"
					/>
					<div className="flex gap-5 justify-self-end">
						<button>
							<Search />
						</button>
						<button>
							<ShoppingBag />
						</button>
					</div>
				</div>
			</header>
			<nav className="sticky top-0 z-50 bg-humo py-5 grid place-items-center">
				<ul className="flex divide-x-2 *:px-5">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">Sobre cucufate</Link>
					</li>
					<li>
						<Link href="/">En stock</Link>
					</li>
					<li>
						<Link href="/">Telas</Link>
					</li>
					<li>
						<Link href="/">Ideas de prenda</Link>
					</li>
					<li>
						<Link href="/">Arma tu prenda</Link>
					</li>
					<li>
						<Link href="/">Contacto</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
