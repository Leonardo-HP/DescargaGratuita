import React from 'react';
import {AbsoluteFill} from 'remotion';
import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';

export const MovingOutsideSVG: React.FC<{
	children: React.ReactNode;
  x: number
  y: number

}> = ({children,x,y}) => {
	const frame = useCurrentFrame();

	const Y = interpolate(frame, [0, 50], [0, y], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				transform: `translateY(${Y}px) translateX(${x}px)`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
