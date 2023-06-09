import {AbsoluteFill, Sequence} from 'remotion';
import {CheckMark} from './CheckMark/CheckMark';
import {CortinillaSalida} from './Cortinillas/CortinillaSalida';
import {CortinillaEntrada} from './Cortinillas/CortinillaEntrada';
import {Caja} from './highlight.tsx/Caja';
import {MarcaTexto} from './highlight.tsx/MarcaTexto';
import {Light} from './highlight.tsx/Light';
import {IconBXF} from './highlight.tsx/LogosBXF';
import {IconBXF2} from './highlight.tsx/LogosBXF2';

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

			<Sequence>
				<AbsoluteFill>
					<Caja
						Height={300}
						Width={300}
						positionX={10}
						positionY={0}
						duracionCaja={50}
						anchoDeLinea={10}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence>
				<AbsoluteFill>
					<MarcaTexto
						Height={40}
						Width={200}
						positionX={300}
						positionY={300}
						duracionCaja={50}
						anchoDeLinea={30}
						opacidad={0.3}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence>
				<AbsoluteFill>
					<Light
						Height={100}
						Width={100}
						positionX={100}
						positionY={100}
						duracionCaja={50}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence>
				<AbsoluteFill>
					<IconBXF
						size={500}
						positionX={50}
						positionY={0}
						duracionCaja={30}
						rotacion={50}
						direccion="Buzon.png"
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={60} >
				<AbsoluteFill
				
				>
					<IconBXF2
						size={500}
						positionX={90}
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

		</div>
	);
};
