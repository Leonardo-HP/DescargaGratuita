import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
	Video,
	interpolate,
	OffthreadVideo,
	Img,
	useCurrentFrame,
	Easing,
} from 'remotion/.';

export const CheckMarkRotation: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {

	const frame = useCurrentFrame();

	const gira = interpolate(frame, [0, 30], [0, 180], {
		extrapolateRight: 'clamp',
	});

	return (
	
			<AbsoluteFill
				style={{
					transform: `rotate(${gira}deg)`,
				}}
			>
				{children}
			
		</AbsoluteFill>
	);
};
