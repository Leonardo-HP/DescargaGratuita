import {MovingOutside} from './MovingOutside';
import {Shrinking} from './Shrinking';
import {Dot} from './Dot';
import {Multiplicar} from './Multiplicar';
import React from 'react';
import {AbsoluteFill} from 'remotion';

export const CompClick: React.FC<{
	positionX: number;
	positionY: number;
}> = ({positionX, positionY}) => {
	const X = positionX;
	const Y = positionY;

	return (
		<AbsoluteFill
			style={{
				transform: `translateX(${X}px)  translateY(${Y}px)`,
			}}
		>
			<Multiplicar>
				<MovingOutside>
					<Shrinking>
						<Dot />
					</Shrinking>
				</MovingOutside>
			</Multiplicar>
		</AbsoluteFill>
	);
};
