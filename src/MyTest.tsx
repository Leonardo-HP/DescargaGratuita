import {Sequence} from 'remotion';
import {PrimerPasoSSO} from './ScreenShots/ScreenshotPrimerPaso';
import {ComponenteDireccion} from './ComponenteDireccion';
import {Blanco2} from './Cortinillas/Colors';
import {PrimerPaso} from './Steps/PrimerPaso';
import {Login1} from './Steps/Login1';
import {CompEmoji} from './Steps/IntroEmoji1/CompEmoji';

export const MyTest = () => {
	return (
		<div>
			<Sequence durationInFrames={540}>
				<CompEmoji />
			</Sequence>

			<Sequence from={540}>
				<Sequence durationInFrames={870}>
					<PrimerPasoSSO />
				</Sequence>

				<Sequence from={400} durationInFrames={480}>
					<PrimerPaso />
				</Sequence>

				<Sequence from={880} durationInFrames={750}>
					<Login1 />
				</Sequence>

				
				<Sequence from={870}>
					<Blanco2 />
				</Sequence>

				<ComponenteDireccion />
			</Sequence>
		</div>
	);
};
