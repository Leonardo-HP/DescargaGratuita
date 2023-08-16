import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {CompCursorClick} from '../CompCursorClick/CompCursorClick';
import {ScreenShot1} from '../ScreenShots/Screenshot1';
import {LetrasCaptcha} from '../Texto/LetrasCaptcha';
import {LetrasPassword} from '../Texto/LetrasPassword';
import {LetrasRFC} from '../Texto/LetrasRFC';
import {IconBXFTexto} from '../highlight.tsx/LogosBXFTexto';
import {
	PrimerPasoSS1,
	PrimerPasoSS2,
	PrimerPasoSS3,
	PrimerPasoSS4,
	PrimerPasoSSO,
	VerMas,
} from '../ScreenShots/ScreenshotPrimerPaso';
import {CompCursorClick2} from '../CompCursorClick/CompCursorClick2';

export const PrimerPaso = () => {
	return (
		<div>
			<Sequence>
				<PrimerPasoSSO />
			</Sequence>

			<Sequence from={100}>
				<PrimerPasoSS1 />
			</Sequence>
			<Sequence from={200}>
				<PrimerPasoSS2 />
			</Sequence>
			<Sequence from={300}>
				<PrimerPasoSS3 />
			</Sequence>


			<Sequence from={400}>
				<VerMas />
			</Sequence>

			<Sequence from={402}>
				<PrimerPasoSS4 />
			</Sequence>



			<Sequence>
				<CompCursorClick2
					positionX={50}
					positionY={50}
					empiezaX={0}
					empiezaY={0}
				/>
			</Sequence>
		</div>
	);
};
