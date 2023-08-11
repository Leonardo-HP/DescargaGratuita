import { interpolate, useCurrentFrame} from 'remotion';

export const Flash: React.FC<{
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

	const opacidad = interpolate(frame, [0, duracion / 4,duracion ], [0, 0.5,0], {
		extrapolateRight: 'clamp',
	});



	return (
		<div
			style={{
				transform: `translateX(${X}px)  translateY(${Y}px)`,
			}}
		>
			<div
				style={{
					opacity: `${opacidad}`,
					position: `absolute`,
					background: '#CC1E2C',
					width: `${ancho}px`,
					height: `${altura}px`,
				}}
			/>
		</div>
	);
};
