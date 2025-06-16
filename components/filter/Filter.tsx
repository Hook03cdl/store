import { FilterProps } from '@/interface/filter';
import Accordion from '../Accordion';
import CheckBox from '../CheckBox';
import OptionFilter from './OptionFilter';
import MultiRange from '../MultiRange';

export default async function Filter({ className }: { className?: string }) {
	const res = await fetch('http://localhost:3000/api/filter');

	if (!res.ok) return null;

	const { classificationOptions, categoryOptions, minMaxPrice }: FilterProps =
		await res.json();

	return (
		<aside className={` divide-y-2 divide-stone-300 ${className}`}>
			<Accordion textButton="Clasificaciones">
				{classificationOptions.map((option, i) => (
					<OptionFilter
						filter={{ param: 'clasificacion', value: option.classification }}
						text={option.classification}
						stock={option._count.classification}
						key={i}
					/>
				))}
			</Accordion>
			<Accordion textButton="Categoria">
				{categoryOptions.map((option, i) => (
					<OptionFilter
						filter={{ param: 'categoria', value: option.category }}
						text={option.category}
						stock={option._count.category}
						key={i}
					/>
				))}
			</Accordion>
			<Accordion textButton="Precio">
				<MultiRange />
				<div className="flex items-center gap-2 py-3">
					<label className="flex items-center gap-2 p-2 px-3 rounded-md outline-1">
						<span>$</span>
						<input
							type="text"
							className="focus:outline-0 w-full"
							placeholder={String(minMaxPrice._min.price)}
						/>
					</label>
					<span>-</span>
					<label className="flex items-center gap-2 p-2 px-3 rounded-md outline-1">
						<span>$</span>
						<input
							type="text"
							className="focus:outline-0 w-full"
							placeholder={String(minMaxPrice._max.price)}
						/>
					</label>
				</div>
			</Accordion>
			<Accordion textButton="Promociones">
				<CheckBox content="50%" />
				<CheckBox content="40%" />
				<CheckBox content="30%" />
			</Accordion>
		</aside>
	);
}
