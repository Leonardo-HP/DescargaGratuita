import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const CortinaAlCentro: React.FC = () => {
	const frame = useCurrentFrame();

	const move = interpolate(frame, [0, 20, 21, 40], [1280, 0, 0, -1280], {
		extrapolateRight: 'clamp',
	});

	const opacity = interpolate(frame, [0, 19, 20], [0, 0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<AbsoluteFill>
			<div
				style={{
					height: '720px',
					width: '1280px',
					position: 'absolute',
					backgroundColor: 'white',
					transform: `translateX(${-move}px)`,
				}}
			/>

			<div
				style={{
					height: '720px',
					width: '1280px',
					position: 'absolute',

					background: '#6089e4',
					transform: `translateX(${-move}px)`,
					opacity: `${opacity}`,
				}}
			/>

			<div
				style={{
					height: '720px',
					width: '1280px',
					position: 'absolute',
					background: '#ce1d2c',
					transform: `translateX(${move}px)`,
				}}
			/>
		</AbsoluteFill>
	);
};
