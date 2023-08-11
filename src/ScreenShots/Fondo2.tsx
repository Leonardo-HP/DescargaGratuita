import {
	AbsoluteFill,
	Img,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion/.';

export const Fondo2: React.FC = () => {
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
					transform: 'translateX(360px) translateY(364px)',
					position: 'absolute',
					height: '35px',
					width:'170px',
					backgroundColor: 'red',
					opacity: `${opacidad1}`,
				}}
			/>

			<div
				style={{
        			transform: 'translateX(360px) translateY(364px)',
					position: 'absolute',
          height: '35px',
					width:'170px',
					backgroundColor: 'red',
					opacity: `${opacidad2}`,
				}}
			/>
		</div>
	);
};
