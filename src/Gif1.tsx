import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';

import {CompCursorClick} from './CompCursorClick/CompCursorClick';
import {Light} from './highlight.tsx/Light';
import {IconBXFTexto} from './highlight.tsx/LogosBXFTexto';

export const Gif1 = () => {
	return (
		<div>
			<Sequence>
				<AbsoluteFill style={{background: 'white'}} />
			</Sequence>

			<Sequence>
				<AbsoluteFill>
					<Img src={staticFile('Gif1.png')} height={400} width={620} />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={10}>
				<AbsoluteFill>
					<Light
						Height={19}
						Width={123}
						positionX={32}
						positionY={220}
						duracionCaja={30}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={150}>
				<AbsoluteFill>
					<IconBXFTexto
						size={300}
						positionX={250}
						positionY={50}
						duracionCaja={30}
						rotacion={20}
						texto="Descripcion del paso"
						imagenX={-25}
						imagenY={0}
						fuenteSize={20}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={50}>
				<AbsoluteFill>
					<CompCursorClick
						empiezaX={300}
						empiezaY={210}
						positionX={-100}
						positionY={-7}
					/>
				</AbsoluteFill>
			</Sequence>
		</div>
	);
};
