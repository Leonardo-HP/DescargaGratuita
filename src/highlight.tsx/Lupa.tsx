import {
	AbsoluteFill,
	Easing,
	Img,
	OffthreadVideo,
	Sequence,
	Video,
	interpolate,
	random,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const Lupa: React.FC<{
	positionXE: number;
	positionYE: number;

	rotacion: number;
	duracionCaja: number;
	size: number;
	direccion: string;

	imagenScale: number;
}> = ({
	positionXE,
	positionYE,

	duracionCaja,
	size,
	imagenScale,
	direccion,
}) => {
	const frame = useCurrentFrame();
	const altura = size;
	const ancho = size;
	const Xe = positionXE;
	const Ye = positionYE;

	const duracion = duracionCaja / 2;
	const src = direccion;

	const imgScale = imagenScale;

	/* Tiempos */

	const posicionX = interpolate(frame, [0, duracion], [1280, Xe], {
		easing: Easing.elastic(0.5),

		extrapolateRight: 'clamp',
	});
	const posicionY = interpolate(frame, [0, duracion], [-size, Ye], {
		easing: Easing.elastic(0.8),

		extrapolateRight: 'clamp',
	});

	const escala = interpolate(frame, [0, duracion], [-size, Ye], {
		easing: Easing.elastic(0.8),

		extrapolateRight: 'clamp',
	});

	const posicionDentroX = -posicionX;

	const posicionDentroY = -posicionY;

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${posicionX}px)  translateY(${posicionY}px)`,
				width: `${ancho}px`,
				height: `${altura}px`,
			}}
		>
			
			<AbsoluteFill
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					clipPath: `circle(50%)`,
				}}
			>
				<AbsoluteFill>
		
					<Img
						src={staticFile(src)}
						style={{
							transform: `scale(${imgScale})  translateX(${posicionDentroX}px)  translateY(${posicionDentroY}px)`,
							width: `1804px`,
							height: `1009px`,
						}}
					/>
				
				</AbsoluteFill>
			</AbsoluteFill>
	
			<div
				style={{
					border: `20px solid lightgrey`,
					borderRadius: `50%`,
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
				}}
			/>

			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `(${altura})px`,
				}}
			/>
		</AbsoluteFill>
	);
};
