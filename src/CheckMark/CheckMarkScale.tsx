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

export const CheckMarkScale: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {

	const frame = useCurrentFrame();


	const escala = interpolate(frame, [0,5, 10,15,   20, 25,110, 115,120], [0,1.2, 1.1,1,1, 1,1, 1.2,0], {
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
