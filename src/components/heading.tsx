import { cn } from '@/helpers/misc';

type HeadingProps = {
	children: React.ReactNode;
	level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
};

function Heading({ children, level, className }: HeadingProps) {
	const HeadingTag = level;
	return (
		<HeadingTag
			className={cn(
				'font-semibold text-primary text-2xl/10 md:text-4xl/9 -tracking-wide',
				className
			)}
		>
			{children}
		</HeadingTag>
	);
}

export { Heading };
