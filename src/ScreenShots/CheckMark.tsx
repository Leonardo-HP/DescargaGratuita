import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion/.';

export const CheckMark: React.FC = () => {
	return (
		<div>
			<Sequence from={20} durationInFrames={80}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						transform: `scale(0.38) translateX(-759px) translateY(390px)`,
						position: 'absolute',
					}}
				/>
			</Sequence>
			<Sequence from={30} durationInFrames={80}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						transform: `scale(0.38) translateX(-759px) translateY(500px)`,
						position: 'absolute',
					}}
				/>
			</Sequence>
			<Sequence from={40} durationInFrames={80}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						transform: `scale(0.38) translateX(-759px) translateY(680px)`,
						position: 'absolute',
					}}
				/>
			</Sequence>
			<Sequence from={50} durationInFrames={80}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						transform: `scale(0.38) translateX(-759px) translateY(798px)`,
						position: 'absolute',
					}}
				/>
			</Sequence>
			<Sequence from={60} durationInFrames={80}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						transform: `scale(0.38) translateX(-759px) translateY(980px)`,
						position: 'absolute',
					}}
				/>
			</Sequence>
			<Sequence from={70} durationInFrames={80}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						transform: `scale(0.38) translateX(-759px) translateY(1210px)`,
						position: 'absolute',
					}}
				/>
			</Sequence>
		</div>
	);
};
