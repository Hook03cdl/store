'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export function useFilter() {
	const searchParams = useSearchParams();
	const router = useRouter();

	// Obtener todos los valores actuales
	const filtros = searchParams.getAll('filtro');

	// Agregar un nuevo filtro
	const addFilter = (param: string, nuevo: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.append(param, nuevo);
		router.push(`?${params.toString()}`);
	};

	// Quitar un filtro específico
	const removeFilter = (valor: string) => {
		const params = new URLSearchParams();
		filtros
			.filter((f) => f !== valor)
			.forEach((f) => params.append('filtro', f));
		router.push(`?${params.toString()}`);
	};

	// Reemplazar todos los filtros (opcional)
	const setFilter = (nuevos: string[]) => {
		const params = new URLSearchParams();
		nuevos.forEach((f) => params.append('filtro', f));
		router.push(`?${params.toString()}`);
	};

	return {
		filtros,
		addFilter,
		removeFilter,
		setFilter,
	};
}
