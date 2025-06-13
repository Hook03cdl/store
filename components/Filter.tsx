import React from 'react';
import Accordion from './Accordion';
import CheckBox from './CheckBox';

export default function Filter({ className }: { className?: string }) {
	return (
		<aside className={` divide-y-2 divide-stone-300 ${className}`}>
			<Accordion textButton="Clasificaciones">
				<CheckBox
					content={
						<p>
							Niño <span className="text-sm text-stone-400">(12)</span>
						</p>
					}
				/>
				<CheckBox
					content={
						<p>
							Niña <span className="text-sm text-stone-400">(12)</span>
						</p>
					}
				/>
			</Accordion>
			<Accordion textButton="Categorías">
				<CheckBox content="Pelele" />
				<CheckBox content="Vestido" />
				<CheckBox content="Camisa" />
				<CheckBox content="Short" />
				<CheckBox content="Cubrepañal" />
				<CheckBox content="Peto" />
				<CheckBox content="Ranita" />
				<CheckBox content="Complemento" />
			</Accordion>
			<Accordion textButton="Precio">
				<input type="range" name="" id="" />
				<div className="flex gap-2 py-3">
					<label className="flex items-center gap-2 p-2 px-3 rounded-md outline-1">
						<span>$</span>
						<input type="text" className="focus:outline-0 w-full" />
					</label>
					<span>-</span>
					<label className="flex items-center gap-2 p-1 px-3 rounded-md outline-1">
						<span>$</span>
						<input type="text" className="focus:outline-0 w-full" />
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
