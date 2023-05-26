import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';

export const Caja: React.FC<{
	
	Height: number;
	Widht: number;
	positionX: number;
	positionY: number;
	duracionCaja: number;

}> = ({Height, Widht, positionX, positionY, duracionCaja}) => {

	const frame = useCurrentFrame();
	const altura = Height;
	const ancho = Widht;
	const X = positionX;
	const Y = positionY;
	const duracion = duracionCaja/4;


	/* Compensacion */
	const rightX = ancho - 360;
	const bottomY = altura - 710;
	const leftY = altura - 350;

	const cierreTop = interpolate(frame, [0, duracion], [0, ancho], {
		extrapolateRight: 'clamp',
	});
	const cierreRight = interpolate(frame, [duracion, duracion*2], [0, altura], {
		extrapolateRight: 'clamp',
	});
	const cierreBottom = interpolate(frame, [duracion*2, duracion*3], [0, ancho], {
		extrapolateRight: 'clamp',
	});
	const cierreLeft = interpolate(frame, [duracion*3, duracion*4], [0, altura], {
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill
			style={{
				translate: `${X}px ${Y}px`,
			}}
		>
			{/* Top */}
			<Sequence>
				<div
					style={{
						transform: `rotate(0deg) `,
						translate: `0px 0px`,
					}}
				>
					<div
						style={{
							position: `absolute`,
							background: `#6089e4`,
							width: `${cierreTop}px`,
							height: `10px`,
						}}
					/>
				</div>
			</Sequence>

			{/* Right */}

			<Sequence>
				<div
					style={{
						transform: `rotate(90deg) `,
						translate: `${rightX}px -360px`,
					}}
				>
					<div
						style={{
							position: `absolute`,
							background: `#6089e4`,
							width: `${cierreRight}px`,
							height: `10px`,
						}}
					/>
				</div>
			</Sequence>

			{/* Bottom */}

			<Sequence>
				<div
					style={{
						transform: `rotate(180deg) `,
						translate: `${ancho}px ${bottomY}px`,
					}}
				>
					<div
						style={{
							position: `absolute`,
							background: `#6089e4`,
							width: `${cierreBottom}px`,
							height: `10px`,
						}}
					/>
				</div>
			</Sequence>

			{/* Izquierda */}

			<Sequence>
				<div
					style={{
						transform: `rotate(-90deg) `,
						translate: `360px ${leftY}px`,
					}}
				>
					<div
						style={{
							position: `absolute`,
							background: `#6089e4`,
							width: `${cierreLeft}px`,
							height: `10px`,
						}}
					/>
				</div>
			</Sequence>
		</AbsoluteFill>
	);
};
