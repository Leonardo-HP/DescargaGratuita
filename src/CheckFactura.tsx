import {Img, Sequence, staticFile} from 'remotion';

export const CheckFactura = () => {
	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						height: `15px`,
						transform: ' translateX(62px) translateY(114px)',
						position: 'absolute',
					}}
				/>
			</Sequence>
			<Sequence from={40}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						height: `15px`,
						transform: ' translateX(62px) translateY(211px)',
						position: 'absolute',
					}}
				/>
			</Sequence>

			<Sequence from={80}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						height: `15px`,
						transform: ' translateX(62px) translateY(335px)',
						position: 'absolute',
					}}
				/>
			</Sequence>
			<Sequence from={120}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						height: `15px`,
						transform: ' translateX(62px) translateY(410px)',
						position: 'absolute',
					}}
				/>
			</Sequence>

			<Sequence from={160}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						height: `15px`,
						transform: ' translateX(62px) translateY(459px)',
						position: 'absolute',
					}}
				/>
			</Sequence>
			<Sequence from={200}>
				<Img
					src={staticFile('CheckMark.png')}
					style={{
						height: `15px`,
						transform: ' translateX(62px) translateY(605px)',
						position: 'absolute',
					}}
				/>
			</Sequence>
		</div>
	);
};
