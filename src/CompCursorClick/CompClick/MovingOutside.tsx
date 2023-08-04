import React from 'react';
import {AbsoluteFill} from 'remotion';
import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';

export const MovingOutside: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();

	const Y = interpolate(frame, [0, 10], [0, -50], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				transform: `translateY(${Y}px)`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
