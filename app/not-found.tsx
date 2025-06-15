import { ArrowUpLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="grid place-content-center h-screen w-full">
			<h1 className="text-9xl">404</h1>
			<p>No se a logrado dirigir a esta ruta</p>
			<Link
				href={'/'}
				className="flex justify-center items-center gap-3 text-humo text-xl font-semibold p-2 bg-sandal hover:bg-sandal/90 mt-10"
			>
				<span>
					<ArrowUpLeftIcon />
				</span>
				Regresar
			</Link>
		</div>
	);
}
