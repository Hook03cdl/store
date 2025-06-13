import React from 'react';

export default function CheckBox({
	content,
	className,
}: {
	className?: string;
	content: React.ReactNode;
}) {
	return (
		<label className={`flex gap-2 items-center cursor-pointer ${className}`}>
			<input type="checkbox" className="accent-sandal" />
			{content}
		</label>
	);
}
