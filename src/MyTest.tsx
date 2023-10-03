import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';
import {TextoManchaMask} from './Manchas/TextoManchaMask';

export const MyTest = () => {
	return (
		<div>
			<AbsoluteFill>
				<Img src={staticFile('papel.jpg')} z-index="-23" />
			</AbsoluteFill>

			<Sequence from={100}>
				<div
					style={{
						transform: 'translateX(450px) translateY(200px)',
					}}
				>
					<TextoManchaMask
						duracionCaja={200}
						altura={400}
						ancho={400}
						x={40}
						y={40}
						fontSize={10}
						seed={3}
						children1="hola"
						children2="buendia"
						children3={undefined}
					/>
				</div>
			</Sequence>
			<Sequence from={200} durationInFrames={200}>
				<div
					style={{
						transform: 'translateX(850px) translateY(200px)',
					}}
				>
					<TextoManchaMask
						duracionCaja={200}
						altura={400}
						ancho={400}
						x={30}
						y={40}
						fontSize={10}
						seed={5}
						children1="adios"
						children2={undefined}
						children3={undefined}
					/>
				</div>
			</Sequence>
		</div>
	);
};
