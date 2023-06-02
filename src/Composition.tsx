import {AbsoluteFill, Sequence} from 'remotion';

import {CheckMark} from './CheckMark/CheckMark';
import {CortinillaSalida} from './Cortinillas/CortinillaSalida';
import {CortinillaEntrada} from './Cortinillas/CortinillaEntrada';
import {Caja} from './highlight.tsx/Caja';
import {MarcaTexto} from './highlight.tsx/MarcaTexto';

export const MyComposition = () => {
	return (
		<div>
			<Sequence durationInFrames={150}>
				<AbsoluteFill>
					<CheckMark />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={150} durationInFrames={150}>
				<AbsoluteFill>
					<CortinillaEntrada />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={300} durationInFrames={150}>
				<AbsoluteFill>
					<CortinillaSalida />
				</AbsoluteFill>
			</Sequence>

			<Sequence>
				<AbsoluteFill>
					<Caja
						Height={60}
						Width={80}
						positionX={50}
						positionY={50}
						duracionCaja={50}
					/>
				</AbsoluteFill>
			</Sequence>

		</div>
	);
};
