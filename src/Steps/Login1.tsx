import {Sequence, interpolate, useCurrentFrame} from 'remotion';
import {CompCursorClick} from '../CompCursorClick/CompCursorClick';
import {ScreenShot1} from '../ScreenShots/Screenshot1';
import {LetrasCaptcha} from '../Texto/LetrasCaptcha';
import {LetrasPassword} from '../Texto/LetrasPassword';
import {LetrasRFC} from '../Texto/LetrasRFC';
import {CompCursor2} from '../CompCursorClick/CompCursor/CompCursor2';
import {IconBXFTexto2} from '../highlight.tsx/LogosBXFTexto2';

export const Login1 = () => {
	return (
		<div>
			<ScreenShot1 />

			<Sequence from={200}>
				<Sequence from={10}>
					<LetrasRFC X={367} Y={292} />
				</Sequence>
				<Sequence from={160}>
					<LetrasPassword X={366} Y={352} />
				</Sequence>
				<Sequence from={310}>
					<LetrasCaptcha X={366} Y={558} />
				</Sequence>
			</Sequence>

			<Sequence from={100} durationInFrames={210}>
				<CompCursor2
					positionX={800}
					positionY={300}
					empiezaX={1290}
					empiezaY={720}
					duracion={100}
				/>
			</Sequence>

			<Sequence from={310} durationInFrames={140}>
				<CompCursor2
					positionX={800}
					positionY={360}
					empiezaX={800}
					empiezaY={300}
					duracion={70}
				/>
			</Sequence>

			<Sequence from={450} durationInFrames={150}>
				<CompCursor2
					positionX={800}
					positionY={570}
					empiezaX={800}
					empiezaY={360}
					duracion={50}
				/>
			</Sequence>


			<Sequence from={600} durationInFrames={50}>
				<CompCursor2
					positionX={1290}
					positionY={720}
					empiezaX={800}
					empiezaY={570}
					duracion={50}
				/>
			</Sequence>



			<Sequence from={50}>
				<IconBXFTexto2
					positionX={690}
					positionY={-140}
					rotacion={0}
					duracionCaja={30}
					size={540}
					texto="Ingresamos nuestras credenciales."
					imagenX={-10}
					imagenY={20}
					fuenteSize={33}
					duracionCajaCompleta={100}
				/>
			</Sequence>
		</div>
	);
};
