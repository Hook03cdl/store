import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<div className="flex justify-center">
				<Image
					src={'/assets/logo.png'}
					alt={'CUCUFATE'}
					width={200}
					height={100}
					className="aspect-video object-contain"
				/>
			</div>
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
						<Link href="/">Sobre cucufate</Link>
						<Link href="/">En stock</Link>
						<Link href="/">Telas</Link>
						<Link href="/">Ideas de prenda</Link>
						<Link href="/">Arma tu prenda</Link>
						<Link href="/">Contacto</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
