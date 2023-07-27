import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion/.';

export const MovingOutside: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();

	const Y = interpolate(frame, [0, 40], [0, 40], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				transform: `translateY(${Y}px) `,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
