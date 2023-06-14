import {Easing, Sequence, interpolate, useCurrentFrame} from 'remotion';

export const Focus: React.FC<{
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

	const opacity = interpolate(frame, [0, duracion / 4,30,35], [0, 0.1,0.1,0], {
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


       background: `blue`,
					width: `${ancho}px`,
					height: `${altura}px`,
					clipPath: `polygon(0% 0%, 0% 100%, 10% 100%, 10% 10%, 60% 10%, 60% 75%, 10% 75%, 10% 100%, 100% 100%, 100% 0%)`,
          opacity: `${opacity}`

        }}
			/>
		</div>
	);
};
