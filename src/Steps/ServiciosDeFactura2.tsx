import {Sequence, interpolate, useCurrentFrame} from 'remotion';
import {CompCursorClick} from '../CompCursorClick/CompCursorClick';
import {IconBXFTexto} from '../highlight.tsx/LogosBXFTexto';
import {ScreenShot2} from '../ScreenShots/Screenshot2';
import {Flash} from '../highlight.tsx/Flash';

export const ServiciosDeFactura2 = () => {
	const frame = useCurrentFrame();

	const rotacion = interpolate(frame, [0, 500], [160, 170], {
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<ScreenShot2 />
			<Sequence from={100}>
				<CompCursorClick
					positionX={-200}
					positionY={32}
					empiezaX={550}
					empiezaY={400}
				/>
			</Sequence>

			<IconBXFTexto
				positionX={600}
				positionY={140}
				rotacion={rotacion}
				duracionCaja={30}
				size={590}
				texto="Seleccionamos el tipo de facturas que necesitamos descargar."
				imagenX={-10}
				imagenY={50}
				fuenteSize={28}
			/>

			<Sequence from={70}>
				<Flash
					Height={20}
					Width={260}
					positionX={90}
					positionY={415}
					duracionCaja={40}
				/>
			</Sequence>

			<Sequence from={90}>
				<Flash
					Height={20}
					Width={260}
					positionX={90}
					positionY={450}
					duracionCaja={40}
				/>
			</Sequence>
		</div>
	);
};
