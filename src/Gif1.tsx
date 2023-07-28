import {
	AbsoluteFill,
	Img,
	OffthreadVideo,
	Sequence,
	staticFile,
} from 'remotion';

import {CompCursorClick} from './CompCursorClick/CompCursorClick';
import {Light} from './highlight.tsx/Light';
import { IconBXF } from './highlight.tsx/LogosBXF';
import { CompClick } from './CompCursorClick/CompClick/CompClick';
import { Dot } from './CompCursorClick/CompClick/Dot';
import { CompCursor } from './CompCursorClick/CompCursor/CompCursor';
import { Multiplicar } from './CompCursorClick/CompClick/Multiplicar';
import { MovingOutside } from './CompCursorClick/CompClick/MovingOutside';

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
					<IconBXF
						size={300}
						positionX={250}
						positionY={50}
						duracionCaja={30}
						rotacion={50}
						direccion="Buzon.png"
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


<MovingOutside/>


			</Sequence>
		</div>
	);
};
