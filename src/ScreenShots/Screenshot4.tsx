import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const ScreenShot4: React.FC<{
	scroll: number;
}> = ({scroll}) => {
	
  const frame = useCurrentFrame();
	const scrollTo = interpolate(frame, [0, 50], [160, scroll], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('ScreenShot4.png')}
					style={{
						transform: `scale(1.8) translateX(70px) translateY(${scrollTo}px)`,
					}}
				/>
			</Sequence>
		</div>
	);
};
