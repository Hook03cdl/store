import { Search } from 'lucide-react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function InputSearch({ ...props }: InputProps) {
	
	return (
		<div className="flex gap-3 outline-2 px-3 p-2 rounded-md outline-jungle">
			<Search />
			<input
				type="text"
				className="focus:outline-0 h-full w-full max-w-72"
				{...props}
			/>
		</div>
	);
}
