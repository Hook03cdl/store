'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ViewMoreButton({ total }: { total: number }) {
	const [isShow, setIsShow] = useState(true);
	const route = useRouter();
	const pathname = usePathname();
	const searchparams = useSearchParams();
	useEffect(() => {
		const param = new URLSearchParams(searchparams);
		const page = Number(param?.get('p'));
		if (page * 6 >= total) {
			setIsShow(false);
			return;
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = () => {
		const param = new URLSearchParams(searchparams);
		const page = Number(param?.get('p')) || 1;

		if (page * 6 >= total) {
			setIsShow(false);
			return;
		}

		param.set('p', String(page + 1));
		route.replace(`${pathname}?${param}`, { scroll: false });
	};

	if (!isShow) {
		return null;
	}
	return (
		<div className="grid place-items-center py-20">
			<button
				onClick={handleClick}
				className="bg-sandal justify-self-center text-humo font-semibold px-10 py-2"
			>
				Ver mas
			</button>
		</div>
	);
}
