import {AbsoluteFill, Sequence} from 'remotion';

import {CheckMark} from './CheckMark/CheckMark';
import {CortinillaSalida} from './Cortinilla/CortinillaSalida';
import { CortinillaEntrada } from './Cortinilla/CortinillaEntrada';

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

		</div>
	);
};
