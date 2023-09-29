import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const CompCursorAll: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;
  duracion: number;


  children: React.ReactNode;

}> = ({positionX, positionY, empiezaX, empiezaY, duracion, children}) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	const frame = useCurrentFrame();

	const smoothX = interpolate(frame, [0,1+duracion], [Xi, X], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const smoothY = interpolate(frame, [0, 1+duracion], [Yi, Y], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translateX(${smoothX}px)  translateY(${smoothY}px)`,
			}}
		>
			{children}
		</div>
	);
};


