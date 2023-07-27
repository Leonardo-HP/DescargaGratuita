import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {CompClick} from './CompClick/CompClick';
import {CompCursor} from './CompCursor/CompCursor';

export const CompCursorClick: React.FC<{
	positionX: number;
	positionY: number;
	empiezaX: number;
	empiezaY: number;
}> = ({positionX, positionY, empiezaX, empiezaY}) => {
	const X = positionX;
	const Y = positionY;

	const Xi = empiezaX;
	const Yi = empiezaY;

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${X}px)  translateY(${Y}px)`,
			}}
		>
			<Sequence from={100}>
				<CompClick positionX={X - 3} positionY={Y + 46} />
			</Sequence>

			<CompCursor empiezaX={Xi} empiezaY={Yi} positionX={X} positionY={Y} />
		</AbsoluteFill>
	);
};
