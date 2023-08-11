import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';

export const ScreenShot3 = () => {
	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('ScreenShot3.png')}
					style={{
						transform: `scale(1.8) translateX(70px) translateY(160px)`,
					}}
				/>
			</Sequence>
		</div>
	);
};
