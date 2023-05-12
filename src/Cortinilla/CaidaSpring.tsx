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
	spring,
} from 'remotion/.';

export const CaidaSpring: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const gira = interpolate(frame, [0, 50], [-90, 0], {
		easing: Easing.bezier(.2,1.32,.64,1),
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				transform: `rotate(${gira}deg) `,
				transformOrigin: `bottom left`,
			}}
		>
			{children}
		</div>
	);
};
