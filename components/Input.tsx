import { Search } from 'lucide-react';

export default function Input() {
	return (
		<div className="flex gap-3 outline-2 px-3 p-2 rounded-md outline-jungle">
			<Search />
			<input type="text" className="focus:outline-0 h-full min-w-60" />
		</div>
	);
}
