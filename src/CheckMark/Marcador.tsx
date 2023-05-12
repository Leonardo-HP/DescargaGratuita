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

export const Marcador = () => {
	const frame = useCurrentFrame();

	const aparece = interpolate(frame, [0, 5, 55, 60], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				transform: `rotate(0deg)`,
			}}
		>
			<div
				style={{
					transform: `rotate(0deg) translate(0px, -35px)  scale(${aparece})`,
					width: '3px',
					height: '10px',
					background: `red`,

					borderRadius: `50px`,
				}}
			/>
		</AbsoluteFill>
	);
};
