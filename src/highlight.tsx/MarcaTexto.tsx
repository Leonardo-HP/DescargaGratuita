import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';

export const MarcaTexto: React.FC<{

	Height: number ;
	Width: number;
	positionX: number;
	positionY: number;
	duracionCaja: number;

}> = ({Height, Width, positionX, positionY, duracionCaja}) => {

	const frame = useCurrentFrame();
	const altura = Height || 50;
	const ancho = Width || 50;
	const X = positionX || 0;
	const Y = positionY || 0;
	const duracion = duracionCaja/4 || 60;


	/* Compensacion */

	const Y2 =  0;
	const Y3 = altura - 330;


	/* Compensacion */

  const anguloA = Math.atan(altura / ancho);
  const anguloAGrados = (anguloA * 180) / Math.PI;











/* Compensacion */
  const anchoMarcaTexto = 15;

	const cierre1 = interpolate(frame, [0, duracion], [0, ancho], {
		extrapolateRight: 'clamp',
	});
	const cierre2 = interpolate(frame, [duracion, duracion*2], [0, altura], {
		extrapolateRight: 'clamp',
	});
	const cierre3 = interpolate(frame, [duracion*2, duracion*3], [0, ancho], {
		extrapolateRight: 'clamp',
	});


  

	return (

		
		<AbsoluteFill
			style={{
				translate: `${X}px ${Y}px`,
			}}
		>
			{/* 1 */}
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
							background: `red`,
							width: `${cierre1}px`,
							height: `${anchoMarcaTexto}px`,
              borderRadius: `50px`
						}}
					/>
				</div>
			</Sequence>

			{/* Right 

			<Sequence>
				<div
					style={{
						transform: `rotate(120deg) `,
						translate: `${rightX}px -530px`,
					
          }}
				>
					<div
						style={{
							position: `absolute`,
							background: `red`,
							width: `${cierreRight}px`,
							height: `${anchoMarcaTexto}px`,
              borderRadius: `50px`
						}}
					/>
				</div>
			</Sequence>
*/}
			{/* 2 */}

			<Sequence>
				<div
					style={{
						transform: `rotate(${anguloAGrados}deg)`,
						translate: `240px ${Y2}px`,
					}}
				>
					<div
						style={{
							position: `absolute`,
							background: `blue`,
							width: `${cierre2}px`,
							height: `${anchoMarcaTexto}px`,
              borderRadius: `50px`

            }}
					/>
				</div>
			</Sequence>



			{/* 3 */}
      <Sequence>
				<div
					style={{
						transform: `rotate(0deg) `,
            translate: `${ancho}px ${Y3}px`,
					}}
				>
					<div
						style={{
							position: `absolute`,
							background: `red`,
							width: `${cierre3}px`,
							height: `${anchoMarcaTexto}px`,
              borderRadius: `50px`
						}}
					/>
				</div>
			</Sequence>


		</AbsoluteFill>
	);
};
