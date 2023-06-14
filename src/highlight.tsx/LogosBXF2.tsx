import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	random,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const IconBXF2: React.FC<{
	positionX: number;
	positionY: number;
	rotacion: number;
	duracionCaja: number;
	size: number;
	direccion: string;

	imagenScale:number;
	imagenX:number
	imagenY:number

}> = ({positionX, positionY, rotacion, duracionCaja, size, direccion,  imagenScale, imagenX, imagenY}) => {
	const frame = useCurrentFrame();
	const altura = size;
	const ancho = size;
	const X = positionX;
	const Y = positionY;
	const grados = rotacion;
	const duracion = duracionCaja / 4;
	const imagen = direccion;
	const imgScale=imagenScale
	const imgX=imagenX
	const imgY=imagenY



	/* Random */
	const random1 = Math.trunc(random(X+rotacion + 1) * 10) - 5;
	const random2 = Math.trunc(random(X+rotacion + 2) * 10) - 5;
	const random3 = Math.trunc(random(X+rotacion + 3) * 10) - 5;
	const random4 = Math.trunc(random(X+rotacion + 4) * 10) - 5;

	/* Tilt */
	const tilt1 = grados + random1;
	const tilt2 = grados + random2;
	const tilt3 = grados + random3;
	const tilt4 = grados + random4;

	/* Rango */
	const rango1A = 85 - random1;
	const rango1B = 15 + random1;

	const rango2A = 85 - random2;
	const rango2B = 15 + random2;

	const rango3A = 85 - random3;
	const rango3B = 15 + random3;

	const rango4A = 85 - random4;
	const rango4B = 15 + random4;

	/* Tiempos */
	const cierre1 = interpolate(frame, [0, duracion], [rango1A, rango1B], {
		extrapolateRight: 'clamp',
	});
	const cierre2 = interpolate(
		frame,
		[duracion, duracion * 2],
		[rango2A, rango2B],
		{
			extrapolateRight: 'clamp',
		}
	);
	const cierre3 = interpolate(
		frame,
		[duracion * 2, duracion * 3],
		[rango3A, rango3B],
		{
			extrapolateRight: 'clamp',
		}
	);
	const cierre4 = interpolate(
		frame,
		[duracion * 3, duracion * 4],
		[rango4A, rango4B],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			style={{
				transform: `translateX(${X}px)  translateY(${Y}px)`,
				overflow:`visible`
			}}
		>
			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `rotate(-${tilt1}deg)`,
					clipPath: `inset(30% ${cierre1}% 58% ${rango1B}% round 20% 20% 20% 20%) `,
				}}
			>
				<div
					style={{
						transform: `rotate(${tilt1}deg)`,
						width: `${ancho}px`,
						height: `${altura}px`,
					}}
				>
					<Img
						src={staticFile(imagen)}
						style={{
							transform: `scale(${imgScale})  translateX(${imgX}px)  translateY(${imgY}px)`,
						}}
					/>
				</div>
			</div>

			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `rotate(-${tilt2}deg)`,
					clipPath: `inset(40% ${rango2B}% 48% ${cierre2}% round 20% 20% 20% 20%) `,
				}}
			>
				<div
					style={{
						transform: `rotate(${tilt2}deg)`,
						width: `${ancho}px`,
						height: `${altura}px`,
					}}
				>
					<Img
						src={staticFile(imagen)}
						style={{
							transform: `scale(${imgScale})  translateX(${imgX}px)  translateY(${imgY}px)`,
						}}
					/>
				</div>
			</div>

			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `rotate(-${tilt3}deg)`,
					clipPath: `inset(50% ${cierre3}% 38% ${rango3B}% round 20% 20% 20% 20%) `,
				}}
			>
				<div
					style={{
						transform: `rotate(${tilt3}deg)`,
						width: `${ancho}px`,
						height: `${altura}px`,
					}}
				>
					<Img
						src={staticFile(imagen)}
						style={{
							transform: `scale(${imgScale})  translateX(${imgX}px)  translateY(${imgY}px)`,
						}}
					/>
				</div>
			</div>

			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `rotate(-${tilt4}deg)`,
					clipPath: `inset(60% ${rango4B}% 28% ${cierre4}% round 20% 20% 20% 20%) `,
					overflow:`visible`
				}}
			>
			<div
					style={{
						transform: `rotate(${tilt4}deg)`,
						width: `${ancho}px`,
						height: `${altura}px`,
						overflow:`visible`
					}}
				>
					<Img
						src={staticFile(imagen)}
						style={{
							transform: `scale(${imgScale})  translateX(${imgX}px)  translateY(${imgY}px)`,
							overflow:`visible`
						}}
					/>
				</div>
			</div>
		</div>
	);
};
