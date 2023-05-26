import {AbsoluteFill, Sequence} from 'remotion';

import {CheckMark} from './CheckMark/CheckMark';
import {CortinillaSalida} from './Cortinillas/CortinillaSalida';
import {CortinillaEntrada} from './Cortinillas/CortinillaEntrada';
import {Caja} from './highlight.tsx/Caja';
import {StagingCaja} from './highlight.tsx/StagingCaja';

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

			<Caja
				Height={50}
				Widht={50}
				positionX={50}
				positionY={50}
				duracionCaja={100}
			/>
		</div>
	);
};
