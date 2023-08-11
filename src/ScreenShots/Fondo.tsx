import {
	AbsoluteFill,
	Img,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion/.';

export const Fondo: React.FC = () => {
	const frame = useCurrentFrame();

	const opacidad1 = interpolate(frame, [0, 20, 40], [0, 0.3, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacidad2 = interpolate(frame, [40, 60, 80], [0, 0.3, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<div
				style={{
					transform: 'translateX(80px) translateY(200px)',
					position: 'absolute',
					height: 500,
					width: 45,
					backgroundColor: 'red',
					opacity: `${opacidad1}`,
				}}
			/>

			<div
				style={{
					transform: 'translateX(80px) translateY(200px)',
					position: 'absolute',
          height: 500,
					width: 45,
					backgroundColor: 'red',
					opacity: `${opacidad2}`,
				}}
			/>
		</div>
	);
};
