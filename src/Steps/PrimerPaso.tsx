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
import {IconBXFTexto2} from '../highlight.tsx/LogosBXFTexto2';
import {CompClick} from '../CompCursorClick/CompClick/CompClick';
import {CompClick2} from '../CompCursorClick/CompClick/CompClick2';

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
			<Sequence from={200}>
				<PrimerPasoSS3 />
			</Sequence>

			<Sequence from={400}>
				<VerMas />
			</Sequence>

			<Sequence from={300}>
				<PrimerPasoSS4 />
			</Sequence>

			<Sequence from={100}>
				<IconBXFTexto2
					positionX={50}
					positionY={300}
					rotacion={170}
					duracionCaja={20}
					size={350}
					texto="Instrucciones"
					imagenX={0}
					imagenY={-30}
					fuenteSize={30}
					duracionCajaCompleta={300}
				/>
			</Sequence>

			<Sequence from={150} durationInFrames={100}>
				<CompCursorClick2
					positionX={500}
					positionY={250}
					empiezaX={1280}
					empiezaY={250}
				/>
			</Sequence>

			<Sequence from={450}>
				<div
					style={{
						transform: 'translateX(710px) translateY(480px)',
					}}
				>
					<CompClick2 />
				</div>
			</Sequence>
			<Sequence from={250}>
				<CompCursorClick2
					positionX={710}
					positionY={480}
					empiezaX={500}
					empiezaY={250}
				/>
			</Sequence>

			
		</div>
	);
};
