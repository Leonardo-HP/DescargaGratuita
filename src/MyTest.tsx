import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	interpolateColors,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {LetrasDireccion} from './Texto/LetrasDireccion';
import {
	Flechas,
	LupaLogo,
	PrimerPasoSSO,
} from './ScreenShots/ScreenshotPrimerPaso';
import {Caret} from './Texto/Caret';
import {ComponenteDireccion} from './ComponenteDireccion';
import {Blanco, Blanco2} from './Cortinillas/Colors';
import {MyComposition2} from './Composition2';
import {PrimerPaso} from './Steps/PrimerPaso';
import {Login1} from './Steps/Login1';

export const MyTest = () => {
	return (
		<div>
			<Sequence durationInFrames={870}>
				<PrimerPasoSSO />
			</Sequence>

	
			<Sequence from={400} durationInFrames={480}>
				<PrimerPaso />
			</Sequence>
			<Blanco />


			<Sequence from={880}>
				<Login1 />
			</Sequence>
			<Sequence from={870}>
				<Blanco2 />
			</Sequence>

			<ComponenteDireccion />
			
		</div>
	);
};
