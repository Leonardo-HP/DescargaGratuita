import {Easing, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Oswald';

export const CirclePop2: React.FC<{
	positionX: number;
	positionY: number;
	rotacion: number;
	duracionCaja: number;
	size: number;
	texto: string;
	imagenX: number;
	imagenY: number;
	fuenteSize: number;
}> = ({
	positionX,
	positionY,
	rotacion,
	duracionCaja,
	size,
	texto,
	imagenX,
	imagenY,
	fuenteSize,
}) => {
	const frame = useCurrentFrame();
	const altura = size;
	const ancho = size;
	const X = positionX;
	const Y = positionY;
	const grados = rotacion;
	const duracion = duracionCaja ;
	const textoa = texto;
	const imgX = imagenX;
	const imgY = imagenY;
	const fuenteSizeA = fuenteSize;

	/* Tiempos */
	const cierre1 = interpolate(frame, [0, 20,duracion-20,duracion ], [0,30,30,0], {
    easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

  const rota = interpolate(frame, [0, duracion ], [0,grados], {
    easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

  


	const {fontFamily} = loadFont();

const cajaDeTexto = 250

	return (
		<div
			style={{
        filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				transform: `translateX(${X}px)  translateY(${Y}px)`,
			}}
		>
			<div
				style={{
					position: `absolute`,
					width: `${ancho}px`,
					height: `${altura}px`,

					clipPath: `circle(${cierre1}% at 50% 50%) `,


          
				}}
			>
				<center
					style={{
						transform: `rotate(${rota}deg) 		translateX(${imgX}px)  translateY(${imgY}px)`,
						width: `${ancho}px`,
						height: `${altura}px`,
						background: '#CC1E2C',
						color: 'white',
						fontFamily,
						fontSize: fuenteSizeA,
					}}
				>
					<br />
					<br />
					
					<div style={{width: `${cajaDeTexto}px`}}>{textoa}</div>
				</center>
			</div>

		
		</div>
	);
};
