'use client';

import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function InputSearch({ ...props }: InputProps) {
	// const [value, setValue] = useState('');
	const route = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const params = new URLSearchParams(searchParams);
		const value = e.currentTarget.value;
		if (value !== '') {
			params.set('search', value);
		} else {
			params.delete('search');
		}
		route.replace(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="flex gap-3 outline-2 px-3 p-2 rounded-md outline-jungle">
			<Search />
			<input
				type="text"
				defaultValue={searchParams.get('search')?.toString()}
				onChange={handleFilter}
				className="focus:outline-0 h-full w-full max-w-72"
				{...props}
			/>
		</div>
	);
}
