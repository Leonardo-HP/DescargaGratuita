import {
	AbsoluteFill,
	Img,
	OffthreadVideo,
	Sequence,
	Video,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {CheckMark} from './CheckMark/CheckMark';
import {CortinillaSalida} from './Cortinillas/CortinillaSalida';
import {CortinillaEntrada} from './Cortinillas/CortinillaEntrada';
import {Caja} from './highlight.tsx/Caja';
import {MarcaTexto} from './highlight.tsx/MarcaTexto';
import {Light} from './highlight.tsx/Light';
import {IconBXF} from './highlight.tsx/LogosBXF';
import {IconBXF2} from './highlight.tsx/LogosBXF2';
import {VideoScale} from './highlight.tsx/VideoScale';
import {Focus} from './highlight.tsx/Focus';
import {Lupa} from './highlight.tsx/Lupa';

export const MyComposition = () => {
	return (
		<div>
			<Sequence>
				<AbsoluteFill style={{background: 'white'}} />
			</Sequence>

			<Sequence durationInFrames={150}>
				<AbsoluteFill>
					<CheckMark />
				</AbsoluteFill>
			</Sequence>

			<AbsoluteFill>
	
					<Img src={staticFile('screenShot.png')} style={{


						
					}}/>
	
			</AbsoluteFill>

			<Sequence durationInFrames={1200} from={300}>
				<OffthreadVideo
					src={staticFile('out.webm')}
					style={{
						width: `1290px`,
						height: `770px`,
					}}
				/>
			</Sequence>

			<Sequence durationInFrames={150}>
				<AbsoluteFill>
					<CortinillaEntrada />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={200}>
				<AbsoluteFill>
					<Caja
						Height={200}
						Width={165}
						positionX={180}
						positionY={40}
						duracionCaja={30}
						anchoDeLinea={10}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={890}>
				<AbsoluteFill>
					<MarcaTexto
						Height={40}
						Width={200}
						positionX={130}
						positionY={370}
						duracionCaja={50}
						anchoDeLinea={30}
						opacidad={0.3}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={475}>
				<AbsoluteFill>
					<Light
						Height={50}
						Width={555}
						positionX={160}
						positionY={210}
						duracionCaja={30}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={480}>
				<AbsoluteFill>
					<Focus
						Height={720}
						Width={1280}
						positionX={0}
						positionY={0}
						duracionCaja={30}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={1000} durationInFrames={150}>
				<AbsoluteFill>
					<CortinillaSalida />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={1180}>
				<AbsoluteFill>
					<IconBXF2
						size={500}
						positionX={550}
						positionY={300}
						duracionCaja={30}
						rotacion={50}
						direccion="Buzon.png"
						imagenScale={1}
						imagenX={0}
						imagenY={0}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={150}>
				<Lupa
					size={200}
					positionXE={0}
					positionYE={0}
					duracionCaja={100}
					rotacion={50}
					direccion="screenShot.png"
					imagenScale={1}
				/>
			</Sequence>

			<Sequence from={1150} durationInFrames={150}>
				<AbsoluteFill>
					<CortinillaSalida />
				</AbsoluteFill>
			</Sequence>
		</div>
	);
};
40;
