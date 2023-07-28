import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion/.';

export const Shrinking: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();

	const Y = interpolate(frame, [0, 50], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${Y})`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
