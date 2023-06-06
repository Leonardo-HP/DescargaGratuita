import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const MarcaTexto: React.FC<{
	Height: number;
	Width: number;
	positionX: number;
	positionY: number;
	duracionCaja: number;
	anchoDeLinea: number;
	opacidad: number;

}> = ({
	Height,
	Width,
	positionX,
	positionY,
	duracionCaja,
	anchoDeLinea,
	opacidad,

}) => {
	const frame = useCurrentFrame();
	const altura = Height;
	const ancho = Width;
	const X = positionX;
	const Y = positionY;
	const duracion = duracionCaja / 4;
	const linea = anchoDeLinea;
	const opacity = opacidad;


	/* Tiempos */
	const cierreArriba = interpolate(frame, [0, duracion], [100, 0], {
		extrapolateRight: 'clamp',
	});
	const cierreMedio = interpolate(frame, [duracion, duracion * 2], [100, 0], {
		extrapolateRight: 'clamp',
	});
	const cierreAbajo = interpolate(
		frame,
		[duracion * 2, duracion * 3],
		[100, 0],
		{extrapolateRight: 'clamp'}
	);

	const anguloA = Math.atan(altura / ancho);
	const anguloAGrados = (anguloA * 180) / Math.PI;
	const hipotenusa = Math.sqrt(altura ** 2 + ancho ** 2);

	return (
		<div
			style={{
				transform: `translateX(${X}px)  translateY(${Y}px) `,
				
			}}
		>
			<div
				style={{
					position: `absolute`,
					background: `green`,
					width: `${ancho}px`,
					height: `${linea}px`,
					clipPath: `inset(0 ${cierreArriba}% 0 0)`,
					opacity,
				}}
			/>

			<div
				style={{
					transform: `translateX(${0}px)  translateY(${altura - 10}px)`,
					position: `absolute`,
					background: `yellow`,
					width: `${ancho}px`,
					height: `${linea}px`,
					clipPath: `inset(0  ${cierreAbajo}% 0 0 )`,
					opacity,
				}}
			/>

			<div
				style={{
					transform: `translateX(${(ancho - hipotenusa) / 2}px)  translateY(${
						altura / 2
					}px) rotate(${-anguloAGrados}deg)`,
					background: `orange`,
					width: `${hipotenusa}px`,
					height: `${linea}px`,
					clipPath: `inset(0  0 0 ${cierreMedio}%)`,
					opacity,
				}}
			/>
		</div>
	);
};
