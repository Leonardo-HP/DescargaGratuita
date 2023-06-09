import {Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';

export const Light: React.FC<{
	Height: number;
	Width: number;
	positionX: number;
	positionY: number;
	duracionCaja: number;
}> = ({Height, Width, positionX, positionY, duracionCaja}) => {
	const frame = useCurrentFrame();
	const altura = Height;
	const ancho = Width;
	const X = positionX;
	const Y = positionY;
	const duracion = duracionCaja;

	/* Tiempos */

	const cierre1 = interpolate(frame, [0, duracion / 4], [0, 200], {
		extrapolateRight: 'clamp',
	});

	const cierre2 = interpolate(frame, [0, duracion / 4], [-100, 100], {
		extrapolateRight: 'clamp',
	});

	const cierre3 = interpolate(
		frame,
		[duracion / 4, (duracion / 4) * 2],
		[0, 200],
		{extrapolateRight: 'clamp'}
	);

	const cierre4 = interpolate(
		frame,
		[duracion / 4, (duracion / 4) * 2],
		[-100, 100],
		{extrapolateRight: 'clamp'}
	);

	return (
		<div
			style={{
				transform: `translateX(${X}px)  translateY(${Y}px)`,
			}}
		>
			<div
				style={{
					position: `absolute`,
					background: `white`,
					width: `${ancho}px`,
					height: `${altura}px`,
					clipPath: `polygon(${cierre3}% 0%, ${cierre1}% 0%, ${cierre2}% 100%, ${cierre4}% 100%)`,
				}}
			/>
		</div>
	);
};
