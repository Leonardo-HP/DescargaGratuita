import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const ScreenShot10: React.FC<{
	scroll: number;
}> = ({scroll}) => {
	
  const frame = useCurrentFrame();
	const scrollTo = interpolate(frame, [0, 50], [90, 90], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('ScreenShot10.png')}
					style={{
						transform: `scale(1.8) translateX(93px) translateY(${scrollTo}px)`,
					}}
				/>
			</Sequence>



		</div>
	);
};
