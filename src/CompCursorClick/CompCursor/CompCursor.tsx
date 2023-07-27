import React from 'react';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
} from 'remotion';
import {Cursor} from './Cursor';
import {MovingCursor} from './MovingCursor';

export const CompCursor: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;

}> = ({positionX, positionY, empiezaX , empiezaY } ) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	const frame = useCurrentFrame();

	const smoothX = interpolate(frame, [0, 100], [Xi, X], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const smoothY = interpolate(frame, [0, 100], [Yi, Y], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${smoothX}px)  translateY(${smoothY}px)`,
			}}
		>
			<MovingCursor>
				<Cursor />
			</MovingCursor>
		</AbsoluteFill>
	);
};
