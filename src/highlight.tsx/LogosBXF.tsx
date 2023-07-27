import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const IconBXF: React.FC<{
	positionX: number;
	positionY: number;
	rotacion: number;
	duracionCaja: number;
	size: number;
	direccion: string;
}> = ({positionX, positionY, rotacion, duracionCaja, size, direccion}) => {
	const frame = useCurrentFrame();
	const altura = size;
	const ancho = size;
	const X = positionX;
	const Y = positionY;
	const grados = rotacion;
	const duracion = duracionCaja / 4;
	const imagen = direccion;

	/* Tiempos */
	const cierre1 = interpolate(frame, [0, duracion], [90, 10], {
		extrapolateRight: 'clamp',
	});
	const cierre2 = interpolate(frame, [duracion, duracion * 2], [90, 10], {
		extrapolateRight: 'clamp',
	});
	const cierre3 = interpolate(frame, [duracion * 2, duracion * 3], [90, 10], {
		extrapolateRight: 'clamp',
	});
	const cierre4 = interpolate(frame, [duracion * 3, duracion * 4], [90, 10], {
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
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `rotate(-${grados}deg)`,
					clipPath: `inset(30% ${cierre1}% 59% 15% round 20% 20% 20% 20%) `,
				}}
			>
				<Img
					src={staticFile(imagen)}
					style={{
						transform: `rotate(${grados}deg)`,
						width: `${ancho}px`,
						height: `${altura}px`,
					}}
				/>
			</div>

			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `rotate(-${grados}deg)`,
					clipPath: `inset(40% 15% 49% ${cierre2}% round 20% 20% 20% 20%) `,
				}}
			>
				<Img
					src={staticFile(imagen)}
					style={{
						transform: `rotate(${grados}deg)`,
						width: `${ancho}px`,
						height: `${altura}px`,
					}}
				/>
			</div>

			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `rotate(-${grados}deg)`,
					clipPath: `inset(50% ${cierre3}% 39% 15% round 20% 20% 20% 20%) `,
				}}
			>
				<Img
					src={staticFile(imagen)}
					style={{
						transform: `rotate(${grados}deg)`,
						width: `${ancho}px`,
						height: `${altura}px`,
					}}
				/>
			</div>

			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `rotate(-${grados}deg)`,
					clipPath: `inset(60% 15% 30% ${cierre4}% round 20% 20% 20% 20%) `,
				}}
			>
				<Img
					src={staticFile(imagen)}
					style={{
						transform: `rotate(${grados}deg)`,
						width: `${ancho}px`,
						height: `${altura}px`,
					}}
				/>
			</div>
		</div>
	);
};
