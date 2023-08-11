import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const ScreenShot11: React.FC<{
	scroll: number;
}> = ({scroll}) => {
	
  const frame = useCurrentFrame();
	const scrollTo = interpolate(frame, [0, 50], [221, scroll], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div>
			<Sequence>
				<Img
					src={staticFile('ScreenShot11.png')}
					style={{
						transform: `scale(3.5) translateX(104px) translateY(${scrollTo}px)`,
					}}
				/>
			</Sequence>
		</div>
	);
};
