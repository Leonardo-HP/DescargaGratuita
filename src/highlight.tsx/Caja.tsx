import {interpolate, useCurrentFrame} from 'remotion';

export const Caja: React.FC<{
	Height: number;
	Width: number;
	positionX: number;
	positionY: number;
	duracionCaja: number;
	anchoDeLinea: number;
}> = ({Height, Width, positionX, positionY, duracionCaja, anchoDeLinea}) => {
	const frame = useCurrentFrame();
	const altura = Height;
	const ancho = Width;
	const X = positionX;
	const Y = positionY;
	const duracion = duracionCaja / 4;
	const linea = anchoDeLinea;

	/* Tiempos */
	const cierreArriba = interpolate(frame, [0, duracion], [100, 0], {
		extrapolateRight: 'clamp',
	});
	const cierreDerecha = interpolate(frame, [duracion, duracion * 2], [100, 0], {
		extrapolateRight: 'clamp',
	});
	const cierreAbajo = interpolate(
		frame,
		[duracion * 2, duracion * 3],
		[100, 0],
		{extrapolateRight: 'clamp'}
	);
	const cierreIzquierda = interpolate(
		frame,
		[duracion * 3, duracion * 4],
		[100, 0],
		{extrapolateRight: 'clamp'}
	);

	const opacity = interpolate(frame, [duracion , duracion * 4], [1, 0], {
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
					position: `absolute`,
					background: `red`,
					width: `${ancho}px`,
					height: `${linea}px`,
					clipPath: `inset(0 ${cierreArriba}% 0 0)`,
				}}
			/>

			<div
				style={{
					transform: `translateX(${
						ancho - anchoDeLinea
					}px)  translateY(${0}px)`,
					position: `absolute`,
					background: `	red`,
					width: `${linea}px`,
					height: `${altura}px`,
					clipPath: `inset(0 0 ${cierreDerecha}% 0)`,
				}}
			/>

			<div
				style={{
					transform: `translateX(${0}px)  translateY(${
						altura - anchoDeLinea
					}px)`,
					position: `absolute`,
					background: `red`,
					width: `${ancho}px`,
					height: `${linea}px`,
					clipPath: `inset(0 0 0 ${cierreAbajo}%)`,
				}}
			/>

			<div
				style={{
					transform: `translateX(${0}px)  translateY(${0}px)`,
					position: `absolute`,
					background: `red`,
					width: `${linea}px`,
					height: `${altura}px`,
					clipPath: `inset(${cierreIzquierda}% 0 0 0)`,
				}}
			/>
		</div>
	);
};
