import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion/.';

export const MovingCursor2: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();

	const Y = interpolate(frame, [0, 10], [0, 50], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translateY(${Y}px)`,
			}}
		>
			{children}
		</div>
	);
};
