import {Sequence, interpolate, useCurrentFrame} from 'remotion';
import {CompCursorClick} from '../CompCursorClick/CompCursorClick';
import {ScreenShot1} from '../ScreenShots/Screenshot1';
import {LetrasCaptcha} from '../Texto/LetrasCaptcha';
import {LetrasPassword} from '../Texto/LetrasPassword';
import {LetrasRFC} from '../Texto/LetrasRFC';
import {IconBXFTexto} from '../highlight.tsx/LogosBXFTexto';

export const Login1 = () => {
	const frame = useCurrentFrame();

	const rotacion = interpolate(frame, [0, 500], [180, 170], {
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<ScreenShot1 />
			<Sequence from={50}>
				<LetrasRFC X={367} Y={292} />
			</Sequence>
			<Sequence>
				<LetrasPassword X={366} Y={352} />
			</Sequence>
			<Sequence>
				<LetrasCaptcha X={366} Y={558} />
			</Sequence>

			<Sequence from={100}>
				<CompCursorClick
					positionX={100}
					positionY={125}
					empiezaX={550}
					empiezaY={240}
				/>
			</Sequence>

			<IconBXFTexto
				positionX={690}
				positionY={-140}
				rotacion={rotacion}
				duracionCaja={30}
				size={540}
				texto="Ingresamos nuestras credenciales."
				imagenX={-10}
				imagenY={20}
				fuenteSize={33}
			/>
		</div>
	);
};
