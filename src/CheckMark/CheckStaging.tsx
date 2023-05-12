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

export const CheckStaging: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {

	const frame = useCurrentFrame();

	const escala = interpolate(frame, [0,55,60,65], [1,1, 1.1,1], {
		extrapolateRight: 'clamp',
	});

	return (
	
			<AbsoluteFill
				style={{
					transform: `scale(${escala})`,
				}}
			>
				{children}
			
		</AbsoluteFill>
	);
};
