import { interpolate, useCurrentFrame} from 'remotion';

export const MarcaTexto: React.FC<{
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
	const cierreArriba = interpolate(frame, [0, duracion], [100, 0], {extrapolateRight: 'clamp',});
	const cierreDerecha = interpolate(frame, [duracion, duracion * 2], [100, 0], {extrapolateRight: 'clamp',});
	const cierreAbajo = interpolate(frame,[duracion * 2, duracion * 3],[100, 0],{extrapolateRight: 'clamp'}	);

	return (
		<div
			style={{
				transform: `translateX(${X}px)  translateY(${Y}px)`,
			}}
		>
			<div
				style={{
					transform: `rotate(0deg)`,
					position: `absolute`,
					background: `green`,
					width: `${ancho}px`,
					height: `${linea}px`,
					clipPath: `inset(0 ${cierreArriba}% 0 0)`,
				}}
			/>

			<div
				style={{
					transform: `translateX(${ancho - 10}px) translateY(${0}px)`,
					position: `absolute`,
					background: `blue`,
					width: `${linea}px`,
					height: `${altura}px`,
					clipPath: `inset(0 0 ${cierreDerecha}% 0)`,
				}}
			/>

			<div
				style={{
					transform: `translateX(${0}px) translateY(${altura - 10}px)`,
					position: `absolute`,
					background: `yellow`,
					width: `${ancho}px`,
					height: `${linea}px`,
					clipPath: `inset(0 0 0 ${cierreAbajo}%)`,
				}}
			/>

		</div>
	);
};
