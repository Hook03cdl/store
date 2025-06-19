'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export function useFilter() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	// Obtener todos los valores actuales
	const filters = (param: string) => {
		return searchParams.get(param);
	};

	// Agregar un nuevo filtro
	const addFilter = (param: string, value: string) => {
		const params = new URLSearchParams(searchParams);
		params.set(param, value);
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	// Quitar un filtro específico
	const removeFilter = (param: string) => {
		const params = new URLSearchParams(searchParams);
		params.delete(param);
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	// Reemplazar todos los filtros (opcional)
	const setFilter = (news: string[]) => {
		const params = new URLSearchParams();
		news.forEach((f) => params.append('filtro', f));
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return {
		filters,
		addFilter,
		removeFilter,
		setFilter,
	};
}
