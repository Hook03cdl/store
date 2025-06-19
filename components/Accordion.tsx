'use client';

import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
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
		<div>
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
				initial={{ opacity: 0 }}
				animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}
			>
				<AnimatePresence>
					{isOpen && <div className="py-3 px-3">{children}</div>}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}
