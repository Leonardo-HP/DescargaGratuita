import {AbsoluteFill, Img, Sequence, staticFile} from 'remotion';

export const ScreenShot2 = () => {
	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('ScreenShot2.png')}
					style={{
						transform: `scale(1.5) translateX(0px) translateY(120px)`,
					}}
				/>
			</Sequence>
		</div>
	);
};
