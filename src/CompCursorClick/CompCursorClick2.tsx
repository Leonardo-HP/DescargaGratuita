import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
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

	return (
		<div>
			<Sequence >
				
					<CompCursor2
						empiezaX={Xi}
						empiezaY={Yi}
						positionX={X}
						positionY={Y}
					/>
				
			</Sequence>

		</div>
	);
};
