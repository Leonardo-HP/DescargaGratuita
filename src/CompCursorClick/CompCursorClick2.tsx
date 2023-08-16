import React from 'react';
import {
	AbsoluteFill,
	Easing,
	Sequence,
	interpolate,
	useCurrentFrame,
} from 'remotion';
import {CompClick} from './CompClick/CompClick';
import {CompCursor} from './CompCursor/CompCursor';
import {CompCursor2} from './CompCursor/CompCursor2';
import {CompClick2} from './CompClick/CompClick2';

export const CompCursorClick2: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;
}> = ({positionX, positionY, empiezaX, empiezaY}) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	const frame = useCurrentFrame();
	const click = interpolate(frame, [100, 103, 106], [1, 0.9, 1], {
		easing: Easing.elastic(0.8),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `scale(${click})`,
			}}
		>
			<CompCursor2 empiezaX={Xi} empiezaY={Yi} positionX={X} positionY={Y} />
		</div>
	);
};
