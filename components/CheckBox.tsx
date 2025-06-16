'use client';

export default function CheckBox({
	content,
	className,
	onClick,
}: {
	content: React.ReactNode;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}) {
	return (
		<label className={`flex gap-2 items-center cursor-pointer ${className}`}>
			<input type="checkbox" className="accent-sandal" onClick={onClick} />
			{content}
		</label>
	);
}
