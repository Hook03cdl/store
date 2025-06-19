'use client';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: React.ReactNode;
	className?: string;
}

export default function CheckBox({
	label,
	className,
	...props
}: CheckBoxProps) {
	return (
		<label className={`flex gap-2 items-center cursor-pointer ${className}`}>
			<input type="checkbox" className="accent-sandal" {...props} />
			{label}
		</label>
	);
}
