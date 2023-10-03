import {loadFont} from '@remotion/google-fonts/Oswald';
import {evolvePath} from '@remotion/paths';
import {useState} from 'react';
import {
	AbsoluteFill,
	Easing,
	Img,
	delayRender,
	interpolate,
	random,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const ThumbsUp: React.FC = () => {
	const frame = useCurrentFrame();

	const size = interpolate(frame, [0, 25], [250, 300], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const opacity = interpolate(frame, [0, 25], [0, 1], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});


	const rotacion = interpolate(frame, [0,50,70,80], [-20,20,-5,0], {
		easing: Easing.elastic(0.5),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});


	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute',
			}}
		>
			<Img
				src={staticFile('ThumbsUp.png')}
				style={{
					height: `${size}px`,
					position: 'absolute',
					opacity,

					transform: `rotate(${rotacion}deg)`,
				}}
			/>
		</div>
	);
};
