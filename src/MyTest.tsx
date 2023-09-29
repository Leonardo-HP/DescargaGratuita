import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';
import {TextoManchaMask} from './highlight.tsx/TextoManchaMask';
import {IconBXFTexto2} from './highlight.tsx/LogosBXFTexto2';

export const MyTest = () => {
	return (
		<div>
			<AbsoluteFill>
				<Img src={staticFile('papel.jpg')} z-index="-23" />
			</AbsoluteFill>

			<div
				style={{
					transform: 'translateX(-400px) translateY(90px)',
				}}
			>
				<IconBXFTexto2
					positionX={800}
					positionY={200}
					rotacion={0}
					duracionCaja={100}
					size={500}
					texto="instrucciones"
					imagenX={0}
					imagenY={-80}
					fuenteSize={50}
					duracionCajaCompleta={500}
				/>
			</div>

			<Sequence>
				<div
					style={{
						transform: 'translateX(60px) translateY(200px)',
					}}
				>
					<TextoManchaMask
						key={3}
						duracionCaja={200}
						seed={6}
						altura={400}
						ancho={400}
						x={30}
						y={20}
						fontSize={10}
						delay={300}
					>
						instrucciones
					</TextoManchaMask>
				</div>
			</Sequence>
			<Sequence from={50}>
				<div
					style={{
						transform: 'translateX(700px) translateY(200px)',
					}}
				>
					<TextoManchaMask
						key={3}
						duracionCaja={200}
						seed={6}
						altura={400}
						ancho={400}
						x={30}
						y={20}
						fontSize={10}
						delay={300}
					>
						instrucciones
					</TextoManchaMask>
				</div>
			</Sequence>
		</div>
	);
};
