import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion/.';

export const MovingOutside: React.FC = () => {
	const frame = useCurrentFrame();

	const Y = interpolate(frame, [0, 20], [0, 10], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const escala = interpolate(frame, [0, 20], [0.5, 2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${escala})`,
			}}
		>
			<AbsoluteFill
				style={{
					transform: `translateY(${Y}px)`,
				}}
			>
				<AbsoluteFill>
					<div
						style={{
							height: 14,
							width: 14,
							borderRadius: 14 / 2,
							backgroundColor: '#ccc',
						}}
					/>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
