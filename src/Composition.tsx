import {AbsoluteFill, Sequence} from 'remotion';
import {CheckMark} from './CheckMark/CheckMark';
import {CortinillaSalida} from './Cortinillas/CortinillaSalida';
import {CortinillaEntrada} from './Cortinillas/CortinillaEntrada';
import {Caja} from './highlight.tsx/Caja';
import { MarcaTexto } from './highlight.tsx/MarcaTexto';

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
						Height={100}
						Width={100}
						positionX={50}
						positionY={50}
						duracionCaja={50}
						anchoDeLinea={10}
					/>
				</AbsoluteFill>
			</Sequence>


			<Sequence>
				<AbsoluteFill>
					<MarcaTexto
						Height={100}
						Width={100}
						positionX={200}
						positionY={200}
						duracionCaja={50}
						anchoDeLinea={10}
					/>
				</AbsoluteFill>
			</Sequence>


		</div>
	);
};
