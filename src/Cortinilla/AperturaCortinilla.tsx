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

export const Apertura: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const ancho = interpolate(frame, [90, 120], [1280, 0], {

		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				width: `${ancho}px`,
				height: '720px',
				overflow:'hidden'
			}}
		>
			{children}
		</div>
	);
};
