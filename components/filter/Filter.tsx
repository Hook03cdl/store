import { FilterProps } from '@/interface/filter';
import Accordion from '../Accordion';
import OptionFilter from './OptionFilter';
import MultiRange from '../RangePrice';

export default async function Filter({ className }: { className?: string }) {
	const res = await fetch('http://localhost:3000/api/filter');

	if (!res.ok) return <></>;

	const {
		classificationOptions,
		categoryOptions,
		minMaxPrice,
		discounts,
	}: FilterProps = await res.json();

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
				<MultiRange min={minMaxPrice._min.price} max={minMaxPrice._max.price} />
			</Accordion>
			<Accordion textButton="Promociones">
				{discounts.map((d) => (
					<OptionFilter
						text={`${d.discount}%`}
						filter={{
							param: 'descuento',
							value: String(d.discount),
						}}
						stock={d?._count?.discount ?? 0}
						key={`${d.discount}-${d._count.discount} `}
					/>
				))}
			</Accordion>
		</aside>
	);
}
