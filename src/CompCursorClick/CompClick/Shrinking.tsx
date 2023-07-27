import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion/.';

export const Shrinking: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();

	const size = interpolate(frame, [0, 20, 40], [0, 0.5, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				scale: `${size}`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
