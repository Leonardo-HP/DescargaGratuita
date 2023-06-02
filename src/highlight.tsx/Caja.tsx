import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';

export const Caja: React.FC<{
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
	const duracion = duracionCaja / 4;

	/* Compensacion */





	

	
	const cierre2 = interpolate(frame,[duracion * 3, duracion * 4],[0, 100],{extrapolateRight: 'clamp'});
	const cierre3 = interpolate(frame,[duracion * 3, duracion * 4],[0, altura],{extrapolateRight: 'clamp'});
	const cierre4 = interpolate(frame,[duracion * 3, duracion * 4],[0, altura],{extrapolateRight: 'clamp'});



	return (
		<div
			style={{
				transform: `translateX(${X}px)  translateY(${Y}px)`,
			}}
		>

				<div
					style={{
						transform: `rotate(0deg)`,
						position:`absolute`,
						background: `green`,
						width: `${ancho}px`,
						height: `10px`,
						clipPath: `inset(0  ${cierre2}%  0 0 )`
					}}
				/>


<div
					style={{
						transform: `translateX(${ancho -10}px)  translateY(${0}px)`,
						position:`absolute`,
						background: `	blue`,
						width: `10px`,
						height: `${altura}px`,
						clipPath: `inset(0 0 ${cierre2}% 0 )`
					}}
				/>


<div
					style={{				
						transform: `translateX(${0}px)  translateY(${altura-10}px)`,
						position:`absolute`,
						background: `yellow`,
						width: `${ancho}px`,
						height: `10px`,
						clipPath: `inset(  0    0 0 ${cierre2}%)`
					}}
				/>




<div
					style={{
						transform: `translateX(${0}px)  translateY(${0}px)`,
						position:`absolute`,
						background: `red`,
						width: `10px`,
						height: `${altura}px`,
						clipPath: `inset(${cierre2}%  0    0 0 )`
					}}
				/>
	
		</div>
	);
};
