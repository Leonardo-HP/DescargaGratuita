import {Sequence} from 'remotion';
import {Iconos1, Iconos2, Iconos3, Iconos4} from './Iconos';
import { SombraIndividual } from './Steps/IntroEmoji1/SombraHighlight';

export const SecuenciaIconos = () => {
	return (
		<div>
		
			<Sequence durationInFrames={500}>
				<Iconos1 />
			</Sequence>
			<Sequence from={100} durationInFrames={150}>
				<Iconos2 />
			</Sequence>
			<Sequence from={200} durationInFrames={150}>
				<Iconos3 />
			</Sequence>
			<Sequence from={300} durationInFrames={150}>
				<Iconos4 />
			</Sequence>

		</div>
	);
};
