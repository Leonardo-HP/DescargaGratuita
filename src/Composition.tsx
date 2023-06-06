import {AbsoluteFill, Sequence} from 'remotion';
import {CheckMark} from './CheckMark/CheckMark';
import {CortinillaSalida} from './Cortinillas/CortinillaSalida';
import {CortinillaEntrada} from './Cortinillas/CortinillaEntrada';
import {Caja} from './highlight.tsx/Caja';
import { MarcaTexto } from './highlight.tsx/MarcaTexto';
import { Light } from './highlight.tsx/Light';

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
						Height={600}
						Width={600}
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
						Height={40}
						Width={200}
						positionX={300}
						positionY={300}
						duracionCaja={50}
						anchoDeLinea={30}
						opacidad={0.3}
					/>
				</AbsoluteFill>
			</Sequence>



			<Sequence>
				<AbsoluteFill>
					<Light
						Height={100}
						Width={100}
						positionX={100}
						positionY={100}
						duracionCaja={50}
				
	
					/>
				</AbsoluteFill>
			</Sequence>


		</div>
	);
};
