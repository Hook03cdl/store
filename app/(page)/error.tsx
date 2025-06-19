'use client';

import { Frown } from 'lucide-react';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<section className="grid place-items-center gap-3 py-20">
			<Frown size={128} />
			<h2 className="text-3xl md:text-5xl">
				¡Ups! Ocurrió un error inesperado.
			</h2>
			<p className="text-xl">{error.message}</p>
			<button onClick={() => reset()} className="px-10 p-2 bg-sandal text-humo">
				Recargar
			</button>
		</section>
	);
}
