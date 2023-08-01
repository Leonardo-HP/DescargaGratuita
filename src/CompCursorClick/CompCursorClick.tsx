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
		<Sequence durationInFrames={200}>
			<AbsoluteFill
				style={{
					transform: `translateX(${X}px)  translateY(${Y}px)`,
				}}
			>
				<AbsoluteFill>
					<CompCursor empiezaX={Xi} empiezaY={Yi} positionX={X} positionY={Y} />
				</AbsoluteFill>
<Sequence from={100}>
				<AbsoluteFill
					style={{
						transform: `translateX(${X-3}px)  translateY(${Y+45}px)`,
					}}
				>
					<CompClick />
				</AbsoluteFill>
				</Sequence>
			</AbsoluteFill>
		</Sequence>
	);
};
