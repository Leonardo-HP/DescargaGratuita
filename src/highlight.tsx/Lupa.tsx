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

	direccion,
}) => {
	const frame = useCurrentFrame();
	const altura = size;
	const ancho = size;
	const Xe = positionXE;
	const Ye = positionYE;

	const duracion = duracionCaja / 2;
	const src = direccion;



	/* Tiempos */

	const posicionX = interpolate(frame, [0, duracion,duracion+1,duracion*2], [1280, Xe,Xe,300], {
		easing: Easing.elastic(0.5),

		extrapolateRight: 'clamp',
	});
	const posicionY = interpolate(frame, [0, duracion,duracion+1,duracion*2], [-size, Ye,Ye,200], {
		easing: Easing.elastic(0.8),

		extrapolateRight: 'clamp',
	});

	const escala = interpolate(frame, [duracion, duracion*2 ], [1, 3], {
		easing: Easing.elastic(0.8),

		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	
	const posicionDentroX = -interpolate(frame, [0, duracion,duracion+1,duracion*2], [1280, Xe,Xe,-420], {
		easing: Easing.elastic(0.5),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const posicionDentroY= -interpolate(frame, [0, duracion,duracion+1,duracion*2], [-size, Ye,Ye,-10], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});




	return (
		<div
			style={{
				transform: `translateX(${posicionX}px)  translateY(${posicionY}px)`,
				width: `${ancho}px`,
				height: `${altura}px`,
			}}
		>
			
			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					clipPath: `circle(50%)`,
					transform: `scale(${escala}) `
					
				}}
			>
				
		
					<Img
						src={staticFile(src)}
						style={{
							transform: `scale(${escala})  translateX(${posicionDentroX}px)  translateY(${posicionDentroY}px)`,
							width:`1280px`,
							height: `720px`,
							position: `absolute`,
						}}

					/>
				
	
			</div>
	
			<div
				style={{
					border: `10px solid lightgrey`,
					borderRadius: `50%`,
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,
					transform: `scale(${escala})`
				}}
			/>

			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `(${altura})px`,
				}}
			/>
		</div>
	);
};
