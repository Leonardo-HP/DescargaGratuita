import {Img, Sequence, staticFile} from 'remotion';
import {ScreenShot1} from '../ScreenShots/Screenshot1';
import {LetrasCaptcha} from '../Texto/LetrasCaptcha';
import {LetrasPassword} from '../Texto/LetrasPassword';
import {LetrasRFC} from '../Texto/LetrasRFC';
import {IconBXFTexto2} from '../highlight.tsx/LogosBXFTexto2';
import {
	CompCursorLogin1,
	CompCursorLogin2,
	CompCursorLogin3,
	CompCursorLogin4,
	CompCursorLogin5,
} from '../CompCursorClick/CompCursor/CompCursorLogin';
import {RoughNotation} from 'react-rough-notation';


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

			<Sequence from={615}>
				<div
					style={{
						transform: 'translateX(719px) translateY(564px)',
						clipPath: `inset(5% 20% 20% 20% ) `,
					}}
				>
					<Img
						src={staticFile('BotonEnviar.png')}
						style={{
							width: '228px',
							height: '130px',
						}}
					/>
				</div>
			</Sequence>

			<Sequence from={100} durationInFrames={210}>
				<CompCursorLogin1
					positionX={800}
					positionY={300}
					empiezaX={1290}
					empiezaY={720}
					duracion={100}
				/>
			</Sequence>

			<Sequence from={310} durationInFrames={140}>
				<CompCursorLogin2
					positionX={800}
					positionY={360}
					empiezaX={800}
					empiezaY={300}
					duracion={70}
				/>
			</Sequence>

			<Sequence from={450} durationInFrames={150}>
				<CompCursorLogin3
					positionX={800}
					positionY={570}
					empiezaX={800}
					empiezaY={360}
					duracion={50}
				/>
			</Sequence>

			<Sequence from={600} durationInFrames={50}>
				<CompCursorLogin4
					positionX={850}
					positionY={640}
					empiezaX={800}
					empiezaY={570}
					duracion={50}
				/>
			</Sequence>

			<Sequence from={650} durationInFrames={50}>
				<CompCursorLogin5
					positionX={1290}
					positionY={720}
					empiezaX={850}
					empiezaY={640}
					duracion={50}
				/>
			</Sequence>

			<Sequence from={50}>
				<IconBXFTexto2
					positionX={690}
					positionY={-140}
					rotacion={150}
					duracionCaja={30}
					size={570}
					texto="Ingresamos nuestras credenciales."
					imagenX={-10}
					imagenY={20}
					fuenteSize={33}
					duracionCajaCompleta={100}
				/>
			</Sequence>

\

		</div>
	);
};
