import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';

export const ScreenShot1 = () => {
	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('ScreenShot1.png')}
					style={{
						transform: `scale(2.1) translateX(100px) translateY(189px)`,
					}}
				/>
			</Sequence>
		</div>
	);
};
