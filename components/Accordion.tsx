'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Accordion({
	children,
	textButton,
}: {
	children: React.ReactNode;
	textButton: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="space-y-3">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex justify-between items-center font-bold rounded-md px-3 py-2 hover:bg-stone-200"
			>
				{textButton}
				<motion.span animate={isOpen ? { rotate: 180 } : { rotate: 0 }}>
					<ChevronDown />
				</motion.span>
			</button>

			<motion.div
				initial={false}
				animate={isOpen ? { height: 'auto' } : { height: 0 }}
				transition={{ duration: 0.3, type: 'spring' }}
				className="overflow-hidden w-full h-auto px-3"
			>
				{children}
			</motion.div>
		</div>
	);
}
