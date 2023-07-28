import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion/.';

export const MovingOutside: React.FC = () => {
	const frame = useCurrentFrame();

	const escala = interpolate(frame, [0, 45, 90], [0, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const Y = interpolate(frame, [0, 90], [0, 80], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				translate: `0 ${Y}px`,
			}}
		>
			<AbsoluteFill
				style={{
					transform: `scale(${escala})`,
				}}
			>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							height: 14,
							width: 14,
							borderRadius: 14 / 2,
							backgroundColor: 'red',
						}}
					/>
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
