import {interpolate, useCurrentFrame} from 'remotion';

export const Borrador: React.FC<{
	children: React.ReactNode;
	from: number;
}> = ({children, from}) => {
	const frame = useCurrentFrame();

	const desde = from;

	const cierre1 = interpolate(frame, [desde, desde + 20], [100, 0], {
		extrapolateRight: 'clamp',
	});
	const cierre2 = interpolate(frame, [desde + 20, desde + 40], [0, 100], {
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				clipPath: `polygon(0 0, ${cierre1}% 0, ${cierre1}% 50%, 100% 50%, 100% 100%, ${cierre2}% 100%, ${cierre2}% 50%, 0 50%) `,
			}}
		>
			{children}
		</div>
	);
};
